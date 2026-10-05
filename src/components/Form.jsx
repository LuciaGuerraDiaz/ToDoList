import { useState } from 'react';
import Filter from './Filter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default function Form({ onAddTask, filter, onFilterChange }) {
  const [taskText, setTaskText] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskText.trim()) {
      setError('Por favor, ingresa un texto para la tarea');
      setSuccessMessage('');
      return;
    }

    if (onAddTask) {
      onAddTask(taskText.trim());
    }

    setTaskText('');
    setError('');
    setSuccessMessage('¡Tarea agregada con éxito!');

    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  const handleChange = (e) => {
    setTaskText(e.target.value);
    if (error) setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Agrega una tarea a la lista"
        value={taskText}
        onChange={handleChange}
        className={`task-input ${error ? 'input-error' : ''}`}
      />

      {/* Mensaje de Error (usa faPenToSquare) */}
      {error && (
        <span className="error-text">
          <FontAwesomeIcon icon={faPenToSquare} />
          {error}
        </span>
      )}

      {/* Mensaje de Éxito (usa faCheckCircle) */}
      {successMessage && (
        <span className="success-text">
          <FontAwesomeIcon icon={faCheckCircle} />
          {successMessage}
        </span>
      )}

      <div className="buttons-row">
        <button type="submit" className="btn-add">
          Agrega tu tarea
        </button>
        <Filter filter={filter} onFilterChange={onFilterChange} className="btn-filter"/>
      </div>
    </form>
  );
}