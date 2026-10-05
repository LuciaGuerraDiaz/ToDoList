import React from 'react';
import { FaCheck, FaTrash } from 'react-icons/fa'
export const TaskItem = ({eachItem, onToggleComplete, onDelete}) => {
    return (
    <div className = "task-item">
        <span
        style={{
            textDecoration: eachItem.completed ? 'line-through' : 'none',
            color: eachItem.completed ? '#8888' : '#000'
        }}
        >
            {eachItem.text}
        </span>
        
        <div className="button-group">
            {/* Ícono/Botón para alternar el estado completado (booleano) */}
            <button 
                onClick={() => onToggleComplete(eachItem.id)}
                className={`btn-check ${eachItem.completed ? 'completed' : ''}`}
            >
                <FaCheck />
            </button>

            {/* Ícono/Botón para eliminar la tarea */}
            <button 
                onClick={() => onDelete(eachItem.id)}
                className="btn-delete"
            >
                <FaTrash />
            </button>
        </div>
    </div>
    )
}