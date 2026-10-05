import React from 'react';
import { TaskItem } from './TaskItem'; // Importa el ítem individual


export const TodoList = ({ tasks, emptyMessage, onToggleComplete, onDelete }) => {
  return (
    <div className="todo-list">
      {tasks.length === 0 ? (
        <p>{emptyMessage}</p>
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