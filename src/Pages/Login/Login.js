import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form as BootstrapForm, Button, Alert } from 'react-bootstrap';
import styles from "./login.module.scss"; // Import the SCSS module
import { useNavigate } from 'react-router-dom';


// src/Login.js
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sending a POST request to FakeStore API for authentication
      const response = await axios.post('https://fakestoreapi.com/auth/login', { username, password });

      // For simplicity, we are assuming authentication is successful
      console.log('Authentication successful:', response.data);

      // Set success message and redirect to homepage
      setSuccess(true);
      setError(null);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (err) {
      console.error('Authentication failed:', err);
      setError('Authentication failed. Please check your credentials.');
      setSuccess(false);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <div className={styles.loginContainer}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="username">Username:</label>
                <BootstrapForm.Control
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="password">Password:</label>
                <BootstrapForm.Control
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" variant="primary" block>
                Login
              </Button>
            </form>
            {/* Display an alert for errors or success */}
            {error && <Alert variant="danger" className={styles.errorAlert}>{error}</Alert>}
            {success && <Alert variant="success" className={styles.successAlert}>Login successful. Redirecting...</Alert>}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
