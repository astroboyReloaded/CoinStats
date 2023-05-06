import { clearCoinDetails } from '../redux/coin-details/coinDetailsSlice';

test('clearCoinDetails', () => {
  expect(clearCoinDetails()).toEqual({
    type: 'coinDetails/clearCoinDetails',
  });
});
