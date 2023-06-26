import useExtractPercs from '../../hooks/coinDetails-hooks/useExtractPercs';

const PriceChangePerc = () => {
  const {
    ready,
    priceChangePercs,
  } = useExtractPercs();

  if (ready) {
    return (
      <section className="priceChange-percentages">
        <table className="price-percentage-table">
          <thead>
            <tr className="price-perc-tr">
              {Object.keys(priceChangePercs).map((pcpKey) => <th key={pcpKey} className="price-percentage-th">{pcpKey}</th>)}
            </tr>
          </thead>
          <tbody>
            <tr className="price-perc-tr">
              {Object.keys(priceChangePercs).map((pcpKey) => <td key={Math.random()} className={`price-percentage-td ${priceChangePercs[pcpKey] > 0 ? 'green' : 'red'}`}>{`${priceChangePercs[pcpKey].toFixed(2).replace('-', '')}%`}</td>)}
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
  return <span>awaiting data...</span>;
};

export default PriceChangePerc;
