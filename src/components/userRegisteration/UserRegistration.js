import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Imageupload from "./Imageupload";

function UserRegistration() {
  const [userDetails, setUserDetails] = useState({
    startupName: "",
    founder: "",
    fundingAmount: 0,
    fundingRounds: 0,
    latestRoundDate: "",
    description: "",
    website: "",
    businessPlan: "",
    category: "",
    investors: [
      {
        investorName: "",
        investmentAmount: 0,
        investmentDate: "",
        sharesIssued: 0
      }
    ],
    
      email: "",
      
    password: "",
    links:""
  });
  const navigate = useNavigate();
  const [registered, setRegistered] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const registerUser = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/startup/signup",
        userDetails
      );
      console.log(response.data);
      console.log(response.data);
      // Save token to localStorage
      localStorage.setItem('token', response.data.token);
      setRegistered(true);
      setRegistered(true);
      navigate("/");
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="mainn">
      {registered ? navigate("/") : null}
      <div className="section-log-ax" id="contact">
        <div className="register_main">
          <Form onSubmit={registerUser} className="register_form">
            <h3>USER REGISTRATION</h3>
            {/* You can include the Imageupload component here if needed */}
            <Form.Group controlId="startupName">
              <Form.Label>Startup Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Startup Name"
                name="startupName"
                value={userDetails.startupName}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="founder">
              <Form.Label>Founder</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Founder"
                name="founder"
                value={userDetails.founder}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="fundingAmount">
              <Form.Label>Funding Amount</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Funding Amount"
                name="fundingAmount"
                value={userDetails.fundingAmount}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="fundingRounds">
              <Form.Label>Funding Rounds</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Funding Rounds"
                name="fundingRounds"
                value={userDetails.fundingRounds}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="latestRoundDate">
              <Form.Label>Latest Round Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter Latest Round Date"
                name="latestRoundDate"
                value={userDetails.latestRoundDate}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter Description"
                name="description"
                value={userDetails.description}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="website">
              <Form.Label>Website</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Website"
                name="website"
                value={userDetails.website}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="businessPlan">
              <Form.Label>Business Plan</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Business Plan"
                name="businessPlan"
                value={userDetails.businessPlan}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Category"
                name="category"
                value={userDetails.category}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="investorName">
              <Form.Label>Investor Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Investor Name"
                name="investorName"
                value={userDetails.investors[0].investorName}
                onChange={(e) =>
                  handleChange({
                    target: {
                      name: "investors",
                      value: [
                        {
                          ...userDetails.investors[0],
                          investorName: e.target.value
                        }
                      ]
                    }
                  })
                }
                required
              />
            </Form.Group>
            <Form.Group controlId="investmentAmount">
              <Form.Label>Investment Amount</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Investment Amount"
                name="investmentAmount"
                value={userDetails.investors[0].investmentAmount}
                onChange={(e) =>
                  handleChange({
                    target: {
                      name: "investors",
                      value: [
                        {
                          ...userDetails.investors[0],
                          investmentAmount: e.target.value
                        }
                      ]
                    }
                  })
                }
                required
              />
            </Form.Group>
            <Form.Group controlId="investmentDate">
              <Form.Label>Investment Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter Investment Date"
                name="investmentDate"
                value={userDetails.investors[0].investmentDate}
                onChange={(e) =>
                  handleChange({
                    target: {
                      name: "investors",
                      value: [
                        {
                          ...userDetails.investors[0],
                          investmentDate: e.target.value
                        }
                      ]
                    }
                  })
                }
                required
              />
            </Form.Group>
            <Form.Group controlId="sharesIssued">
              <Form.Label>Shares Issued</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Shares Issued"
                name="sharesIssued"
                value={userDetails.investors[0].sharesIssued}
                onChange={(e) =>
                  handleChange({
                    target: {
                      name: "investors",
                      value: [
                        {
                          ...userDetails.investors[0],
                          sharesIssued: e.target.value
                        }
                      ]
                    }
                  })
                }
                required
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                name="email"
                value={userDetails.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
          
           
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                name="password"
                value={userDetails.password}
                onChange={handleChange}
                required
              />
              <Form.Label>Links</Form.Label>
              <Form.Control type="text" placeholder="Enter Links" name="links" value={userDetails.links} onChange={handleChange}></Form.Control>
            </Form.Group>
            <Button className="submit_btn" variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default UserRegistration;
