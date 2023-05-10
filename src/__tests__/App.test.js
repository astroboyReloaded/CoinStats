import renderer from 'react-test-renderer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import App from '../App';

it('renders App', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="*" element={<App />} />
          </Routes>
        </Provider>
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
