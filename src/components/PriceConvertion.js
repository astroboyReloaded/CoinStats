import React from 'react';
import { useSelector } from 'react-redux';
import useConvertion from '../hooks/useConvertion';

const PriceConvertion = () => {
  const { symbol, image, currentPrices } = useSelector(
    (state) => state.priceConvertion.coinInFilter,
  );

  const [
    thisCoinAmount,
    exchangeAmount,
    handleThisCoinAmount,
    handleExchangeAmount,
    handleExchangeRate,
  ] = useConvertion(currentPrices);

  // replace 00 for 0 or 0[1-9] for [1-9] (with help from Copilot  :D)
  const cleanValue = (value) => {
    const regex = /(^0{2})|(^0[1-9])/;
    const stringValue = value.toString(); // <-- Idea adapted from GPT propmpt result
    return stringValue.replace(regex, (match) => match[match.length - 1]);
  };

  const handleValue = (e, handleWith) => {
    const amount = parseFloat(e.target.value);
    if (Number.isNaN(amount)) {
      handleWith(0);
    } else {
      handleWith(amount);
    }
  };

  return (
    <form>
      <label htmlFor="thisCoinAmount">
        <input
          id="thisCoinAmount"
          type="number"
          value={cleanValue(thisCoinAmount)}
          onInput={(e) => handleValue(e, handleThisCoinAmount)}
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
          value={cleanValue(exchangeAmount)}
          onInput={(e) => (Number.isNaN(parseFloat(e.target.value))
            ? handleExchangeAmount(parseFloat(0))
            : handleExchangeAmount(parseFloat(e.target.value)))}
        />
      </label>
      <label
        htmlFor="currencies"
      >
        <select
          id="currencies"
          onChange={(e) => handleExchangeRate(e.target.value)}
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
