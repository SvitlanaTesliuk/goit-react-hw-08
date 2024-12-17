
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { Container, Typography } from "@mui/material";
import styles from "./ContactsPage.module.css";

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container className={styles.container}>
      <Typography variant="h4" className={styles.heading}>
        Phonebook
      </Typography>

      <div className={styles.formContainer}>
        <ContactForm />
      </div>

      <div className={styles.searchBox}>
        <SearchBox />
      </div>

      <div className={styles.contactList}>
        <ContactList />
      </div>
    </Container>
  );
};

export default ContactsPage;