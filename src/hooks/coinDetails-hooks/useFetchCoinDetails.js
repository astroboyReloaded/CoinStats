import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCoinDetails, clearCoinDetails } from '../../redux/coin-details/coinDetailsSlice';

const useFetchCoinDetails = (id) => {
  const {
    coinDetails: {
      symbol,
      name,
      description,
      image,
      marketData,
      isLoading,
    },
    error,
    ready,
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

  return [
    symbol,
    name,
    description,
    image,
    marketData,
    isLoading,
    error,
    ready,
  ];
};

export default useFetchCoinDetails;
