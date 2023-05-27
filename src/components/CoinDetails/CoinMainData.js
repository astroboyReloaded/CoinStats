import useCoinMainData from '../../hooks/coinDetails-hooks/useCoinMainData';
import { genSymbol } from '../../hooks/helperFuncs';

const CoinMainData = () => {
  const coinMainData = useCoinMainData();

  if (coinMainData) {
    return (
      <section>
        <table className="coin-MainData">
          <thead className="con-min-data-thead-tbody">
            <tr className="coin-MainData-tr">
              {Object.keys(coinMainData).map((cmdKey) => (
                <th key={cmdKey} className="coinMD-th">{cmdKey}</th>
              ))}
            </tr>
          </thead>
          <tbody className="con-min-data-thead-tbody">
            <tr className="coin-MainData-tr">
              {Object.keys(coinMainData).map((cmdkey, i) => (
                <td key={cmdkey} className="coinMD-td">
                  {`${genSymbol(i)}${coinMainData[cmdkey]?.toLocaleString()}`}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
  return <span>Awaiting data...</span>;
};

export default CoinMainData;
