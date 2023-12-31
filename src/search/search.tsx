/* libraries */
import { FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

/* components */
import Button from '../components/button';
import Input from '../components/input';

/* providers */
import { usePokemonSearch } from './search.service';
import Error from '../components/error';

/* state */
import { RootState } from '../state/store';

const Search = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState<string>('');
  const { pokemon, loading, error, searchPokemon } = usePokemonSearch();
  const previousSearches = useSelector((state: RootState) => {
    return state.search.previousSearches || [];
  });

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchPokemon(searchTerm).then((data) => {
      if (data) {
        // redirect to details page
        navigate(`/pokemon/${searchTerm}`, { state: { pokemon } });
      } else {
        // weird error masked as a 200, log it somehow...
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
        <h4>Search History</h4>
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
