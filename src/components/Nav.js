import { NavLink } from 'react-router-dom';
import Logo from '../logo.svg';

const links = [{ path: '/', label: 'Categories' }];

const Nav = () => (
  <nav>
    <div>
      <img src={Logo} alt="logo" />
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
