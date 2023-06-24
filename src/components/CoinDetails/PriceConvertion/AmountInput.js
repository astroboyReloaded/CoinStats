import PropTypes from 'prop-types';
import { handleValue, cleanValue } from '../../../hooks/helperFuncs';

const AmountInput = ({ id, amount, handleWith }) => (
  <input
    id={id}
    className={`${id} convert-input filter-input`}
    type="number"
    value={cleanValue(amount)}
    onInput={(e) => handleValue(e, handleWith)}
  />
);

export default AmountInput;

AmountInput.propTypes = {
  id: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  handleWith: PropTypes.func.isRequired,
};
