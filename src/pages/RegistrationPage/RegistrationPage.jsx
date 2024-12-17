import React from "react";
import RegistrationForm from "../../forms/RegistrationForm/RegistrationForm";
import styles from "./RegistrationPage.module.css";


import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const RegistrationPage = () => {
  return (
    <Container className={styles.pageContainer}>
      <Box className={styles.formWrapper}>
        <Typography variant="h4" className={styles.title}>
          Register
        </Typography>
        <RegistrationForm />
      </Box>
    </Container>
  );
};

export default RegistrationPage;