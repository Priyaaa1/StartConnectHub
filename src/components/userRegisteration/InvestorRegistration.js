import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Imageupload from "./Imageupload";
import './InvestorRegistration.css'
function InvestorRegistration() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    firmName: "",
    investorType: "",
    preferredStage: "",
    investments: [
      {
        startupName: "",
        investmentAmount: "",
        investmentDate: "",
        sharesAcquired: "",
      },
    ],
    
      email: "",
    socialMediaLinks: "",
    experience: "",
    riskAppetite: "",
    fundingCriteria: "",
    preferredCommunication: "",
    availability: "",
    password: "",
    category: "",
    links:""
  });
  const [registered, setRegistered] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInvestmentsChange = (index, event) => {
    const { name, value } = event.target;
    const newInvestments = [...userDetails.investments];
    newInvestments[index][name] = value;
    setUserDetails((prev) => ({
      ...prev,
      investments: newInvestments,
    }));
  };

  const registerUser = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/investor/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });
      const data = await response.json();
      console.log("Registration successful:", data);
      console.log(response.data);
      // Save token to localStorage
      localStorage.setItem('token', response.data.token);
      setRegistered(true);
      setRegistered(true);
      navigate("/startup");
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
            <h3>INVESTOR REGISTRATION</h3>
            <Form.Group>
              <Form.Label >Firm Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Firm Name"
                name="firmName"
                value={userDetails.firmName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label >Investor Type</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Investor Type"
                name="investorType"
                value={userDetails.investorType}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Preferred Stage</Form.Label>
              <Form.Control
                as="select"
                name="preferredStage"
                value={userDetails.preferredStage}
                onChange={handleChange}
              >
                <option value="">Select Preferred Stage</option>
                <option value="Seed">Seed</option>
                <option value="Early Stage">Early Stage</option>
                <option value="Growth">Growth</option>
              </Form.Control>
            </Form.Group>
            {/* Investments */}
            {userDetails.investments.map((investment, index) => (
              <div key={index}>
                <Form.Group>
                  <Form.Label>Startup Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Startup Name"
                    name="startupName"
                    value={investment.startupName}
                    onChange={(e) => handleInvestmentsChange(index, e)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Investment Amount</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Investment Amount"
                    name="investmentAmount"
                    value={investment.investmentAmount}
                    onChange={(e) => handleInvestmentsChange(index, e)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Investment Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="investmentDate"
                    value={investment.investmentDate}
                    onChange={(e) => handleInvestmentsChange(index, e)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Shares Acquired</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Shares Acquired"
                    name="sharesAcquired"
                    value={investment.sharesAcquired}
                    onChange={(e) => handleInvestmentsChange(index, e)}
                  />
                </Form.Group>
              </div>
            ))}
            {/* Contact Information */}
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                name="email"
                value={userDetails.email}
                onChange={handleChange}
              />
            </Form.Group>
            {/*a Links */}
            <Form.Group>
              <Form.Label>Social Media Links</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Social Media Links"
                name="socialMediaLinks"
                value={userDetails.socialMediaLinks}
                onChange={handleChange}
              />
            </Form.Group>
            {/* Additional Details */}
            <Form.Group>
              <Form.Label>Experience</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Experience"
                name="experience"
                value={userDetails.experience}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Risk Appetite</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Risk Appetite"
                name="riskAppetite"
                value={userDetails.riskAppetite}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Funding Criteria</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Funding Criteria"
                name="fundingCriteria"
                value={userDetails.fundingCriteria}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Preferred Communication</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Preferred Communication"
                name="preferredCommunication"
                value={userDetails.preferredCommunication}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Availability</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Availability"
                name="availability"
                value={userDetails.availability}
                onChange={handleChange}
              />
            </Form.Group>
            {/* Password */}
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                name="password"
                value={userDetails.password}
                onChange={handleChange}
              />
            </Form.Group>
            {/* Category */}
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Category"
                name="category"
                value={userDetails.category}
                onChange={handleChange}
              />
              <Form.Label>Links</Form.Label>
              <Form.Control type="text" placeholder="Enter drive link" value={userDetails.links}></Form.Control>
            </Form.Group>
            {/* Submit button */}
            <Button className="submit_btn" variant="primary" type="submit" onClick={registerUser}>
              Register
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default InvestorRegistration;
