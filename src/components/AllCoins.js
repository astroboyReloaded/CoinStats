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
    const render = results === null ? allCoins : results;
    return (
      <main className="categoriesMain">
        <GlobalData />
        <SearchBar />
        <table className="coin-table">
          <thead className="allCoins-th">
            <tr className="head-tr">
              <th className="rank">#</th>
              <th className="coin-td">COIN</th>
              <th className="price-td">PRICE</th>
              <th className="perc-24h-td">24H</th>
              <th className="mrkt-cap-td">MARKET CAP</th>
            </tr>
          </thead>
          <tbody className="coin-tbody">
            {render.map((coin) => (
              <Link to={`coin-details/${coin.id}`} onClick={handleSetTop100CoinsPrices} key={coin.id}>
                <tr className="body-tr">
                  <td className="rank">{coin.market_cap_rank}</td>
                  <td className="coin-td">
                    <img
                      src={coin.image}
                      alt={coin.name}
                      className="coin-img"
                    />
                    <h2 className="all-coins-symbol">{coin.symbol.toUpperCase()}</h2>
                  </td>
                  <td className="price-td">
                    <data className="coin-price">{`$${coin.current_price.toLocaleString()}`}</data>
                  </td>
                  <td className="perc-24h-td">
                    <data className={`prc-chng-perc ${coin.price_change_percentage_24h > 0 ? 'green' : 'red'}`}>{`${coin.price_change_percentage_24h.toFixed(1).replace('-', '')}%`}</data>
                  </td>
                  <td className="mrkt-cap-td">
                    <data>{`$${coin.market_cap?.toLocaleString()}`}</data>
                  </td>
                </tr>
              </Link>
            ))}
          </tbody>
        </table>
      </main>
    );
  }

  return allCoins;
};

export default AllCoins;
