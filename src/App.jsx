import { useState } from 'react';
import Form from './components/Form'; // Input de tareas
import { TodoList } from './components/TodoList';
import Filter from './components/Filter';

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
    
  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task));
    };
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const [filter, setFilter] = useState('all');

    const filteredTasks = tasks.filter((task) => {
  if (filter === 'completed') return task.completed;
  if (filter === 'pending') return !task.completed;
  return true; // 'all'
  });

  return (
<div id="center">
      <h1>To Do List</h1>
      <Form onAddTask={handleAddTask} />
      <Filter filter={filter} onFilterChange={setFilter} />
      <TodoList
        tasks={filteredTasks} 
        onToggleComplete={handleToggleComplete} 
        onDelete={handleDeleteTask}
      />
    </div>
  );
}

export default App;
