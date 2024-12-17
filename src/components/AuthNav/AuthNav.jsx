import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Box } from "@mui/material";
import styles from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <Box className={styles.navContainer}>
      <NavLink to="/login" className={styles.link}>
        <Button variant="contained" color="primary" className={styles.button}>
          Login
        </Button>
      </NavLink>
      <NavLink to="/register" className={styles.link}>
        <Button variant="outlined" color="secondary" className={styles.button}>
          Register
        </Button>
      </NavLink>
    </Box>
  );
};

export default AuthNav;