import React, { JSX, useContext } from "react";
import { Link } from "react-router-dom";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { TodoContext } from "../context/TodoContext";

const Home: React.FC = (): JSX.Element => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useContext(TodoContext);
  
  return (
    <div className="home">
      <h1>Lista de Tareas</h1>
      <TodoForm onSubmit={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} hell="true" />
      <div className="navigation">
        <Link to="/about">Sobre Nosotros</Link>
        <Link to="/stats">Estadísticas</Link>
      </div>
    </div>
  );
};

export default Home;
