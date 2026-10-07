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
      setError('Por favor, ingresá un texto para la tarea');
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
    }, 2000);
  };

  const handleChange = (e) => {
    setTaskText(e.target.value);
    if (error) setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="form-row">
        <input
          type="text"
          placeholder="Ingresá una tarea a la lista"
          value={taskText}
          onChange={handleChange}
          className={`task-input ${error ? 'input-error' : ''}`}
        />

          <button type="submit" className="btn-add">
            Agregar
          </button>
      </div>

        {/* Mensaje de Error (usa faPenToSquare) */}
      <div className="form-message">
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
      </div>
    </form>
  );
}