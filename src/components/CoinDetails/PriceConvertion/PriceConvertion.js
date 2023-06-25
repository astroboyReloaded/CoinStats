import useConvertion from '../../../hooks/useConvertion';
import ThisCoinAmount from './ThisCoinAmount';
import ExchangeAmount from './ExchangeAmount';
import '../../../styles/PriceConvertion.css';

const PriceConvertion = () => {
  const {
    thisCoinAmount,
    symbol,
    image,
    exchangeAmount,
    handleThisCoinAmount,
    handleExchangeAmount,
    handleExchangeRate,
  } = useConvertion();

  return (
    <form className="price-convertion-form">
      <ThisCoinAmount
        thisCoinAmount={thisCoinAmount}
        symbol={symbol}
        image={image}
        handleThisCoinAmount={handleThisCoinAmount}
      />
      <ExchangeAmount
        exchangeAmount={exchangeAmount}
        handleExchangeAmount={handleExchangeAmount}
        handleExchangeRate={handleExchangeRate}
      />
    </form>
  );
};

export default PriceConvertion;
