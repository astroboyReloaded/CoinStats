import { Outlet } from 'react-router-dom';
import Nav from './Nav';

const View = () => (
  <div className="wrapper">
    <Nav />
    <Outlet />
  </div>
);

export default View;
