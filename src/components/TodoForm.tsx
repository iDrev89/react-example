import React, { useState, FormEvent } from 'react';
import { TodoFormProps } from '../types/todo';

const TodoForm: React.FC<TodoFormProps> = ({ onSubmit }) => {
  const [text, setText] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nueva tarea..."
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default TodoForm;