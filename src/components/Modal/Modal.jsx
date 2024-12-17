import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ children, onClose }) => {
    const handleBackdropClick = (e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    };
  
    return (
      <div className={styles.overlay} onClick={handleBackdropClick}>
        <div className={styles.modal}>
          {children}
          <button onClick={onClose} className={styles.closeButton}>
            ×
          </button>
        </div>
      </div>
    );
  };
  
  export default Modal;