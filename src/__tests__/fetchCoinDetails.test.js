import { fetchCoinDetails } from '../redux/coin-details/coinDetailsSlice';

describe('fetchCoinDetails', () => {
  it('should fetch coin details', async () => {
    const dispatch = jest.fn();
    const getState = jest.fn();
    const extra = {};
    const response = await fetchCoinDetails('bitcoin')(dispatch, getState, extra);
    expect(response.type).toEqual('coinDetails/fetchCoinDetails/fulfilled');
  });
});
