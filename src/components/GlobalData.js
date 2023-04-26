import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchGlobalData,
  clearGlobalData,
} from '../redux/global-data/globalDataSlice';

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
      <main>
        <p>{`GLOBAL MARKET CAP: $${data.total_market_cap.usd}`}</p>
        <p>{`24HR VOLUME: $${data.total_volume.usd}`}</p>
      </main>
    );
  }
  return <h1>GlobalData</h1>;
};

export default GlobalData;
