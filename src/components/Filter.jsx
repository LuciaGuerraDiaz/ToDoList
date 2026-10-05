import { useState } from 'react';

export default function Filter ({filter, onFilterChange}){
    return (
    <select value={filter} onChange={(e) => onFilterChange(e.target.value)}>
    <option value="all">Todas</option>
    <option value="completed">Completadas</option>
    <option value="pending">Incompletas</option>
    </select>
  );
}