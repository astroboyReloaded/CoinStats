import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchGlobalData,
  clearGlobalData,
} from '../redux/global-data/globalDataSlice';
import '../styles/GlobalData.css';

const GlobalData = () => {
  const { globalData, isLoading, error } = useSelector(
    (state) => state.globalData,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGlobalData());
    return () => dispatch(clearGlobalData());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Ups! Something went wrong...</p>;
  }
  if (globalData !== 'Global Data') {
    const { data } = globalData;
    return (
      <section className="global-data-section">
        <p className="global-data-title marketCap">
          GLOBAL MARKET CAP:
          <data className="global-data">
            $
            {Math.floor(data.total_market_cap.usd).toLocaleString()}
            <span className={`MC-chng-perc ${data.market_cap_change_percentage_24h_usd > 0 ? 'green' : 'red'}`}>
              {data.market_cap_change_percentage_24h_usd.toFixed(1).replace('-', '')}
              %
            </span>
          </data>
        </p>
        <p className="global-data-title vol-24H">
          24HR VOLUME:
          <data className="global-data">
            $
            {Math.floor(data.total_volume.usd).toLocaleString()}
          </data>
        </p>
      </section>
    );
  }
  return <h1>GlobalData</h1>;
};

export default GlobalData;
