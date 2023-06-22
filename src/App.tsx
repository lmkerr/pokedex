import { useState } from 'react';

import pokeball from './assets/pokeball.png';
import './App.css';
import Search from './Search';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img src={pokeball} className="logo react" alt="Spinning Pokeball" />
      </div>
      <h1>Pokédex</h1>

      <Search></Search>
      <p className="read-the-docs">
        This is a demo application made by{' '}
        <a
          href="https://www.linkedin.com/in/lorenkerr/"
          target="_blank"
          rel="noreferrer"
        >
          Loren M. Kerr
        </a>{' '}
        and is in no way associated with Ninendo or the Pokémèn franchise.
      </p>
    </>
  );
}

export default App;
