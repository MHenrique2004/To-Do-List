import React from 'react'

const Todo = ({todo, removerTodo, completaTask}) => {
    return (
        <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
            <div className="content">
                <p className="">{todo.text}</p>
                <p className="category">{todo.category}</p>
            </div>
            <div>
                <button className='Completar'onClick={() => completaTask(todo.id)}>Completar</button>
                <button className='Deletar' onClick={() => removerTodo(todo.id)}>Deletar</button>
            </div>
        </div>
    )
};

export default Todo