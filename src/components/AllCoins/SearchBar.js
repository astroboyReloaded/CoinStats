import { useSelector, useDispatch } from 'react-redux';
import { setSearch } from '../../redux/all-coins/allCoinsSlice';
import '../../styles/SearchBar.css';

const SearchBar = () => {
  const handleSubmit = (e) => e.preventDefault();

  const { allCoins: data, search } = useSelector((state) => state.allCoins);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const search = e.target.value;
    const results = data !== 'All Coins' ? data.filter((item) => (
      item.id.indexOf(search.toLowerCase()) > -1
      || item.symbol.indexOf(search.toLowerCase()) > -1)) : [];
    const searchResults = {
      search,
      results,
    };
    dispatch(
      setSearch(searchResults),
    );
  };

  return (
    <form onSubmit={handleSubmit} className="searchContainer">
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        placeholder="Search"
        value={search?.length ? search : ''}
        className="searchBar"
      />
    </form>
  );
};

export default SearchBar;
