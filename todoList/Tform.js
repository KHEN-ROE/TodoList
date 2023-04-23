import React, { useEffect, useState } from 'react'
import TodoBoard from './TodoBoard';

const Tform = () => {
    const [todos, setTodos] = useState([]); // 입력값을 담을 배열
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
                setTodos([...todos, data]);
                setNewTodo('');
            });
    }

    return (
        <>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)} className='input' />
                    <button type="submit">Add Todo</button>
                </form>
            </div>
            <div className='board'>
                <TodoBoard todos={todos} />
            </div>
        </>
    );
}

export default Tform
