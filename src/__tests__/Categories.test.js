import renderer from 'react-test-renderer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Categories from '../components/Categories';

it('renders Categories', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </Provider>
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
