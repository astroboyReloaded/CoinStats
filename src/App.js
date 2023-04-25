import { Routes, Route } from 'react-router-dom';
import Categories from './components/Categories';
import AllCoins from './components/AllCoins';
import CoinDetails from './components/CoinDetails';
import View from './components/View';
import NoMatch from './components/NoMatch';
import './App.css';

const App = () => (
  <Routes>
    <Route path="/" element={<View />}>
      <Route index element={<Categories />} />
      <Route path="all-coins" element={<AllCoins />} />
      <Route path="all-coins/coin-details/:id" element={<CoinDetails />} />
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Routes>
);

export default App;
