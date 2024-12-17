
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, updateContact } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import styles from "./ContactList.module.css";
import Modal from "../Modal/Modal";


const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [editData, setEditData] = useState({ name: "", number: "" });

  
  const handleDeleteClick = (contact) => {
    setSelectedContact(contact);
    setModalOpen(true);
  };

  
  const handleConfirmDelete = () => {
    if (selectedContact) {
      dispatch(deleteContact(selectedContact.id));
    }
    setModalOpen(false);
    setSelectedContact(null);
  };

  
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedContact(null);
  };

  
  const handleEditClick = (contact) => {
    setSelectedContact(contact);
    setEditData({ name: contact.name, number: contact.number });
    setEditModalOpen(true);
  };

  
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  
  const handleConfirmEdit = (e) => {
    e.preventDefault(); 

    
    if (selectedContact && (selectedContact.name !== editData.name || selectedContact.number !== editData.number)) {
      dispatch(updateContact({ id: selectedContact.id, name: editData.name, number: editData.number }))
        .unwrap()
        .then(() => {
          console.log("Contact updated successfully!");
        })
        .catch((error) => {
          console.error("Contact update failed:", error);
        });
    }
    
    setEditModalOpen(false);
    setSelectedContact(null);
    setEditData({ name: "", number: "" });
  };

  
  const handleCloseEditModal = () => {
    setEditModalOpen(false);
    setSelectedContact(null);
    setEditData({ name: "", number: "" });
  };

  return (
    <>
      <ul className={styles.contactList}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={styles.contactItem}>
            {name}: {number}
            <button
              onClick={() => handleDeleteClick({ id, name, number })}
              className={styles.button}
            >
              Delete
            </button>
            <button
              onClick={() => handleEditClick({ id, name, number })}
              className={styles.button}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>

      
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <p>Are you sure you want to delete {selectedContact.name}?</p>
          <button onClick={handleConfirmDelete} className={styles.confirmButton}>
            Confirm
          </button>
          <button onClick={handleCloseModal} className={styles.cancelButton}>
            Cancel
          </button>
        </Modal>
      )}

      
      {isEditModalOpen && (
        <Modal onClose={handleCloseEditModal}>
          <h2>Edit Contact</h2>
          <form className={styles.editForm} onSubmit={handleConfirmEdit}>
            <label className={styles.inputField}>
              Name:
              <input
                type="text"
                name="name"
                value={editData.name}
                onChange={handleEditChange}
                className={styles.inputContainer}
              />
            </label>
            <label className={styles.inputField}>
              Number:
              <input
                type="text"
                name="number"
                value={editData.number}
                onChange={handleEditChange}
                className={styles.inputContainer}
              />
            </label>
            <button type="submit" className={styles.confirmButton}>
              Save
            </button>
            <button type="button" onClick={handleCloseEditModal} className={styles.cancelButton}>
              Cancel
            </button>
          </form>
        </Modal>
      )}
    </>
  );
};

export default ContactList;