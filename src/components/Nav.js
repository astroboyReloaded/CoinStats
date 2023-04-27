import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', label: 'Categories' },
  { path: 'all-coins', label: 'All Coins' },
];

const Nav = () => (
  <nav>
    <div>
      <h1>CoinStats</h1>
    </div>
    <ul>
      {links.map(({ path, label }) => (
        <li key={path}>
          <NavLink to={path}>{label}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
