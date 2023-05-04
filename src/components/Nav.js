import { NavLink } from 'react-router-dom';
import '../styles/Nav.css';

const links = [
  { path: '/', label: 'All Coins' },
  { path: '/categories', label: 'Categories' },
];

const Nav = () => (
  <nav>
    <img className="logo" src="../icons/GeckoCoin-logo.jpg" alt="gecko coin" />
    <h1 className="app-title">CoinStats</h1>
    <ul className="nav-ul">
      {links.map(({ path, label }) => (
        <li key={path}>
          <NavLink to={path}>{label}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
