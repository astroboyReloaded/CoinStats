import { NavLink } from 'react-router-dom';

const links = [{ path: '/', label: 'All Coins' }];

const Nav = () => (
  <nav>
    <ul>
      {links.map(({ path, label }) => (
        <li key={path}>
          <NavLink to={path}>{label}</NavLink>
        </li>
      ))}
    </ul>
    <h1>CoinStats</h1>
  </nav>
);

export default Nav;
