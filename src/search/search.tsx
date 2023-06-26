/* libraries */
import { FormEvent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

/* components */
import Button from '../components/button';
import Input from '../components/input';

/* providers */
import { usePokemonSearch } from './search.service';
import { addSearch } from '../state/slices/search.slice';
import Error from '../components/error';

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        dispatch(addSearch(searchTerm));
        navigate(`/pokemon/${searchTerm}`, { state: { pokemon } });
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
          <Button type="submit" value="submit" disabled={loading}>
            {!loading && 'Search'}
            {loading && 'Loading...'}
          </Button>
        </form>
        {error && <Error className="error">{error}</Error>}
        {loading && <p>Loading...</p>}
      </div>
      <div className="card">
        <h4>Previous Searches</h4>
        {previousSearches?.length === 0 && (
          <div>No previous searches found.</div>
        )}
        {previousSearches?.length >= 0 &&
          previousSearches.map((search: string, i: number) => (
            <div key={i}>
              <Link to={`/pokemon/${search}`}>{search}</Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default Search;
