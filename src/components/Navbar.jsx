import { NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const links = [
  { path: '/', text: 'Home' },
  { path: 'calculator', text: 'Calculator' },
  { path: 'quote', text: 'Quote' },
];

const Navbar = () => (
  <header className={styles.header}>
    <nav className={`${styles.navbar} container padding-x`}>
      <span>
        <NavLink
          to={links[0].path}
          className={styles.logo}
          style={{ backgroundColor: 'transparent', borderTop: 'none' }}
        >
          Math MAgicians
        </NavLink>
      </span>
      <ul className={styles['nav-links']}>
        {links.map((link) => (
          <li key={link.text}>
            <NavLink
              to={link.path}
              className={`${({ isActive }) => (isActive ? 'active' : undefined)} ${
                styles['nav-link']
              }`}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Navbar;
