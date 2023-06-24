import React from 'react';
import { useSelector } from 'react-redux';
import useConvertion from '../../hooks/useConvertion';
import '../../styles/PriceConvertion.css';
import AmountInput from './PriceConvertion/AmountInput';

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
        <AmountInput
          id="thisCoinAmount"
          amount={thisCoinAmount}
          handleWith={handleThisCoinAmount}
        />
        <img className="filter-coin-image" src={image} alt="" />
        {symbol?.toUpperCase()}
      </label>
      <label htmlFor="exAmount" className="filter-label">
        <AmountInput
          id="exAmount"
          amount={exchangeAmount}
          handleWith={handleExchangeAmount}
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
