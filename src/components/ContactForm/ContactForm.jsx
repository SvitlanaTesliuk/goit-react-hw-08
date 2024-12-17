import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import  { selectContacts }  from "../../redux/contacts/selectors";
import  { addContact }  from "../../redux/contacts/operations";
import styles from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

const initialValues = {
  name: '',
  number: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  number: Yup.string()
    .required('Number is required')
    .matches(/^\d+$/, 'Number must contain only digits'),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (!isDuplicate) {
      dispatch(addContact({ ...values, id: nanoid() }));
      resetForm(); 
    } else {
      alert("Contact already exists!");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.container}>
        <label className={styles.label}>
          Name
          <Field type="text" name="name" className={styles.input} />
          <ErrorMessage name="name" component="div" style={{ color: "red" }} />
        </label>
        <br />
        <label className={styles.label}>
          Number
          <Field type="text" name="number" className={styles.input} />
          <ErrorMessage
            name="number"
            component="div"
            style={{ color: "red" }}
          />
        </label>
        <br />
        <button type="submit" className={styles.button}>Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;