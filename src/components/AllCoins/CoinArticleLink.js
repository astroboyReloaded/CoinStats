import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const CoinArticleLink = ({
  id,
  mrktCapRank,
  image,
  name,
  symbol,
  currentPrice,
  priceChngPerc24h,
  marketCap,
}) => (
  <Link to={`coin-details/${id}`}>
    <article className="body-tr">
      <p className="rank">{mrktCapRank}</p>
      <div className="coin-td">
        <img
          src={image}
          alt={name}
          className="coin-img"
        />
        <p className="all-coins-symbol">{symbol.toUpperCase()}</p>
      </div>
      <p className="price-td">
        <data className="coin-price">{`$${currentPrice.toLocaleString()}`}</data>
      </p>
      <p className="perc-24h-td">
        <data className={`prc-chng-perc ${priceChngPerc24h > 0 ? 'green' : 'red'}`}>{`${priceChngPerc24h.toFixed(1).replace('-', '')}%`}</data>
      </p>
      <p className="mrkt-cap-td">
        <data>{`$${marketCap?.toLocaleString()}`}</data>
      </p>
    </article>
  </Link>
);

CoinArticleLink.propTypes = {
  id: PropTypes.string.isRequired,
  mrktCapRank: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  currentPrice: PropTypes.number.isRequired,
  priceChngPerc24h: PropTypes.number.isRequired,
  marketCap: PropTypes.number.isRequired,
};

export default CoinArticleLink;
