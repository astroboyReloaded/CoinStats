import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllCoins } from '../redux/all-coins/allCoinsSlice';

const AllCoins = () => {
  const { allCoins, isLoading, error } = useSelector((state) => state.allCoins);

  const dispatch = useDispatch();

  useEffect(() => {
    if (allCoins !== 'All Coins') return;
    dispatch(fetchAllCoins());
  }, [dispatch, allCoins.length]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (allCoins !== 'All Coins') {
    return (
      <main className="categoriesMain">
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
  }

  return allCoins;
};

export default AllCoins;
