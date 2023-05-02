import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { fetchAllCoins } from '../redux/all-coins/allCoinsSlice';
import { setupTop100 } from '../redux/price-convertion/priceConvertionSlice';
import GlobalData from './GlobalData';
import '../styles/AllCoins.css';

const AllCoins = () => {
  const {
    allCoins,
    results,
    isLoading,
    error,
  } = useSelector(
    (state) => state.allCoins,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (allCoins !== 'All Coins') return;
    dispatch(fetchAllCoins());
  }, [dispatch, allCoins]);

  const handleSetTop100CoinsPrices = () => {
    const convertionCurrencies = allCoins.map((coin) => ({
      image: coin.image,
      symbol: coin.symbol,
      price: coin.current_price,
    }));
    dispatch(setupTop100(convertionCurrencies));
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (allCoins !== 'All Coins') {
    const render = results?.length ? results : allCoins;
    return (
      <main className="categoriesMain">
        <GlobalData />
        <SearchBar />
        {render.map((coin) => (
          <Link to={`coin-details/${coin.id}`} onClick={handleSetTop100CoinsPrices} key={coin.id}>
            <article className="coin">
              <data className="rank">{coin.market_cap_rank}</data>
              <header>
                <img src={coin.image} alt={coin.name} className="coin-img" />
                <h2 className="coin-symbol">{coin.symbol.toUpperCase()}</h2>
              </header>
              <section>
                <data className="coin-price">{`$${coin.current_price.toLocaleString()}`}</data>
              </section>
              <section>
                <data className="prc-chng-perc">{`${coin.price_change_percentage_24h.toFixed(1)}%`}</data>
              </section>
              <section>
                <data className="coin-mrkt-cap">{`$${coin.market_cap}`}</data>
              </section>
            </article>
          </Link>
        ))}
      </main>
    );
  }

  return allCoins;
};

export default AllCoins;
