import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setThisCoinInFilter } from '../redux/price-convertion/priceConvertionSlice';

const useSetThisCoinInFilter = (coinDetails) => {
  const dispatch = useDispatch();
  const extractImage = () => {
    const images = coinDetails?.image;
    const smallImage = images?.small;
    return smallImage;
  };
  const extractCurrentPrices = () => {
    const marketData = coinDetails?.market_data;
    const currentPrices = marketData?.current_price;
    return currentPrices;
  };
  const symbol = coinDetails?.symbol;
  const dataForFilter = {
    symbol,
    image: extractImage(),
    currentPrices: extractCurrentPrices(),
  };
  useEffect(() => {
    dispatch(setThisCoinInFilter(dataForFilter));
  });
};

export default useSetThisCoinInFilter;
