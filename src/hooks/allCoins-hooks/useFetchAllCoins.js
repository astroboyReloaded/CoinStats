import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllCoins } from '../../redux/all-coins/allCoinsSlice';

const useFetchAllCoins = () => {
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

  return [allCoins, results, isLoading, error];
};

export default useFetchAllCoins;
