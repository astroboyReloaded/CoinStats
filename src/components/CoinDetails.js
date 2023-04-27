import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import parser from 'html-react-parser';
import { fetchCoinDetails } from '../redux/coin-details/coinDetailsSlice';

const CoinDetails = () => {
  const { id } = useParams();
  const { coinDetails, isLoading, error } = useSelector(
    (state) => state.coinDetails,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoinDetails(id));
  }, [dispatch, id]);

  const coin = coinDetails;

  return (
    <main>
      {isLoading && <p>...loading</p>}
      {error && <p>Ups! There was an error...</p>}
      {coin && (
        <article>
          <header>
            <div>
              <img src={coin.image.small} alt={coin.name} />
              <h2>{coin.symbol}</h2>
            </div>
            <div>
              <data value={coin.market_data.current_price.usd}>
                {`$${coin.market_data.current_price.usd}`}
              </data>
              <data>{coin.market_data.market_cap_change_percentage_24h}</data>
            </div>
          </header>
        </article>
      )}
    </main>
  );
};

export default CoinDetails;
