import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Clock from './Clock';
import ImageCarousel from './ImageCarousel'; // Importa el componente del carrusel

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  // Define un arreglo de objetos que contienen la URL de la imagen y el texto alternativo
  const imageArray = [
    {
      url: 'https://scontent.fnqn4-1.fna.fbcdn.net/v/t39.30808-6/386736214_7021152617976099_3185847994654009244_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEwxyO6NVHldKNFj3PKYDmxmwJIMahtc3CbAkgxqG1zcGu9C1cbH2tYtXvJuNxRNJdFOTqrGVaaMfZC_0_WsgVx&_nc_ohc=GL9815uFmOwAX-xJLAb&_nc_ht=scontent.fnqn4-1.fna&oh=00_AfCuTBugAocp1mnfkzvz46hLPH7xik6ubXXe5qf1gqTtJQ&oe=652E16E0',
      alt: 'Imagen 1',
    },
    {
      url: 'https://scontent.fnqn4-1.fna.fbcdn.net/v/t39.30808-6/386067338_7001682429923118_9198725071768280354_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFNAgY4euawVQ-zJyRieqImrnrd11SyKHOuet3XVLIoc_BSQ-ItojOS8Zs7B2isxUdDel4S2k7CyKbkJl69zl0V&_nc_ohc=CUp3D7bOV7sAX9Obfmq&_nc_ht=scontent.fnqn4-1.fna&oh=00_AfAujDl6uq8tY0gSbxFmq6Iw8SaFgz-J8jgZa685MGTgxQ&oe=652DE498',
      alt: 'Imagen 2',
    },
    {
      url: 'https://scontent.fnqn4-1.fna.fbcdn.net/v/t39.30808-6/330617731_1210006002995367_5119470647852886059_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHqm2n0RWgWkTDac3nK8tn7_NrqDiKvOFn82uoOIq84WY70mqlJO3-eNKpHUTcML5M_FjcNK8QmsxSMnqG5ktlL&_nc_ohc=agnT2g59QXQAX8EPms4&_nc_ht=scontent.fnqn4-1.fna&oh=00_AfBUlF3Gq0kbRThgfIPIp3hflf10SjK8xWlr__-5yDCFZg&oe=652D6421',
      alt: 'Imagen 3',
    },
  ];

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
        <Clock />
        <ImageCarousel images={imageArray} /> {/* Ahora pasamos el arreglo de objetos */}
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
