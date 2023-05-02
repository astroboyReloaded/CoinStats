import { useSelector, useDispatch } from 'react-redux';
import { setSearch } from '../redux/all-coins/allCoinsSlice';

const SearchBar = () => {
  const handleSubmit = (e) => e.preventDefault();

  const { allCoins: data, search } = useSelector((state) => state.allCoins);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const search = e.target.value.toLowerCase();
    const results = data.filter((item) => (
      item.id.indexOf(search) > -1
      || item.symbol.indexOf(search) > -1));
    const searchResults = {
      search,
      results,
    };
    dispatch(
      setSearch(searchResults),
    );
  };

  const handleClear = () => {
    dispatch(setSearch({
      search: '',
      results: [],
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        placeholder="Search"
        value={search?.length ? search : ''}
      />
      <input type="button" value="↻" onClick={handleClear} />
    </form>
  );
};

export default SearchBar;
