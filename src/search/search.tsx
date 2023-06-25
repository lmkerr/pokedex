/* libraries */
import { FormEvent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

/* components */
import Button from '../components/button';
import Input from '../components/input';

/* providers */
import { usePokemonSearch } from './search.service';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { pokemon, loading, error, searchPokemon } = usePokemonSearch();
  const previousSearches = useSelector((state: any) => {
    return state.search.previousSearches || [];
  });

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchPokemon(searchTerm).then(() => {
      if (pokemon) {
        // redirect to details page
      } else {
        // handle error somehow...
      }
    });
  };

  return (
    <>
      <div className="card">
        <form onSubmit={handleSearch}>
          <Input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onChange={(e: any) => setSearchTerm(e.target.value)}
          />
          <Button type="submit" value="submit">
            Search
          </Button>
        </form>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
      <div className="card">
        <h4>Previous Searches</h4>
        {previousSearches?.length === 0 && (
          <div>No previous searches found.</div>
        )}
        {previousSearches?.length >= 0 &&
          previousSearches.map((search: string, i: number) => (
            <div key={i}>{search}</div>
          ))}
      </div>
    </>
  );
};

export default Search;
