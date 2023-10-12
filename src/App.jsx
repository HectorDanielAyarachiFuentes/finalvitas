import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Logotipo de Vite" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="Logotipo de React" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          el contador es {count}
        </button>
        <p>
          Edita <code>src/App.jsx</code> y guarda para probar la Recarga Rápida del Módulo (HMR).
        </p>
      </div>
      <p className="read-the-docs">
        Haz clic en los logotipos de Vite y React para obtener más información.
      </p>
    </>
  )
}

export default App
