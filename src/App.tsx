import pokeball from './assets/pokeball.png';
import './app.css';
import Search from './search/search';

function App() {
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
        and is in no way associated with neither Nintendo&#8482; nor the
        Pokémèn&#8482; franchises.
      </p>
    </>
  );
}

export default App;
