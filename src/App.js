import { Routes, Route } from 'react-router-dom';
import AllCoins from './components/AllCoins';
import CoinDetails from './components/CoinDetails';
import Categories from './components/Categories/Categories';
import View from './components/View';
import NoMatch from './components/NoMatch';
import './App.css';

const App = () => (
  <Routes>
    <Route path="/" element={<View />}>
      <Route index element={<AllCoins />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="*" element={<NoMatch />} />
    </Route>
    <Route path="/coin-details/:id" element={<CoinDetails />} />
  </Routes>
);

export default App;
