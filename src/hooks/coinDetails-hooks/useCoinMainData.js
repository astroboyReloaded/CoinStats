import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useCoinMainData = () => {
  const { coinDetails: { marketData } } = useSelector((state) => state.coinDetails);
  const [coinMainData, setCoinMainData] = useState(null);

  useEffect(() => {
    setCoinMainData({
      'Market Cap Rank': marketData.market_cap_rank,
      'Market Cap': marketData.market_cap.usd,
      'Fully Diluted Valuation': marketData.fully_diluted_valuation.usd,
      'Trading Volume': marketData.total_volume.usd,
      '2H High': marketData.high_24h.usd,
      '2H Low': marketData.low_24h.usd,
      'Circulating Supply': marketData.circulating_supply,
      'Total Supply': marketData.total_supply,
      'Max Supply': marketData.max_supply,
      'All-Time High': marketData.ath.usd,
      'All-Time Low': marketData.atl.usd,
    });
  }, [marketData]);

  return coinMainData;
};

export default useCoinMainData;
