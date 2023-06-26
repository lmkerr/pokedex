/* libraries */
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import style from 'styled-components';

/* providers */
import { usePokemonSearch } from '../search.service';

/* models */
import { Pokemon } from '../../models/pokemon.model';

const Header = style.h1`
  text-transform: capitalize;
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
        <div>
          what
          <Header>{pokemon.name}</Header>
          <div className="card">{pokemon.name}</div>
        </div>
      )}
    </>
  );
};

export default PokemonDetails;
