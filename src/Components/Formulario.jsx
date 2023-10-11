import React, { useState } from 'react'


function Formulario({addTodos}) {
    const [value, setValue] = useState("");
    const [categoria, setCategoria] = useState("");

    const HandleSubmit = (e) => {

        e.preventDefault();
        if (!value || !categoria) return;
        console.log(value, categoria);
        addTodos(value, categoria);
        setValue("");
        setCategoria("");



    };

    return (
        <div className='FormularioToDo'>

            <h2>Criar Tasks</h2>
            <form onSubmit={HandleSubmit}>
                <input type="text" value={value} placeholder='Tarefa' onChange={(e) => setValue(e.target.value)} />
                <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                    <option value="">Selecione Uma Categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Estudos">Estudos</option>
                    <option value="Pessoal">Pessoal</option>
                </select>
                <button type="submit">Adicionar Tarefa</button>
            </form>
        </div>
    )
}

export default Formulario