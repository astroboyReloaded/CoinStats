import { Routes, Route } from 'react-router-dom';
import Categories from './components/Categories';
import View from './components/View';
import NoMatch from './components/NoMatch';
import './App.css';

const App = () => (
  <Routes>
    <Route path="/" element={<View />}>
      <Route index element={<Categories />} />
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Routes>
);

export default App;
