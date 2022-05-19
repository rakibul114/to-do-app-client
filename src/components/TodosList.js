import React from 'react';



const TodosList = ({ todos, setTodos, setEditTodo }) => {

    // Complete button
    const handleComplete = ( todo ) => {
        
        setTodos(
            todos.map((item) => {
                if (item?.id === todo?.id) {
                    return { ...item, completed: !item.completed };
                }
                return item;
            })
        );
    };

    // Edit button
    const handleEdit = ({id}) => {
        const findTodo = todos.find(todo => todo.id === id);
        console.log(findTodo);
        setEditTodo(findTodo);
    };

    // Delete button
    const handleDelete = ({ id }) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
      <div>
        {todos.map((todo) => (
          <li className="list-item" key={todo.id}>
            <input
              type="text"
              value={todo.title}
              className={`list ${todo.completed ? 'complete' : ''}`}
              onChange={(event) => event.preventDefault()}
            />

            <div>
              <button className="button-complete task-button" onClick={() =>handleComplete(todo)}>
                <i className="fa-solid fa-circle-check"></i>
              </button>
              <button className="button-edit task-button" onClick={() => handleEdit(todo)}>
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <button className="button-delete task-button" onClick={() =>handleDelete(todo)}>
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </li>
        ))}
      </div>
    );
};

export default TodosList;