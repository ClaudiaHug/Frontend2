import React from 'react';

const App: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
      }}
    >
      <h1>Hello World</h1>
      <button
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          marginTop: '20px',
        }}
        onClick={() => alert('¡Botón clickeado!')}
      >
        Click here
      </button>
    </div>
  );
};

export default App;
