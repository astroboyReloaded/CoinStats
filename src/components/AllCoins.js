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
    return <p className="All-Loading">Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (allCoins !== 'All Coins') {
    const render = results === null ? allCoins : results;
    console.log(JSON.stringify(render));
    return (
      <main className="categoriesMain">
        <GlobalData />
        <SearchBar />
        <section className="coin-table">
          <header className="head-tr">
            <h3 className="rank">#</h3>
            <h3 className="coin-td">COIN</h3>
            <h3 className="price-td">PRICE</h3>
            <h3 className="perc-24h-td">24H</h3>
            <h3 className="mrkt-cap-td">MARKET CAP</h3>
          </header>
          <main className="coin-tbody">
            {render.map((coin) => (
              <Link to={`coin-details/${coin.id}`} onClick={handleSetTop100CoinsPrices} key={coin.id}>
                <article
                  className="body-tr"
                  data-testid="coinData-Container"
                >
                  <p className="rank">{coin.market_cap_rank}</p>
                  <p className="coin-td">
                    <img
                      src={coin.image}
                      alt={coin.name}
                      className="coin-img"
                    />
                    <h2 className="all-coins-symbol">{coin.symbol.toUpperCase()}</h2>
                  </p>
                  <p className="price-td">
                    <data className="coin-price">{`$${coin.current_price.toLocaleString()}`}</data>
                  </p>
                  <p className="perc-24h-td">
                    <data className={`prc-chng-perc ${coin.price_change_percentage_24h > 0 ? 'green' : 'red'}`}>{`${coin.price_change_percentage_24h.toFixed(1).replace('-', '')}%`}</data>
                  </p>
                  <p className="mrkt-cap-td">
                    <data>{`$${coin.market_cap?.toLocaleString()}`}</data>
                  </p>
                </article>
              </Link>
            ))}
          </main>
        </section>
      </main>
    );
  }

  return allCoins;
};

export default AllCoins;
