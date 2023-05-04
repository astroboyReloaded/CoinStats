import { useLayoutEffect, useState } from 'react';

const fixFloat = (amount) => (parseFloat(amount.toFixed(8)));

const useConvertion = (prices) => {
  const [thisCoinAmount, setThisCoinAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [exchangeAmount, setExchangeAmount] = useState(0);

  useLayoutEffect(() => {
    const exRate = prices?.aed;
    setExchangeRate(exRate);
  }, [prices]);

  useLayoutEffect(() => {
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

  return [
    thisCoinAmount,
    exchangeAmount,
    handleThisCoinAmount,
    handleExchangeAmount,
    handleExchangeRate,
  ];
};

export default useConvertion;
