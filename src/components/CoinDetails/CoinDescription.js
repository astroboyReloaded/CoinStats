import { useSelector } from 'react-redux';
import parser from 'html-react-parser';

const CoinDescription = () => {
  const { description } = useSelector((state) => state.coinDetails.coinDetails);
  return (
    <article>
      <p className="coin-description">{parser(description)}</p>
    </article>
  );
};

export default CoinDescription;
