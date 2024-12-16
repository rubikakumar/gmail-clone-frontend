import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../store/actions/authActions';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      await dispatch(login(values)); 
      alert('Login successful');
    } catch (error) {
      setErrors({ server: error.response?.data?.message || 'Login failed' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors }) => (
          <Form>
            <Field name="email" placeholder="Email" />
            <Field name="password" placeholder="Password" type="password" />
            {errors.server && <div>{errors.server}</div>}
            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
