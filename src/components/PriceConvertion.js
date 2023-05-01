import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const PriceConvertion = () => {
  const { symbol, image, currentPrices } = useSelector(
    (state) => state.priceConvertion.coinInFilter,
  );

  const [thisCoinAmount, setThisCoinAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [exchangeAmount, setExchangeAmount] = useState(0);

  useLayoutEffect(() => {
    const exRate = currentPrices?.usd;
    setExchangeRate(exRate);
  }, [currentPrices]);

  useLayoutEffect(() => {
    const exAmount = exchangeRate * thisCoinAmount;
    setExchangeAmount(exAmount);
  }, [exchangeRate]);

  useEffect(() => {
    const exRate = thisCoinAmount * exchangeRate;
    setExchangeAmount(exRate);
  }, [thisCoinAmount]);

  useEffect(() => {
    const thisAmount = exchangeAmount / exchangeRate;
    setThisCoinAmount(thisAmount);
  }, [exchangeAmount]);

  const handleExRate = (symbol) => {
    console.log(symbol);
    const exRate = currentPrices[symbol.toLowerCase()];
    console.log(exRate);
    setExchangeRate(exRate);
  };

  return (
    <form>
      <label htmlFor="thisCoinAmount">
        <input
          id="thisCoinAmount"
          type="number"
          value={thisCoinAmount}
          onInput={(e) => setThisCoinAmount(parseFloat(e.target.value))}
        />
        <img src={image} alt="" />
        {symbol?.toUpperCase()}
      </label>
      <br />
      <span>{'<=>'}</span>
      <label htmlFor="exAmount">
        <input
          type="number"
          id="exAmount"
          value={exchangeAmount}
          onInput={(e) => setExchangeAmount(parseFloat(e.target.value))}
        />
      </label>
      <label
        htmlFor="currencies"
      >
        <select
          id="currencies"
          onChange={(e) => handleExRate(e.target.value)}
        >
          {currentPrices && Object.keys(currentPrices).map((symbol) => (
            <option
              key={symbol}
              selected={symbol === 'usd' && 'selected'}
            >
              {symbol.toUpperCase()}
            </option>
          ))}
        </select>
      </label>
    </form>
  );
};

export default PriceConvertion;
