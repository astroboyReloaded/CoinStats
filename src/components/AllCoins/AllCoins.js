import SearchBar from '../SearchBar';
import GlobalData from '../GlobalData';
import CoinArticleLink from './CoinArticleLink';
import '../../styles/AllCoins.css';
import useFetchAllCoins from '../../hooks/allCoins-hooks/useFetchAllCoins';

const AllCoins = () => {
  const [allCoins, results, isLoading, error] = useFetchAllCoins();

  if (isLoading) {
    return <p className="All-Loading">Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (allCoins !== 'All Coins') {
    const render = results === null ? allCoins : results;
    return (
      <main className="categoriesMain">
        <GlobalData />
        <SearchBar />
        <section className="coin-table">
          <header className="head-tr">
            <h3 className="rank">#</h3>
            <h3 className="coin-td">COIN</h3>
            <h3 className="price-td">PRICE</h3>
            <h3 className="perc-24h-td">24H</h3>
            <h3 className="mrkt-cap-td">MARKET CAP</h3>
          </header>
          <main className="coin-tbody">
            {render.map((coin) => (
            <CoinArticleLink
                key={coin.id}
                id={coin.id}
                mrktCapRank={coin.market_cap_rank}
                image={coin.image}
                name={coin.name}
                symbol={coin.symbol}
                currentPrice={coin.current_price}
                priceChngPerc24h={coin.price_change_percentage_24h}
                marketCap={coin.market_cap}
              />
            ))}
          </main>
        </section>
      </main>
    );
  }

  return allCoins;
};

export default AllCoins;
