<<<<<<< HEAD:src/tests/fetchAllCoins.test.js
import { fetchAllCoins } from '../redux/all-coins/allCoinsSlice';

describe('fetchAllCoins', () => {
  it('should fetch all coins', async () => {
=======
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import AllCoins from '../components/AllCoins';
import { fetchAllCoins } from '../redux/all-coins/allCoinsSlice';
import store from '../redux/store';

describe('fetchAllCoins', () => {
  it('fetch all coins should be fulfilled', async () => {
>>>>>>> ccde822a365f532c93ef5e4c549ffd7797fe6c47:src/__tests__/fetchAllCoins.test.js
    const dispatch = jest.fn();
    const getState = jest.fn();
    const extra = {};
    const response = await fetchAllCoins()(dispatch, getState, extra);
    expect(response.type).toEqual('allCoins/fetchAllCoins/fulfilled');
  });
<<<<<<< HEAD:src/tests/fetchAllCoins.test.js
=======

  it('renders 100 coins', async () => {
    render(<Provider store={store}>
      <AllCoins />
    </Provider>);
    const coinArticles = await screen.findAllByRole('article');
    expect(coinArticles).toHaveLength(100);
  });
>>>>>>> ccde822a365f532c93ef5e4c549ffd7797fe6c47:src/__tests__/fetchAllCoins.test.js
});
