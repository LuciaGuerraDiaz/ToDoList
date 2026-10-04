import { useState } from 'react';
import Form from './components/Form'; // Nombre con mayúscula inicial

function App() {
const [tasks, setTasks] = useState([]);

const handleAddTask = (text) => {
    const newTask = {
      id: crypto.randomUUID(), // Generar un ID
      text: text,
      completed: false
    };


setTasks([...tasks, newTask]);
    console.log('Tarea agregada:', newTask);
  };


  return (
<div id="center">
      <h1>To Do List</h1>
      <Form onAddTask={handleAddTask} />
      
      {/* Vista previa temporal de las tareas agregadas */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App
