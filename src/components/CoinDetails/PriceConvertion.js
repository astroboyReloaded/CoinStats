import React from 'react';
import { useSelector } from 'react-redux';
import useConvertion from '../../hooks/useConvertion';
import '../../styles/PriceConvertion.css';
import AmountInput from './PriceConvertion/AmountInput';
import CurrencyFilter from './PriceConvertion/CurrencyFilter';

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
        <img className="filter-coin-image" src={image} alt={symbol} />
        {symbol?.toUpperCase()}
      </label>
      <label htmlFor="exAmount" className="filter-label">
        <AmountInput
          id="exAmount"
          amount={exchangeAmount}
          handleWith={handleExchangeAmount}
        />
        <CurrencyFilter handleExchangeRate={handleExchangeRate} />
      </label>
    </form>
  );
};

export default PriceConvertion;
