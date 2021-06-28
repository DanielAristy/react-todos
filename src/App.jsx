import React, { Fragment, useState, useRef } from 'react';
import { TodoList } from './components/TodoList'
import { uuid } from 'uuidv4';


export function App(){

    const [todos, setTodos] = useState([
        { id: 1, task: "Tarea 1", completed: false },
        { id: 2, task: "Tarea 2", completed: false },
        { id: 3, task: "Tarea 3", completed: false },
        { id: 4, task: "Tarea 4", completed: false },
    ]);

    const toggleTodo = (id) => {
        //Se crea una copia de Array
        const newTodos = [...todos]; //Spread operator
        //Se hace una busqueda para encontrar el todo por su id
        const todo = newTodos.find((todo) => todo.id === id);
        //Respecto al completado de la tarea hacemos su inverso
        todo.completed = !todo.completed;
        //Enviamos el nuevo todo al que tenemos en el estado
        setTodos(newTodos);
    }
    const todoRef = useRef();

    const addTodo = () => {
        const task = todoRef.current.value;
        if(task === '') return;

        setTodos((todos) => {
            return [...todos, {id: uuid() , task, completed: false}]
        })

        todoRef.current.value = null;
    }

    return (
        <Fragment>
            <TodoList todos={todos} toggleTodo={toggleTodo} />
            <input ref={todoRef} type="text" name="" placeholder="Nueva Tarea" />
            <button onClick={addTodo}>Agregar Tarea</button>
            <button>Eliminar Tarea</button>
            <div>Te quedan {todos.filter((todo) => !todo.completed).length} tareas por terminar</div>
        </Fragment>
    )
}