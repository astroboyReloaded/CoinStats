import { useParams } from 'react-router-dom';
// import parser from 'html-react-parser';
// import PriceConvertion from '../PriceConvertion';
import { useSelector } from 'react-redux';
import useFetchCoinDetails from '../../hooks/coinDetails-hooks/useFetchCoinDetails';
import '../../styles/CoinDetails.css';
import CoinHeader from './CoinHeader';
import CoinPrice from './CoinPrice';
import PriceChangePerc from './PriceChangePerc';

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
          <PriceChangePerc />
        </main>
      </div>
    );
  }
  return <p>{`Ups! There was an error... ${error}`}</p>;
};

export default CoinDetails;
