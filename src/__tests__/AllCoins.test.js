import renderer from 'react-test-renderer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import AllCoins from '../components/AllCoins';
import GlobalData from '../components/GlobalData';
import SearchBar from '../components/SearchBar';

it('renders AllCoins', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<AllCoins />} />
          </Routes>
        </Provider>
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders inner components', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <AllCoins>
        <GlobalData />
        <SearchBar />
    </AllCoins>
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
})
