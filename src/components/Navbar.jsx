import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <header className={styles.Header}>
      <h1 className={styles.Navbar__Logo}>MattDex</h1>
      <nav className={styles.Navbar}>
        <ul className={styles.Navbar__Links}>
          <li className={styles.Navbar__Link}>
            <NavLink
              className={(navData) =>
                navData.isActive ? styles.active : styles.Navbar__NavLink
              }
              to='/'
            >
              Home
            </NavLink>
          </li>
          <li className={styles.Navbar__Link}>
            <NavLink
              className={(navData) =>
                navData.isActive ? styles.active : styles.Navbar__NavLink
              }
              to='/profile'
            >
              Profile
            </NavLink>
          </li>
          <li className={styles.Navbar__Link}>
            <NavLink
              className={(navData) =>
                navData.isActive ? styles.active : styles.Navbar__NavLink
              }
              to='/collection'
            >
              Collection
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
