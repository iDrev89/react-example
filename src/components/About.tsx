import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

// Simulamos una carga asíncrona
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const AboutContent: React.FC = () => {
  return (
    <div className="about">
      <h1>Sobre Nosotros</h1>
      <p>Esta es una aplicación de ejemplo que demuestra el uso de:</p>
      <ul>
        <li>React Router para la navegación</li>
        <li>Context API para el manejo de estado global</li>
        <li>Componentes funcionales y hooks</li>
        <li>Suspense para manejo de carga asíncrona</li>
      </ul>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <AboutContent />
    </Suspense>
  );
};

export default About; 