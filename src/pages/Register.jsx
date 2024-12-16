import React from 'react';
import { Formik, Form, Field } from 'formik';
import { api } from '../services/api';

const Register = () => {
  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      await api.post('/auth/register', values); 
      alert('Registration successful');
    } catch (error) {
      setErrors({ server: error.response?.data?.message || 'Registration failed' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="register">
      <h2>Register</h2>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors }) => (
          <Form>
            <Field name="name" placeholder="Name" />
            <Field name="email" placeholder="Email" />
            <Field name="password" placeholder="Password" type="password" />
            {errors.server && <div>{errors.server}</div>}
            <button type="submit" disabled={isSubmitting}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
