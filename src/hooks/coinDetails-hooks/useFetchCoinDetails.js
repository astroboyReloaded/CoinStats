import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCoinDetails, clearCoinDetails } from '../../redux/coin-details/coinDetailsSlice';

const useFetchCoinDetails = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoinDetails(id));
    return () => {
      dispatch(clearCoinDetails());
    };
  }, [dispatch, id]);
};

export default useFetchCoinDetails;
