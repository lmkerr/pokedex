/* libraries */
import { useState } from 'react';

/* models */
import { Pokemon } from '../models/pokemon.model';

export const getPokedex = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const retrievePokedex = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=1300`,
      );
      if (!response.ok) {
        throw new Error('Pokemon not found');
      }

      const data: Pokemon[] = await response.json();
      setPokemon(data);
      setError(null);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setPokemon([]);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    pokemonList: pokemon,
    pokedexLoading: loading,
    pokedexError: error,
    retrievePokedex,
  };
};
