import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import './StartupProfile.css'; // Import your CSS file
import './1.css'
const StartupProfile = () => {
    const [startup, setStartup] = useState(null);

    useEffect(() => {
        const fetchStartupProfile = async () => {
            try {
                const response = await axios.get('http://localhost:3001/startup/me', {
                    headers: {
                        Authorization: `${localStorage.getItem('token')}` // Assuming you store the token in localStorage
                    }
                });
                setStartup(response.data);
            } catch (error) {
                console.error('Error fetching startup profile:', error.message);
                // Handle error (e.g., show error message to the user)
            }
        };

        fetchStartupProfile();
    }, []); // Empty dependency array to run the effect only once

    if (!startup) {
        return <div>Loading...</div>; // Render loading state while fetching data
    }
    console.log(startup)
    const { startupName, founder, description, website, businessPlan, category, fundingAmount, fundingRounds, latestRoundDate, investors } = startup;

    return (
        <div className="startup-profile">
            <h2>{startupName}</h2>
            <p><strong>Founder:</strong> {founder}</p>
            <p><strong>Description:</strong> {description}</p>
            <p><strong>Website:</strong> <a href={website} target="_blank" rel="noopener noreferrer">{website}</a></p>
            <p><strong>Business Plan:</strong> {businessPlan}</p>
            <p><strong>Category:</strong> {category}</p>
            <p><strong>Funding Amount:</strong> ${fundingAmount}</p>
            <p><strong>Funding Rounds:</strong> {fundingRounds}</p>
            <p><strong>Latest Round Date:</strong> {new Date(latestRoundDate).toLocaleDateString()}</p>
            <h3>Investors:</h3>
            <ul>
                {investors.map((investor, index) => (
                    <li key={index}>
                        <strong>Email:</strong> {investor.email}<br />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StartupProfile;
