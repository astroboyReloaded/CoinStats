import renderer from 'react-test-renderer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CoinDetails from '../components/CoinDetails/CoinDetails.js';

it('renders CoinDetails', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Routes>
          <Route path="/coin-details/:id" element={<CoinDetails />} />
        </Routes>
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
