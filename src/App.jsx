import { useState, useEffect } from 'react';
import Form from './components/Form'; // Input de tareas
import { TodoList } from './components/TodoList';
import Filter from './components/Filter';
import confetti from 'canvas-confetti';
import { ScrollTitle } from './components/ScrollTitle';

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
    const task = tasks.find((t) => t.id === id);
    if (task && !task.completed) {
    confetti({ particleCount: 120, spread: 70, origin: { y: 0.7 } });
    }
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task));
    };
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEditTask = (id, newText) => {
  setTasks(
    tasks.map((task) =>
      task.id === id ? { ...task, text: newText } : task
    )
  );
  };


  const filteredTasks = tasks.filter((task) => {
  if (filter === 'completed') return task.completed;
  if (filter === 'pending') return !task.completed;
  return true; // 'all'
  });

  const message = {
  all: 'Listado de tareas',
  completed: 'Felicitaciones estas son las tareas completadas',
  pending: 'Tareas incompletas',
  };

  const emptyMessages = {
  all: 'Todavía no agregaste tareas',
  completed: 'No hay tareas completadas',
  pending: 'No hay tareas incompletas',
  };

return (
  <div id="center">
    <h1>Hoy quiero hacer...</h1>
    <span>
      <h2><ScrollTitle /></h2>
    </span>

    <div className="controls-conteiner">
    <Form 
      onAddTask={handleAddTask} 
      onFilterChange={setFilter} 
    />
    </div>

     <hr className="divider" />
    
    <Filter filter={filter} onFilterChange={setFilter} />

    
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
