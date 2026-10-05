import React from 'react';
import { TaskItem } from './TaskItem'; // Importas el ítem individual que creamos antes

export const TodoList = ({ tasks, onToggleComplete, onDelete }) => {
  return (
    <div className="todo-list">
      {tasks.length === 0 ? (
        <p>No hay tareas pendientes</p>
      ) : (
        tasks.map((singleTask) => (
          <TaskItem
            key={singleTask.id}
            eachItem={singleTask}
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
};