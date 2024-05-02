import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './investor.css'; // Import your CSS file

const StartupProfiles = () => {
  const [profiles, setProfiles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const token = localStorage.getItem('token');
        const headers = {
          Authorization: `${token}`,
        };
        const response = await axios.get('http://localhost:3001/investor/startupprofiles', { headers });
        setProfiles(response.data);
      } catch (error) {
        console.error('Error fetching startup profiles:', error);
        navigate('/ilogin');
      }
    };

    fetchProfiles();
  }, []);

  return (
    <div className="startup-profiles-container">
    <h2>Startup Profiles</h2>
    <ul className="profiles-list">
      {profiles.map((profile) => (
        <li key={profile._id} className="profile-item">
          <h3><strong>{profile.startupName}</strong></h3>
          <p><strong>Founder:</strong> {profile.founder}</p>
          <p><strong>Funding Amount:</strong> ${profile.fundingAmount}</p>
          <p><strong>Funding Rounds:</strong> {profile.fundingRounds}</p>
          <p><strong>Latest Round Date:</strong> {new Date(profile.latestRoundDate).toLocaleDateString()}</p>
          <p><strong>Description:</strong> {profile.description}</p>
          <p><strong>Website:</strong> {profile.website}</p>
          <p><strong>Business Plan:</strong> {profile.businessPlan}</p>
          <p><strong>Category:</strong> {profile.category}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Investors:</strong></p>
          <ul>
            {profile.investors.map((investor, index) => (
              <li key={index}>
                <p><strong>Investor Name:</strong> {investor.investorName}</p>
                <p><strong>Investment Amount:</strong> ${investor.investmentAmount}</p>
                <p><strong>Investment Date:</strong> {new Date(investor.investmentDate).toLocaleDateString()}</p>
                <p><strong>Shares Issued:</strong> {investor.sharesIssued}</p>
              </li>
            ))}
          </ul>
          <p><strong>Created At:</strong> {new Date(profile.createdAt).toLocaleDateString()}</p>
          <p><strong>Updated At:</strong> {new Date(profile.updatedAt).toLocaleDateString()}</p>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default StartupProfiles;
