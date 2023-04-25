import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import parser from 'html-react-parser';
import { fetchCoinDetails, clearCoinDetails } from '../redux/coin-details/coinDetailsSlice';

const CoinDetails = () => {
  const { id } = useParams();
  const { coinDetails, isLoading, error } = useSelector(
    (state) => state.coinDetails,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoinDetails(id));
    return () => {
      dispatch(clearCoinDetails());
    };
  }, [dispatch, id]);

  const coin = coinDetails;

  const {
    symbol, name, description, image, market_data: marketData,
  } = coinDetails;

  return (
    <main>
      {isLoading && <p>...loading</p>}
      {error && <p>Ups! There was an error...</p>}
      {console.log(coin)}
      {coin !== 'Coin Details' && (
        <article>
          <header>
            <div>
              <img src={image.small} alt={name} />
              <h2>{symbol}</h2>
            </div>
            <div>
              <data value={marketData.current_price.usd}>
                {`$${marketData.current_price.usd}`}
              </data>
              <data>{marketData.market_cap_change_percentage_24h}</data>
            </div>
          </header>
          <main>
            {parser(description.en)}
          </main>
        </article>
      )}
    </main>
  );
};

export default CoinDetails;
