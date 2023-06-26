import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const CurrencyFilter = ({ handleExchangeRate }) => {
  const { coinDetails: { currentPrice } } = useSelector((state) => state.coinDetails);

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

CurrencyFilter.propTypes = {
  handleExchangeRate: PropTypes.func.isRequired,
};
