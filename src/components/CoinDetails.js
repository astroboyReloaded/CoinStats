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
            <section className="coin-price-section">
              <data
                className="coin-details-price"
                value={marketData.current_price.usd}
              >
                {`$${marketData.current_price.usd.toLocaleString()}`}
              </data>
              <data className={`mrkt-cap-chng-perc ${marketData.market_cap_change_percentage_24h > 0 ? 'green' : 'red'}`}>{`${marketData.market_cap_change_percentage_24h.toFixed(2).replace('-', '')}%`}</data>
            </section>
            <PriceConvertion />
            <section className="priceChange-percentages">
              <table className="price-percentage-table">
                <thead>
                  <tr className="price-perc-tr">
                    <th className="price-percentage-th">24H</th>
                    <th className="price-percentage-th">7D</th>
                    <th className="price-percentage-th">14D</th>
                    <th className="price-percentage-th">30D</th>
                    <th className="price-percentage-th">60D</th>
                    <th className="price-percentage-th">1Y</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="price-perc-tr">
                    <td className={`price-percentage-td ${marketData.price_change_percentage_24h > 0 ? 'green' : 'red'}`}>{marketData.price_change_percentage_24h.toFixed(2).replace('-', '')}</td>
                    <td className={`price-percentage-td ${marketData.price_change_percentage_7d > 0 ? 'green' : 'red'}`}>{marketData.price_change_percentage_7d.toFixed(2).replace('-', '')}</td>
                    <td className={`price-percentage-td ${marketData.price_change_percentage_14d > 0 ? 'green' : 'red'}`}>{marketData.price_change_percentage_14d.toFixed(2).replace('-', '')}</td>
                    <td className={`price-percentage-td ${marketData.price_change_percentage_30d > 0 ? 'green' : 'red'}`}>{marketData.price_change_percentage_30d.toFixed(2).replace('-', '')}</td>
                    <td className={`price-percentage-td ${marketData.price_change_percentage_60d > 0 ? 'green' : 'red'}`}>{marketData.price_change_percentage_60d.toFixed(2).replace('-', '')}</td>
                    <td className={`price-percentage-td ${marketData.price_change_percentage_1y > 0 ? 'green' : 'red'}`}>{marketData.price_change_percentage_1y.toFixed(2).replace('-', '')}</td>
                  </tr>
                </tbody>
              </table>
            </section>
            <section>
              <table className="coin-MainData">
                <thead className="con-min-data-thead-tbody">
                  <tr className="coin-MainData-tr">
                    <th className="coinMD-th">Market Cap Rank</th>
                    <th className="coinMD-th">Market Cap</th>
                    <th className="coinMD-th">Fully Diluted Valuation</th>
                    <th className="coinMD-th">Trading Volume</th>
                    <th className="coinMD-th">2H High</th>
                    <th className="coinMD-th">2H Low</th>
                    <th className="coinMD-th">Circulating Supply</th>
                    <th className="coinMD-th">Total Supply</th>
                    <th className="coinMD-th">Max Supply</th>
                    <th className="coinMD-th">All-Time High</th>
                    <th className="coinMD-th">All-Time Low</th>
                  </tr>
                </thead>
                <tbody className="con-min-data-thead-tbody">
                  <tr className="coin-MainData-tr">
                    <td className="coinMD-td">
                      #
                      {marketData.market_cap_rank}
                    </td>
                    <td className="coinMD-td">
                      $
                      {marketData.market_cap?.usd.toLocaleString()}
                    </td>
                    <td className="coinMD-td">
                      $
                      {marketData.fully_diluted_valuation?.usd?.toLocaleString()}
                    </td>
                    <td className="coinMD-td">
                      $
                      {marketData.total_volume?.usd.toLocaleString()}
                    </td>
                    <td className="coinMD-td">
                      $
                      {marketData.high_24h?.usd.toFixed(8)}
                    </td>
                    <td className="coinMD-td">
                      $
                      {marketData.low_24h?.usd.toFixed(8)}
                    </td>
                    <td className="coinMD-td">
                      {marketData.circulating_supply?.toLocaleString()}
                    </td>
                    <td className="coinMD-td">
                      {marketData.total_supply?.toLocaleString()}
                    </td>
                    <td className="coinMD-td">{marketData.max_supply?.toLocaleString()}</td>
                    <td className="coinMD-td">
                      $
                      {marketData.ath?.usd.toLocaleString()}
                    </td>
                    <td className="coinMD-td">
                      $
                      {marketData.atl?.usd.toLocaleString()}
                    </td>
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
