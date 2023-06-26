/* libraries */
import { useState } from 'react';
import { useDispatch } from 'react-redux';

/* models */
import { Pokemon } from '../models/pokemon.model';

/* redux */
import { addSearch } from '../state/slices/search.slice';

export const usePokemonSearch = () => {
  const dispatch = useDispatch();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const searchPokemon = async (name: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      if (!response.ok) {
        throw new Error('Pokemon not found');
      }

      const data: Pokemon = await response.json();
      setPokemon(data);
      dispatch(addSearch(name));
      return data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { pokemon, loading, error, searchPokemon, setPokemon };
};
