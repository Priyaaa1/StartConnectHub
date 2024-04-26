import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import "./signup.css";
import logo from "../../data/SharkUpLogoTwo.png";

function SignUp() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = (event) => {
    event.preventDefault();
    // Implement your signup logic here, such as sending a request to your backend API
    console.log("Signup form submitted:", credentials);
  };

  return (
    <div>
      <div className="section-log-a" id="contact">
        <div className="form-container-a">
          <img src={logo} className="form-img-a" alt="signup" />
          <Form onSubmit={handleSignup} className="contact-form-a">
            <h3>SIGN UP</h3>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
            />
            <input type="submit" value="Sign Up" />
            <p>
              Already registered? <Link to="/login">Login here</Link>
            </p>
            <br />
            <hr className="line-bro" />
          </Form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
