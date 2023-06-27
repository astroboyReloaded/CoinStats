import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CoinHeader = () => {
  const { name, symbol, image } = useSelector((state) => state.coinDetails.coinDetails);

  return (
    <header className="coin-header">
      <Link className="arrow-back" to="/" />
      <img className="header-coin-image" src={image} alt={name} />
      <h1 className="coin-name">{name}</h1>
      <h2 className="coin-symbol">{`(${symbol?.toUpperCase()})`}</h2>
    </header>
  );
};

export default CoinHeader;
