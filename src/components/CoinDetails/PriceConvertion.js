import React from 'react';
import { useSelector } from 'react-redux';
import useConvertion from '../../hooks/useConvertion';
import { handleValue, cleanValue } from '../../hooks/helperFuncs';
import '../../styles/PriceConvertion.css';

const PriceConvertion = () => {
  const { coinDetails: { currentPrice, symbol, image } } = useSelector(
    (state) => state.coinDetails,
  );

  const [
    thisCoinAmount,
    exchangeAmount,
    handleThisCoinAmount,
    handleExchangeAmount,
    handleExchangeRate,
  ] = useConvertion(currentPrice);

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
        />
        <label
          htmlFor="currencies"
        >
          <select
            id="currencies"
            onChange={(e) => handleExchangeRate(e.target.value)}
            className="selectCurrency filter-input"
          >
            {currentPrice && Object.keys(currentPrice).map((symbol) => (
              <option
                key={symbol}
                value={symbol}
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
