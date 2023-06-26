/* libraries */
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import style from 'styled-components';

/* providers */
import { usePokemonSearch } from '../search.service';

/* styles */
import '../../index.css';

const Header = style.h1`
  text-transform: capitalize;
  padding: 0 1rem;
`;

const Image = style.img`
  
`;

const PokemonDetails = () => {
  const location = useLocation();
  const { name } = useParams();
  const { pokemon, loading, error, searchPokemon, setPokemon } =
    usePokemonSearch();

  useEffect(() => {
    if (location.state?.pokemon) {
      setPokemon(location.state.pokemon);
    } else if (name) {
      searchPokemon(name);
    } else {
      // redirect to 404 page
    }
  }, []);

  return (
    <>
      {pokemon && (
        <div className="card">
          <Image
            src={pokemon.sprites.front_default}
            alt={`Default View of ${pokemon.name}`}
          />
          <Header>{pokemon.name}</Header>
        </div>
      )}
    </>
  );
};

export default PokemonDetails;
