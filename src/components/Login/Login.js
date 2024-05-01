import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../data/completeLogo.png";
import "./login.css";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const { setIsLoggedIn } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setCredentials((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSignin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/startup/login",
        credentials
      );
      if (response.data.message === "Login successful") {
        localStorage.setItem("token", response.data.token);
        setIsLoggedIn(true); // Set isLoggedIn to true upon successful login
        navigate("/startup/me");
      } else {
        setErrorMessage("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Error logging in:", error.message);
      setErrorMessage("Error logging in. Please try again.");
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
              New here? No issue, kindly{" "}
              <Link to="/startup/register">Register here</Link>
            </p>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <br />
            <hr className="line-bro" />
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
