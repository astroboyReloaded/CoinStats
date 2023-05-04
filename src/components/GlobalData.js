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
      <section className="global-data">
        <p className="global-data-title marketCap">
          GLOBAL MARKET CAP: $
          <data>
            {data.total_market_cap.usd.toLocaleString()}
          </data>
        </p>
        <p className="global-data-title">
          24HR VOLUME: $
          <data>
            {data.total_volume.usd.toLocaleString()}
          </data>
        </p>
      </section>
    );
  }
  return <h1>GlobalData</h1>;
};

export default GlobalData;
