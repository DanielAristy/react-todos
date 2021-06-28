import React from 'react'

export function TodoItem({ todo, toggleTodo }) {

    const { id, task, completed } = todo;

    const handleTodoClick = () => {
        toggleTodo(id);
    }

    return <table>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Tarea</td>
                    <td>¿Completado?</td>
                </tr>
            </thead>
            <tbody>
                <td>{id}</td>
                <td>{task}</td>
                <td>
                    <input type="checkbox" defaultChecked={completed}
                    checked={completed}
                    onChange={handleTodoClick}
                    />
                </td>
                <button>Eliminar</button>
                <button>Editar</button>
            </tbody>
        </table>
}
