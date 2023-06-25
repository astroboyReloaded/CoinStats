import PropTypes from 'prop-types';
import { cleanValue, handleValue } from '../../../hooks/helperFuncs';
import CurrencyFilter from './CurrencyFilter';

const ExchangeAmount = ({
  exchangeAmount,
  handleExchangeAmount,
  handleExchangeRate,
}) => (
  <label
    htmlFor="exAmount"
    className="filter-label"
  >
    <input
      id="exAmount"
      className="exAmount convert-input filter-input"
      type="number"
      value={cleanValue(exchangeAmount)}
      onInput={(e) => handleValue(e, handleExchangeAmount)}
    />
    <CurrencyFilter handleExchangeRate={handleExchangeRate} />
  </label>
);

export default ExchangeAmount;

ExchangeAmount.propTypes = {
  exchangeAmount: PropTypes.number.isRequired,
  handleExchangeAmount: PropTypes.func.isRequired,
  handleExchangeRate: PropTypes.func.isRequired,
};
