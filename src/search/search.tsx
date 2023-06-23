import { FormEvent, useState } from 'react';
import Button from '../components/button';
import Input from '../components/input';
import { usePokemonSearch } from './search.service';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { pokemon, loading, error, searchPokemon } = usePokemonSearch();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchPokemon(searchTerm);
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
      </div>
    </>
  );
};

export default Search;
