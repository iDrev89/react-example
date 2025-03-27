import React, { JSX } from 'react';
import { TodoItemProps } from '../types/todo';

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }): JSX.Element => {
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span className="todo-text">{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Eliminar</button>
    </li>
  );
};

export default TodoItem;

// TodoApp > TodoList > TodoItem