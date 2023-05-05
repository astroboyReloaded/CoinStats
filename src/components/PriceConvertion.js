import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import useConvertion from '../hooks/useConvertion';
import '../styles/PriceConvertion.css';

const PriceConvertion = () => {
  const { symbol, image, currentPrices } = useSelector(
    (state) => state.priceConvertion.coinInFilter,
  );

  const exAmountInputRef = useRef(null);

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
    <form className="price-convertion-form">
      <label htmlFor="thisCoinAmount" className="filter-label">
        <input
          id="thisCoinAmount"
          className="thisCoinAmount convert-input filter-input"
          type="number"
          value={cleanValue(thisCoinAmount)}
          onInput={(e) => handleValue(e, handleThisCoinAmount)}
        />
        <img className="filter-coin-image" src={image} alt="" />
        {symbol?.toUpperCase()}
      </label>
      <label htmlFor="exAmount" className="filter-label">
        <input
          id="exAmount"
          type="number"
          className="exAmount convert-input filter-input"
          value={cleanValue(exchangeAmount)}
          onInput={(e) => handleValue(e, handleExchangeAmount)}
          ref={exAmountInputRef}
        />
        <label
          htmlFor="currencies"
        >
          <select
            id="currencies"
            onChange={(e) => handleExchangeRate(e.target.value)}
            className="selectCurrency filter-input"
          >
            {currentPrices && Object.keys(currentPrices).map((symbol) => (
              <option
                key={symbol}
                value={symbol}
                selected={symbol === 'usd' && 'selected'}
                onClick={exAmountInputRef.current.focus()}
              >
                {symbol.toUpperCase()}
              </option>
            ))}
          </select>
        </label>
      </label>
    </form>
  );
};

export default PriceConvertion;
