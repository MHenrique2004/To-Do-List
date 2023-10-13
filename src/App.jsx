import { useState } from "react"
import "./App.css"
import Todo from "./Components/Todo"
import Formulario from "./Components/Formulario"


export default function App() {

    const [todos, setTodos] = useState([

        {
            id: 1,
            text: "Fazer landing page",
            category: "Trabalho",
            isCompleted: false,
        },
        {
            id: 2,
            text: "Tocar guitarra",
            category: "Pessoal",
            isCompleted: false,
        },
        {
            id: 3,
            text: "Estudar React",
            category: "Estudos",
            isCompleted: false,
        }

    ]);

    const addTodos = (text, category) => {

        const newTodos = [...todos, {
            id: Math.floor(Math.random() * 1000000),
            text,
            category,
            isCompleted: false,
        },
        ];

        setTodos(newTodos);

    };

    function removerTodo(id) {

        const newtodos = [...todos]
        const filtered = newtodos.filter((todo) =>
            todo.id !== id ? todo : null);

        setTodos(filtered);
    };

    function completaTask(id) {

        const newtodos = [...todos]
            newtodos.map((todo) =>
            todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);

            setTodos(newtodos);
        console.log('Funcionou');
    };



    return (

        <div className="App">
            <h1>Lista de Tarefas</h1>
            <div className="todolist">
                {todos.map((todo) => (
                    <Todo todo={todo} key={todo.id} removerTodo={removerTodo} completaTask={completaTask} />
                ))}
            </div>
            <Formulario addTodos={addTodos} />
        </div>

    )
};