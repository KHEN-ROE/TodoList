import React, { useEffect, useState } from 'react'
import GoogleLoginButton from './GoogleLoginButton';

const Tform = () => {
  const [todos, setTodos] = useState([]); // 입력값을 담을 배열
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => { // get 요청. 이때는 method, headers, body 안써도 됨
    fetch('http://localhost:8080/api/todos')
      .then(response => response.json()) // 응답을 받아서 제이슨 형식으로 바꾸고?
      .then(data => setTodos(data)); //받은 data를 setTodos에 파라미터로 전달
  }, []);

  function addTodo(e) {
    console.log("newtodo", newTodo)
    e.preventDefault(); // 새로고침 등 방지
    fetch('http://localhost:8080/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: newTodo }) //JSON 형태로 변환해서 서버에 전달
    })
      .then(response => response.json()) // 새로운 newTodo를 서버로 보내고, 서버로부터 응답을 받아와서 화면에 렌더링. 
      // 서버로부터 응답을 받으면, response.json() 함수 사용해서 응답데이터를 자.스 객체로 변환 
      .then(data => { // 변환된 데이터는 data에 저장
        setTodos([...todos, data]); //... 연산자 - 기존 데이터에 새로운 데이터(newTodo) 더하는 새로운 배열 생성
        setNewTodo(''); // newTodo 변수를 빈 문자열로 설정. 웹페이지에서 input field를 clear시킴.
        // 그니까, 제출하면 setTodo에는 기존 데이터 + 제출한 데이터(newTodo) 포함된 새 배열 생성하고, setNewTodo 한번 더 호출해서 input field를 clear시킴
      });
  }

  const deleteTodo = (id) => {
    fetch(`http://localhost:8080/api/todos/${id}`, {
      method: 'DELETE'
    })
      .then(response => {
        console.log("response", response);
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
      });
  }


  const editTodo = (id) => {
    console.log("id to edit:", id)
    const updatedText = prompt("수정할 내용 입력:");
    if (updatedText) {
      fetch(`http://localhost:8080/api/todos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: updatedText })
      })
        .then(response => response.json())
        .then(data => {
          const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
              return { ...todo, text: data.text };
            } else {
              return todo;
            }
          });
          setTodos(updatedTodos);
        });
    }
  }

  return (
    <div>
      <div className='form'>
        <form onSubmit={addTodo}>
          <input type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)} className='input' placeholder='                                                                    Stop everything, Do onething' />
          <button type="submit">Add Todo</button>
        </form>
        <div className='logbutton'>
          <GoogleLoginButton />
        </div>
      </div>
      <div className='list'>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}
            <button type='submit' onClick={() => editTodo(todo.id)}>edit</button>
            <button type='submit' onClick={() => deleteTodo(todo.id)} >delete</button>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Tform
