import useConvertion from '../../hooks/useConvertion';
import ThisCoinAmount from './PriceConvertion/ThisCoinAmount';
import ExchangeAmount from './PriceConvertion/ExchangeAmount';
import '../../styles/PriceConvertion.css';

const PriceConvertion = () => {
  const {
    thisCoinAmount,
    exchangeAmount,
    handleThisCoinAmount,
    handleExchangeAmount,
  } = useConvertion();

  return (
    <form className="price-convertion-form">
      <ThisCoinAmount
        thisCoinAmount={thisCoinAmount}
        handleThisCoinAmount={handleThisCoinAmount}
      />
      <ExchangeAmount
        exchangeAmount={exchangeAmount}
        handleExchangeAmount={handleExchangeAmount}
      />
    </form>
  );
};

export default PriceConvertion;
