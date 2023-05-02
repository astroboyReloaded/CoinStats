import { useCallback, useLayoutEffect, useState } from 'react';

const fixFloat = (amount) => (parseFloat(amount.toFixed(8)));

const useConvertion = (prices) => {
  const [thisCoinAmount, setThisCoinAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [exchangeAmount, setExchangeAmount] = useState(0);

  useLayoutEffect(() => {
    const exRate = prices?.usd;
    setExchangeRate(exRate);
  }, [prices]);

  useLayoutEffect(() => {
    const exAmount = exchangeRate * thisCoinAmount;
    setExchangeAmount(fixFloat(exAmount));
  }, [exchangeRate]);

  const handleThisCoinAmount = useCallback((value) => {
    setThisCoinAmount(value);
    const exAmount = value * exchangeRate;
    setExchangeAmount(fixFloat(exAmount));
  });

  const handleExchangeAmount = useCallback((value) => {
    setExchangeAmount(fixFloat(value));
    const thisAmount = value / exchangeRate;
    setThisCoinAmount(fixFloat(thisAmount));
  });

  const handleExchangeRate = useCallback((symbol) => {
    const exRate = prices[symbol.toLowerCase()];
    setExchangeRate(exRate);
    const exAmount = exRate * thisCoinAmount;
    setExchangeAmount(fixFloat(exAmount));
  });

  return [
    thisCoinAmount,
    exchangeAmount,
    handleThisCoinAmount,
    handleExchangeAmount,
    handleExchangeRate,
  ];
};

export default useConvertion;
