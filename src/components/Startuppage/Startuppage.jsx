import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import './InvestorProfiles.css'; // Import your CSS file

const InvestorProfiles = () => {
  const [investors, setInvestors] = useState([]);
  const [searchField, setSearchField] = useState('firmName'); // Default search field
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInvestors = async () => {
      try {
        const token = localStorage.getItem('token');
        const headers = {
          Authorization: `${token}`,
        };
        const response = await axios.get('http://localhost:3001/startup/investors', { headers });
        setInvestors(response.data);
        navigate('/investors');
      } catch (error) {
        console.error('Error fetching investor profiles:', error);
      }
    };

    fetchInvestors();
  }, []);

  const handleSearch = async () => {
    try {
      const token = localStorage.getItem('token');
      const headers = {
        Authorization: `${token}`,
      };
      const response = await axios.get(`http://localhost:3001/startup/investors/search?field=${searchField}&value=${searchValue}`, { headers });
      setInvestors(response.data);
    } catch (error) {
      console.error('Error searching investor profiles:', error);
    }
  };

  return (
    <div className="investor-profiles-container">
      <h2>Investor Profiles</h2>
      <div className="search-container">
        <select value={searchField} onChange={(e) => setSearchField(e.target.value)}>
          <option value="firmName">Firm Name</option>
          <option value="investorType">Investor Type</option>
          <option value="preferredStage">Preferred Stage</option>
          <option value="email">Email</option>
          {/* Add more options for other fields */}
        </select>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Enter search value"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <ul className="investors-list">
        {investors.map((investor) => (
          <li key={investor._id} className="investor-item">
            <h3>{investor.firmName}</h3>
            <p><strong>Investor Type:</strong> {investor.investorType}</p>
            <p><strong>Preferred Stage:</strong> {investor.preferredStage}</p>
            <p><strong>Email:</strong> {investor.email}</p>
            <p><strong>Social Media Links:</strong> {investor.socialMediaLinks.join(', ')}</p>
            <p><strong>Experience:</strong> {investor.experience}</p>
            <p><strong>Risk Appetite:</strong> {investor.riskAppetite}</p>
            <p><strong>Funding Criteria:</strong> {investor.fundingCriteria}</p>
            <p><strong>Preferred Communication:</strong> {investor.preferredCommunication}</p>
            <p><strong>Availability:</strong> {investor.availability}</p>
            <p><strong>Category:</strong> {investor.category}</p>
            <p><strong>Created At:</strong> {new Date(investor.createdAt).toLocaleDateString()}</p>
            <p><strong>Updated At:</strong> {new Date(investor.updatedAt).toLocaleDateString()}</p>
            {/* Add more fields if needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvestorProfiles;
