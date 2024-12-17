import React from 'react';
import styles from "./HomePage.module.css";
import { Container, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Container className={styles.container} maxWidth="lg">
      <Typography variant="h2" className={styles.title}>
        Welcome to the Home Page!
      </Typography>
      <Typography variant="body1" className={styles.description}>
        Manage your contacts effortlessly.
      </Typography>
    </Container>
  );
};

export default HomePage;