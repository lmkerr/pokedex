import Button from './components/Button';
import Input from './components/Input';

const Search = () => {
  return (
    <div className="card">
      <form>
        <Input type="text" placeholder="Search..." />
        <Button type="submit" value="submit">
          Search
        </Button>
      </form>
    </div>
  );
};

export default Search;
