import { NavLink } from 'react-router-dom';
import '../styles/Nav.css';
import { useSelector } from 'react-redux';

const links = [
  { path: '/', label: 'All Coins' },
  { path: '/categories', label: 'Categories' },
];

const Nav = () => {
  const { page } = useSelector((state) => state.navbar);

  console.log(page);
  return (
    <nav>
      <img className="logo" src="../logo.svg" alt="gecko coin" />
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
};

export default Nav;
