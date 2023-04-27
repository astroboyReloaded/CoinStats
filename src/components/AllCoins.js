import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllCoins } from '../redux/all-coins/allCoinsSlice';

const AllCoins = () => {
  const { allCoins, isLoading, error } = useSelector((state) => state.allCoins);

  const dispatch = useDispatch();

  useEffect(() => {
    if (allCoins.length) return;
    dispatch(fetchAllCoins());
  }, [dispatch, allCoins.length]);

  return (
    <main className="categoriesMain">
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {allCoins.map((coin) => (
        <Link to={`coin-details/${coin.id}`} key={coin.id} className="coin">
          <img src={coin.image} alt={coin.name} />
          <h2>{coin.name}</h2>
          <p>{coin.id}</p>
          <p>{coin.current_price}</p>
        </Link>
      ))}
    </main>
  );
};

export default AllCoins;
