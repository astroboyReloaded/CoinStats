import { fetchGlobalData } from '../redux/global-data/globalDataSlice';

describe('fetchGlobalData', () => {
  it('should fetch global data', async () => {
    const dispatch = jest.fn();
    const getState = jest.fn();
    const extra = {};
    const response = await fetchGlobalData()(dispatch, getState, extra);
    expect(response.type).toEqual('globalData/fetchGlobalData/fulfilled');
  });
});
