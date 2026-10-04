import { useState } from 'react';

export default function Form({ onAddTask }) {

  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // 

    // Validación 
    if (!taskText.trim()) return;

    //Agrega
    if (onAddTask) {
      onAddTask(taskText.trim());
    }

    // Limpia el input 
    setTaskText('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Agrega una tarea a la lista"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)} // Actualiza el estado con cada tecla
      />
      <button type="submit">Add Task</button>
    </form>
  );
}