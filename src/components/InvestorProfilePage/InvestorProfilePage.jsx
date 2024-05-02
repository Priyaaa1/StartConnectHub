import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import './InvestorProfile.css'; // Import your CSS file

const InvestorProfile = () => {
    const [investor, setInvestor] = useState(null);

    useEffect(() => {
        const fetchInvestorProfile = async () => {
            try {
                const response = await axios.get('http://localhost:3001/investor/me', {
                    headers: {
                        Authorization: `${localStorage.getItem('token')}` // Assuming you store the token in localStorage
                    }
                });
                setInvestor(response.data);
            } catch (error) {
                console.error('Error fetching investor profile:', error.message);
                // Handle error (e.g., show error message to the user)
            }
        };

        fetchInvestorProfile();
    }, []); // Empty dependency array to run the effect only once

    if (!investor) {
        return <div>Loading...</div>; // Render loading state while fetching data
    }

    const { firmName, investorType, preferredStage, investments, email, socialMediaLinks, experience, riskAppetite, fundingCriteria, category, preferredCommunication, availability, links } = investor;

    return (
        <div className="investor-profile">
            <h2>{firmName}</h2>
            <p><strong>Investor Type:</strong> {investorType}</p>
            <p><strong>Preferred Stage:</strong> {preferredStage}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Category:</strong> {category}</p>
            <p><strong>Social Media Links:</strong></p>
            <ul>
                {socialMediaLinks.map((link, index) => (
                    <li key={index}>
                        <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
                    </li>
                ))}
            </ul>
            <p><strong>Experience:</strong> {experience}</p>
            <p><strong>Risk Appetite:</strong> {riskAppetite}</p>
            <p><strong>Funding Criteria:</strong> {fundingCriteria}</p>
            <p><strong>Preferred Communication:</strong> {preferredCommunication}</p>
            <p><strong>Availability:</strong> {availability}</p>
            <p><strong>Links:</strong> {links}</p>
            <h3>Investments:</h3>
            <ul>
                {investments.map((investment, index) => (
                    <li key={index}>
                        <strong>Startup Name:</strong> {investment.startupName}<br />
                        <strong>Investment Amount:</strong> ${investment.investmentAmount}<br />
                        <strong>Investment Date:</strong> {new Date(investment.investmentDate).toLocaleDateString()}<br />
                        <strong>Shares Acquired:</strong> {investment.sharesAcquired}<br />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InvestorProfile;
