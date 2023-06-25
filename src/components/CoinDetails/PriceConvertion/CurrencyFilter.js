import { useSelector } from 'react-redux';
import useConvertion from '../../../hooks/useConvertion';

const CurrencyFilter = () => {
  const { coinDetails: { currentPrice } } = useSelector((state) => state.coinDetails);
  const { handleExchangeRate } = useConvertion();

  return (
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
  );
};

export default CurrencyFilter;
