import React, { useState, useEffect } from 'react';

/* 
순서 - 0. 처음에 랜더링될 때 DB에 있는 정보를 화면에 출력하도록 만들었다.
       1. 새로운 TODO를 추가할 때 -  웹페이지에서 요청하면 DB에 먼저 데이터가 저장된다.
       2. 저장된 데이터를 다시 웹페이지에 뿌려준다.
*/

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/todos')
      .then(response => response.json())
      .then(data => setTodos(data));
  }, []);

  function handleSubmit(e) {
    console.log("newtodo", newTodo)
    e.preventDefault();
    fetch('http://localhost:8080/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: newTodo })
    })
      .then(response => response.json())
      .then(data => {
        setTodos([...todos, data]); //기존 데이터 유지하면서 새 데이터 저장
        setNewTodo('');
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
