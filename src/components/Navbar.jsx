import styles from '../styles/Navbar.module.css';

const links = [
  { path: '/', text: 'Home' },
  { path: 'calculator', text: 'Calculator' },
  { path: 'quote', text: 'Quote' },
];

const Navbar = () => (
  <nav className={`${styles.navbar} container padding`}>
    <span>
      <a href={links[0].path} className="logo">
        Math MAgicians
      </a>
    </span>
    <ul className={styles.links}>
      {links.map((link) => (
        <li key={link.text}>
          <a href={link.path}>{link.text}</a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
