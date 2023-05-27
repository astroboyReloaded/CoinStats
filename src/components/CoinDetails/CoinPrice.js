import { useSelector } from 'react-redux';

const CoinPrice = () => {
  const { currentPrice, marketData } = useSelector((store) => store.coinDetails.coinDetails);

  return (
    <section className="coin-price-section">
      <data
        className="coin-details-price"
        value={currentPrice.usd}
      >
        {`$${currentPrice.usd.toLocaleString()}`}
      </data>
      <data className={`mrkt-cap-chng-perc ${marketData.market_cap_change_percentage_24h > 0 ? 'green' : 'red'}`}>{`${marketData.market_cap_change_percentage_24h.toFixed(2).replace('-', '')}%`}</data>
    </section>
  );
};

export default CoinPrice;
