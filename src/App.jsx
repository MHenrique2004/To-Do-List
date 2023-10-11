import { useState } from "react"
import "./App.css"
import Todo from "./Components/Todo"
import Formulario from "./Components/Formulario"


export default function App() {

    const [todos, setTodos] = useState([

        {
            id: 1,
            text: "Criar funcionalidade x no sistema",
            category: "Trabalho",
            isCompleted: false,
        },
        {
            id: 2,
            text: "Ir pra academia",
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

        const newTodos = [...todos,{
            id: Math.floor(Math.random() * 1000000),
            text,
            category,
            isCompleted: false,
        },
    ];

    setTodos(newTodos);

    };

    return (

        <div className="App">
            <h1>Lista de Tarefas</h1>
            <div className="todolist">
                {todos.map((todo) => (
                    <Todo todo={todo} key={todo.id} />
                ))}
            </div>
            <Formulario addTodos={addTodos} />
        </div>

    )
};