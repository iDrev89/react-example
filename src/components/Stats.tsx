import React, { Suspense, useContext } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import { TodoContext } from "../context/TodoContext";

// Simulamos una carga asíncrona
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const StatsContent: React.FC = () => {
  const { todos } = useContext(TodoContext);

  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const pendingTodos = totalTodos - completedTodos;

  return (
    <div className="stats">
      <h1>Estadísticas de Tareas</h1>
      <div className="stats-container">
        <div className="stat-item">
          <h3>Total de Tareas</h3>
          <p>{totalTodos}</p>
        </div>
        <div className="stat-item">
          <h3>Tareas Completadas</h3>
          <p>{completedTodos}</p>
        </div>
        <div className="stat-item">
          <h3>Tareas Pendientes</h3>
          <p>{pendingTodos}</p>
        </div>
      </div>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <StatsContent />
    </Suspense>
  );
};

export default Stats;
