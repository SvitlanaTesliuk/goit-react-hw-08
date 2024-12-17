import React from "react";
import LoginForm from "../../forms/LoginForm/LoginForm";
import styles from "./LoginPage.module.css";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const LoginPage = () => {
  return (
    <Container maxWidth="sm" className={styles.page}>
     <Box className={styles.formWrapper}>
      <Typography variant="h4" className={styles.title}>
        Login
      </Typography>
      <LoginForm />
     </Box>
    </Container>
  );
};

export default LoginPage;
