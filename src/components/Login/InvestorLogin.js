import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios"; // Import Axios for making HTTP requests
import logo from "../../data/completeLogo.png";
import "./login.css";

function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  //const [redirectHome, setRedirectHome] = useState(false);
  //const [redirectRegistration, setRedirectRegistration] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setCredentials((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSignin = async () => {
    try {
      // Send POST request to your backend API for login
      const response = await axios.post('http://127.0.0.1:3001/investor/login', credentials);
      if (response.data.message === 'Login successful') {
        localStorage.setItem('token',response.data.token)
        navigate('/startups') 
        // Redirect to home page upon successful login
      } else {
        alert('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Error logging in:', error.message);
      alert('Error logging in. Please try again.');
    }
  };

  return (
    <div>
     
      <div className="section-log-a" id="contact">
        <div className="form-container-a">
          <img src={logo} className="form-img-a" alt="login" />
          <Form className="contact-form-a">
            <h3>LOGIN</h3>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleSignin}>
              Login
            </Button>
            <p>
              New here? No issue, kindly <Link to="/investor/register">Register here</Link>
            </p>
            <br />
            <hr className="line-bro" />
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
