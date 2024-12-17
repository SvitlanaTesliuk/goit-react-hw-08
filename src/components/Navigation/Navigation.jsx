import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Button } from '@mui/material';
import styles from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={styles.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => isActive ? `${styles.active}` : undefined}
      >
        <Button variant="text" color="black">
          Home
        </Button>
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) => isActive ? `${styles.active}` : undefined}
        >
          <Button variant="text" color="black">
            Contacts
          </Button>
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;