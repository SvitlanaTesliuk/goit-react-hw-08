import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import styles from "./LoginForm.module.css";


import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className={styles.form}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <Field
            name="email"
            as={TextField}
            fullWidth
            variant="outlined"
            className={`${styles.input} ${
              touched.email && errors.email ? styles.inputError : ""
            }`}
            error={touched.email && Boolean(errors.email)}
            helperText={<ErrorMessage name="email" />}
          />
          <ErrorMessage name="email" component="div" className={styles.errorMessage} />

          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <Field
            name="password"
            type="password"
            as={TextField}
            fullWidth
            variant="outlined"
            className={`${styles.input} ${
              touched.password && errors.password ? styles.inputError : ""
            }`}
            error={touched.password && Boolean(errors.password)}
            helperText={<ErrorMessage name="password" />}
          />
          <ErrorMessage
            name="password"
            component="div"
            className={styles.errorMessage}
          />

          <Button
            type="submit"
            variant="contained"
            className={styles.submitButton}
          >
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
