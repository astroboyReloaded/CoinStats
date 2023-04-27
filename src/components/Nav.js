import { NavLink } from 'react-router-dom';
import '../styles/Nav.css';

const links = [
  { path: '/', label: 'All Coins' },
  { path: '/categories', label: 'Categories' },
];

const Nav = () => (
  <nav>
    <h1>CoinStats</h1>
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
