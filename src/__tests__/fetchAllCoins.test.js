import { Provider } from 'react-redux';
import AllCoins from '../components/AllCoins';
import { fetchAllCoins } from '../redux/all-coins/allCoinsSlice';
import store from '../redux/store';
import { render, screen } from '@testing-library/react';

describe('fetchAllCoins', () => {
  it('fetch all coins should be fulfilled', async () => {
    const dispatch = jest.fn();
    const getState = jest.fn();
    const extra = {};
    const response = await fetchAllCoins()(dispatch, getState, extra);
    expect(response.type).toEqual('allCoins/fetchAllCoins/fulfilled');
  });

  it('renders 100 coins', async () => {
    render(<Provider store={store}>
      <AllCoins />
    </Provider>);
    const coinArticles = await screen.findAllByRole('article');
    expect(coinArticles).toHaveLength(100);
  })
});
