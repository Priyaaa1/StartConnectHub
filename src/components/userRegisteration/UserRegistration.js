import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Imageupload from "./Imageupload";
import { useNavigate } from "react-router-dom";

function UserRegistration() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    industry: "",
    turnover: "",
    funding: "",
    desc: "",
    phone: ""
  });
  const [profileImage, setProfileImage] = useState(null);
  const types = ["image/png", "image/jpeg", "image/jpg"];
  const navigate = useNavigate();
  const [registered, setRegistered] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setUserDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleProfileImageChange = (event) => {
    let selectedFile = event.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setProfileImage(selectedFile);
    } else {
      setProfileImage(null);
    }
  };

  const registerUser = (event) => {
    event.preventDefault();
    // Implement your registration logic here
    setRegistered(true);
  };

  return (
    <div className="mainn">
      {registered ? navigate("/") : null}
      <div className="section-log-ax" id="contact">
        <div className="register_main">
          <Form onSubmit={registerUser} className="register_form">
            <h3>USER REGISTRATION</h3>
            <Imageupload center="true" setData={setUserDetails} />
            <input
              type="text"
              placeholder="Company Name"
              name="name"
              value={userDetails.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="industry"
              placeholder="Industry"
              value={userDetails.industry}
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="Turnover"
              name="turnover"
              value={userDetails.turnover}
              onChange={handleChange}
            />
            <input
              type="text"
              name="funding"
              placeholder="Funding"
              value={userDetails.funding}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={userDetails.phone}
              onChange={handleChange}
            />
            <input
              type="textarea"
              name="desc"
              placeholder="Description"
              value={userDetails.desc}
              onChange={handleChange}
            />

            {/* <Form.Group style={{ textAlign: "left" }}>
               <Form.File
                 id="userImage"
                 label="Profile Picture"
                 onChange={handleProfileImageChange}
               />
             </Form.Group> */}
            <input className="submit_btn" type="submit" value="Register" />
          </Form>
        </div>
      </div>
    </div>
  );
}

export default UserRegistration;
