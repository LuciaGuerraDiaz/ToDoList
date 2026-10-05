import { useState, useEffect } from 'react';
import Form from './components/Form'; // Input de tareas
import { TodoList } from './components/TodoList';
import Filter from './components/Filter';

function App() {
  const [tasks, setTasks] = useState(() => {
  const saved = localStorage.getItem('tasks');
  return saved ? JSON.parse(saved) : [];
});

  const [filter, setFilter] = useState('all');
  useEffect(() => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

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


  const filteredTasks = tasks.filter((task) => {
  if (filter === 'completed') return task.completed;
  if (filter === 'pending') return !task.completed;
  return true; // 'all'
  });

  const message = {
  all: 'Este es el listado de tus tareas',
  completed: 'Este es el listado de tareas completadas',
  pending: 'Este es el listado de tareas incompletas',
  };

  const emptyMessages = {
  all: 'Todavía no agregaste tareas',
  completed: 'No hay tareas completadas',
  pending: 'No hay tareas incompletas',
  };

return (
  <div id="center">
    <h1>To Do</h1>
    <span>
      <h2>Transforma ideas en acciones</h2>
    </span>

    <div className="controls-conteiner">
    <Form 
      onAddTask={handleAddTask} 
      filter={filter} 
      onFilterChange={setFilter} 
    />
    
    </div>

    <h2>{message[filter]}</h2>

    <TodoList
      tasks={filteredTasks}
      emptyMessage={emptyMessages[filter]}
      onToggleComplete={handleToggleComplete}
      onDelete={handleDeleteTask}
    />
  </div>
);
}

export default App;
