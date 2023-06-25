import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useFetchCoinDetails from '../../hooks/coinDetails-hooks/useFetchCoinDetails';
import '../../styles/CoinDetails.css';
import CoinHeader from './CoinHeader';
import CoinPrice from './CoinPrice';
import PriceConvertion from './PriceConvertion/PriceConvertion';
import PriceChangePerc from './PriceChangePerc';
import CoinMainData from './CoinMainData';
import CoinDescription from './CoinDescription';

const CoinDetails = () => {
  const { id } = useParams();
  const { isLoading, error, ready } = useSelector((state) => state.coinDetails);

  useFetchCoinDetails(id);

  if (isLoading) {
    return <p>...loading</p>;
  }
  if (ready) {
    return (
      <div className="coinContainer">
        <CoinHeader />
        <main className="coin-main-section">
          <CoinPrice />
          <PriceConvertion />
          <PriceChangePerc />
          <CoinMainData />
          <CoinDescription />
        </main>
      </div>
    );
  }
  return <p>{`Ups! There was an error... ${error}`}</p>;
};

export default CoinDetails;
