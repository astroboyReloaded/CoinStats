import { fetchAllCoins } from '../redux/all-coins/allCoinsSlice';

describe('fetchAllCoins', () => {
  it('should fetch all coins', async () => {
    const dispatch = jest.fn();
    const getState = jest.fn();
    const extra = {};
    const response = await fetchAllCoins()(dispatch, getState, extra);
    expect(response.type).toEqual('allCoins/fetchAllCoins/fulfilled');
  });
});
