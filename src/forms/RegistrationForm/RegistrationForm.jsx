import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import styles from "./RegistrationForm.module.css";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const RegistrationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={RegistrationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className={styles.form}>
          <Box>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <Field
              as={TextField}
              name="name"
              fullWidth
              variant="outlined"
              size="small"
              error={touched.name && Boolean(errors.name)}
              helperText={<ErrorMessage name="name" />}
            />
          </Box>

          <Box>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <Field
              as={TextField}
              name="email"
              fullWidth
              variant="outlined"
              size="small"
              error={touched.email && Boolean(errors.email)}
              helperText={<ErrorMessage name="email" />}
            />
          </Box>

          <Box>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <Field
              as={TextField}
              type="password"
              name="password"
              fullWidth
              variant="outlined"
              size="small"
              error={touched.password && Boolean(errors.password)}
              helperText={<ErrorMessage name="password" />}
            />
          </Box>

          <Button
            type="submit"
            variant="contained"
            className={styles.submitButton}
          >
            Register
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
