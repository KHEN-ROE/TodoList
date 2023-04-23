import React from 'react'


const TodoBoard = ({ todos }) => {


    return (
        <div>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </div>
    )
}

export default TodoBoard
