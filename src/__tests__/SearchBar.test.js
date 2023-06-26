import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import SearchBar from '../components/SearchBar';
import store from '../redux/store';
import AllCoins from '../components/AllCoins';

describe('Search Bar', () => {
  it('Search value is updated correctly', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>,
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('placeholder', 'Search');

    userEvent.type(input, 'Bitcoin');

    expect(screen.getByRole('textbox', { value: 'Bitcoin' })).toBeInTheDocument();
  });
});
