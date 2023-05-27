import { useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useExtractPercs = () => {
  const {
    coinDetails: { marketData },
  } = useSelector((state) => state.coinDetails);
  const [priceChangePercs, setPriceChangePercs] = useState(null);
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    setPriceChangePercs({
      '24H': marketData.price_change_percentage_24h,
      '7D': marketData.price_change_percentage_7d,
      '14D': marketData.price_change_percentage_14d,
      '30D': marketData.price_change_percentage_30d,
      '60D': marketData.price_change_percentage_60d,
      '1Y': marketData.price_change_percentage_1y,
    });
    setReady(true);
  }, [marketData]);

  return {
    ready,
    priceChangePercs,
  };
};

export default useExtractPercs;
