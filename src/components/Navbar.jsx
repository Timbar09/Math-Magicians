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
        <a href={links[0].path} className={styles.logo}>
          Math MAgicians
        </a>
      </span>
      <ul className={styles['nav-links']}>
        {links.map((link) => (
          <li key={link.text}>
            <a href={link.path} className={styles['nav-link']}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Navbar;
