import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fixFloat } from './helperFuncs';

const useConvertion = () => {
  const { coinDetails: { symbol, image, currentPrice: prices } } = useSelector(
    (state) => state.coinDetails,
  );
  const [thisCoinAmount, setThisCoinAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [exchangeAmount, setExchangeAmount] = useState(0);

  useEffect(() => {
    const exRate = prices?.aed;
    setExchangeRate(exRate);
  }, [prices]);

  useEffect(() => {
    const exAmount = exchangeRate * thisCoinAmount;
    setExchangeAmount(fixFloat(exAmount));
    // eslint-disable-next-line
  }, [exchangeRate]); // Disabled because this Effect should NOT be triggered when thisCoinAmount changes.

  const handleThisCoinAmount = (value) => {
    setThisCoinAmount(value);
    const exAmount = value * exchangeRate;
    setExchangeAmount(fixFloat(exAmount));
  };

  const handleExchangeAmount = (value) => {
    setExchangeAmount(value);
    const thisAmount = value / exchangeRate;
    setThisCoinAmount(fixFloat(thisAmount));
  };

  const handleExchangeRate = (symbol) => {
    const exRate = prices[symbol.toLowerCase()];
    setExchangeRate(exRate);
    const exAmount = exRate * thisCoinAmount;
    setExchangeAmount(fixFloat(exAmount));
  };

  return {
    thisCoinAmount,
    symbol,
    image,
    exchangeAmount,
    handleThisCoinAmount,
    handleExchangeAmount,
    handleExchangeRate,
  };
};

export default useConvertion;
