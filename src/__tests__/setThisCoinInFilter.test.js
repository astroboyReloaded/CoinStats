import { setThisCoinInFilter } from '../redux/price-convertion/priceConvertionSlice';

test('setThisCoinInFilter', () => {
  const coin = {
    id: 'bitcoin',
    symbol: 'btc',
    name: 'Bitcoin',
    image: {
      thumb: 'https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579',
      small: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579',
      large: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
    },
    market_data: {
      current_price: {
        usd: 47335,
      },
    },
  };
  const action = setThisCoinInFilter(coin);
  expect(action.type).toBe('priceConvertion/setThisCoinInFilter');
  expect(action.payload).toStrictEqual(coin);
});
