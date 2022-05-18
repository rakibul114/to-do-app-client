import React from 'react';

const TodosList = ({ todos, setTodos }) => {
    return (
        
        <div>
        {
            todos.map(todo => (
                <li className='todo-list'>
                
                </li>
            ))
        }
        </div>
    );
};

export default TodosList;