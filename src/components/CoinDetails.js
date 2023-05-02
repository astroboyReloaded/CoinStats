import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
            <data
              className="coin-details-price"
              value={marketData.current_price.usd}
            >
              {`$${marketData.current_price.usd.toLocaleString()}`}
            </data>
            <data className="mrkt-cap-chng-perc">{`${marketData.market_cap_change_percentage_24h}%`}</data>
            <PriceConvertion />
          </header>
          <main>
            <div>
              <img src={image.small} alt={name} />
              <h2>{symbol?.toUpperCase()}</h2>
            </div>
            {parser(description.en)}
          </main>
        </article>
      )}
    </main>
  );
};

export default CoinDetails;
