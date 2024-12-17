import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import styles from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete, onEdit }) => {
  return (
    <Box component="li" className={styles.contactItem}>
      <Box className={styles.contactDetails}>
        <Typography className={styles.contactName}>
          <FaUser className={styles.icon} /> {name}
        </Typography>
        <Typography className={styles.contactNumber}>
          <FaPhone className={styles.icon} /> {number}
        </Typography>
      </Box>
      <Box className={styles.buttonGroup}>
        <Button
          variant="contained"
          color="error"
          className={styles.deleteButton}
          onClick={() => onDelete(id)}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={styles.editButton}
          onClick={() => onEdit(id)}
        >
          Edit
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
