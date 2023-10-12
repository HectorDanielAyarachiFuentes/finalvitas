import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Clock from './Clock'; // Importa el módulo Clock

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Logotipo de Vite" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="Logotipo de React" />
        </a>
      </div>
      <h1>Vite + React App</h1>
      <div className="card">
        <button onClick={incrementCount}>
          Incrementar contador ({count})
        </button>
        <button onClick={resetCount}>
          Reiniciar contador
        </button>
        <Clock /> {/* Agrega el componente Clock para mostrar la hora */}
        <p>
          Edita el archivo <code>src/App.jsx</code> y guarda para probar la Recarga Rápida del Módulo (HMR).
        </p>
      </div>
      <p className="read-the-docs">
        Haz clic en los logotipos de Vite y React para obtener más información.
      </p>
    </>
  );
}

export default App;
