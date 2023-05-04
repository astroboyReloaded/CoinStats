import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import parser from 'html-react-parser';
import {
  fetchCoinDetails,
  clearCoinDetails,
} from '../redux/coin-details/coinDetailsSlice';
import PriceConvertion from './PriceConvertion';
import '../styles/CoinDetails.css';
import useSetThisCoinInFilter from '../hooks/useSetThisCoinInFilter';

const CoinDetails = () => {
  const { id } = useParams();
  const {
    coinDetails,
    isLoading,
    error,
  } = useSelector(
    (state) => state.coinDetails,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoinDetails(id));
    return () => {
      dispatch(clearCoinDetails());
    };
  }, [dispatch, id]);

  useSetThisCoinInFilter(coinDetails);

  const coin = coinDetails;

  const {
    symbol,
    name,
    description,
    image,
    market_data: marketData,
  } = coinDetails;

  return (
    <main className="coin-main">
      {isLoading && <p>...loading</p>}
      {error && <p>Ups! There was an error...</p>}
      {coin !== 'Coin Details' && (
        <article>
          <header className="coin-header">
            <Link className="arrow-back" to="/" />
            <img className="header-coin-image" src={image.small} alt={name} />
            <h1 className="coin-name">{name}</h1>
            <h2 className="coin-symbol">{`(${symbol?.toUpperCase()})`}</h2>
          </header>
          <main className="coin-main-section">
            <section>
              <data
                className="coin-details-price"
                value={marketData.current_price.usd}
              >
                {`$${marketData.current_price.usd.toLocaleString()}`}
              </data>
              <data className="mrkt-cap-chng-perc">{`${marketData.market_cap_change_percentage_24h}%`}</data>
              <PriceConvertion />
            </section>
            <section className="priceChange-percentages">
              <table>
                <thead>
                  <tr>
                    <th>24H</th>
                    <th>7D</th>
                    <th>14D</th>
                    <th>30D</th>
                    <th>60D</th>
                    <th>1Y</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{marketData.price_change_percentage_24h}</td>
                    <td>{marketData.price_change_percentage_7d}</td>
                    <td>{marketData.price_change_percentage_14d}</td>
                    <td>{marketData.price_change_percentage_30d}</td>
                    <td>{marketData.price_change_percentage_60d}</td>
                    <td>{marketData.price_change_percentage_1y}</td>
                  </tr>
                </tbody>
              </table>
            </section>
            <section>
              <table className="coin-MainData">
                <thead>
                  <tr className="coin-MainData-Titles">
                    <th>Market Cap Rank</th>
                    <th>Market Cap</th>
                    <th>Fully Diluted Valuation</th>
                    <th>Trading Volume</th>
                    <th>2H High</th>
                    <th>2H Low</th>
                    <th>Circulating Supply</th>
                    <th>Total Supply</th>
                    <th>Max Supply</th>
                    <th>All-Time High</th>
                    <th>All-Time Low</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="coin-MainData-Values">
                    <td>{marketData.market_cap_rank}</td>
                    <td>{marketData.market_cap?.usd}</td>
                    <td>{marketData.fully_diluted_valuation?.usd}</td>
                    <td>{marketData.total_volume?.usd}</td>
                    <td>{marketData.high_24h?.usd}</td>
                    <td>{marketData.low_24h?.usd}</td>
                    <td>{marketData.circulating_supply}</td>
                    <td>{marketData.total_supply}</td>
                    <td>{marketData.max_supply}</td>
                    <td>{marketData.ath?.usd}</td>
                    <td>{marketData.atl?.usd}</td>
                  </tr>
                </tbody>
              </table>
            </section>
            <p className="coin-description">{parser(description.en)}</p>
          </main>
        </article>
      )}
    </main>
  );
};

export default CoinDetails;
