import renderer from 'react-test-renderer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import CoinDetails from '../components/CoinDetails/CoinDetails';
import View from '../components/View';
import AllCoins from '../components/AllCoins/AllCoins';

it('renders CoinDetails', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<View />}>
              <Route index element={<AllCoins />} />
            </Route>
            <Route path="/coin-details/:id" element={<CoinDetails />} />
          </Routes>
        </BrowserRouter>
        ,
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
