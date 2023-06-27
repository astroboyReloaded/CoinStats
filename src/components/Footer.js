import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => (
  <footer className="footer">
    <span>
      Created by
      <Link
        to="https://github.com/astroboyreloaded"
        className="foot-link"
      >
        astroboyReloaded
      </Link>
    </span>
    <span>
      Powered by
      <Link
        to="https://www.coingecko.com/en/api"
        className="foot-link"
      >
        Coin Gecko
      </Link>
    </span>
  </footer>
);

export default Footer;
