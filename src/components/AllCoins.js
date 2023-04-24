import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllCoins } from '../redux/allCoins/AllCoinsSlice';

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
        <div key={coin.id} className="coin">
          <img src={coin.image} alt={coin.name} />
          <h2>{coin.name}</h2>
          <p>{coin.symbol}</p>
          <p>{coin.current_price}</p>
        </div>
      ))}
    </main>
  );
};

export default AllCoins;
