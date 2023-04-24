import { Routes, Route } from 'react-router-dom';
import AllCoins from './components/AllCoins';
import View from './components/View';
import NoMatch from './components/NoMatch';
import './App.css';

const App = () => (
  <Routes>
    <Route path="/" element={<View />}>
      <Route index element={<AllCoins />} />
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Routes>
);

export default App;
