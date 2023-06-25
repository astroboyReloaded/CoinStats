import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { handleValue, cleanValue } from '../../../hooks/helperFuncs';

const ThisCoinAmount = ({
  thisCoinAmount,
  handleThisCoinAmount,
}) => {
  const { coinDetails: { symbol, image } } = useSelector(
    (state) => state.coinDetails,
  );

  return (
    <label
      htmlFor="thisCoinAmount"
      className="filter-label"
    >
      <input
        id="thisCoinAmount"
        className="thisCoinAmount convert-input filter-input"
        type="number"
        value={cleanValue(thisCoinAmount)}
        onInput={(e) => handleValue(e, handleThisCoinAmount)}
      />
      <img className="filter-coin-image" src={image} alt={symbol} />
      {symbol?.toUpperCase()}
    </label>
  );
};

export default ThisCoinAmount;

ThisCoinAmount.propTypes = {
  thisCoinAmount: PropTypes.number.isRequired,
  handleThisCoinAmount: PropTypes.func.isRequired,
};
