import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
      <p>Cargando...</p>
    </div>
  );
};

export default LoadingSpinner; 