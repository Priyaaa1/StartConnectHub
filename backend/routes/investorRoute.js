const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const StartupProfile = require('../models/startupProfile');
const InvestorProfile = require('../models/investorProfile');
const jwt = require('jsonwebtoken');
const auth=require('../middleware/auth')
// Get route for fetching startup profiles
router.get('/startupprofiles', auth, async (req, res) => {
  try {
    // Check if the user is logged in and get their ID from the auth middleware
    // Assuming your auth middleware sets the userId in the request object

    // Fetch all startup profiles created by the logged-in user
    const profiles = await StartupProfile.find();

    res.status(200).json(profiles);
  } catch (error) {
    console.error('Error fetching startup profiles:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
const secretKey = 'yourSecretKey'; // Replace 'yourSecretKey' with your actual secret key

// Signup route for InvestorProfile
router.post('/signup', async (req, res) => {
  const {
    firmName,
    investorType,
    preferredStage,
    investments,
    email,
    socialMediaLinks,
    experience,
    riskAppetite,
    fundingCriteria,
    category,
    preferredCommunication,
    availability,
    password,
    links
  } = req.body;

  try {
    // Check if the email already exists
    const existingUser = await InvestorProfile.findOne({ 'email': email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new InvestorProfile({
      firmName,
      investorType,
      preferredStage,
      investments,
      email,
      socialMediaLinks,
      category,
      experience,
      riskAppetite,
      fundingCriteria,
      preferredCommunication,
      availability,
      password: hashedPassword,
      links,
    });

    await newUser.save();

    // Generate JWT for signup
    const token = jwt.sign({ userId: newUser._id }, secretKey, { expiresIn: '1h' });

    res.status(201).json({ message: 'User created successfully', token });
  } catch (error) {
    console.error('Error creating user:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Login route for InvestorProfile
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await InvestorProfile.findOne({ 'email': email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT for login
    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });

    // Successful login
    res.status(200).json({ message: 'Login successful', token, user });
  } catch (error) {
    console.error('Error logging in user:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});
router.get('/me', auth, async (req, res) => {
  try {
    // Get the userId from the auth middleware
    const userId = req.user.userId;

    // Fetch the investor profile using the userId
    const investor = await InvestorProfile.findById(userId);

    if (!investor) {
      return res.status(404).json({ message: 'Investor profile not found' });
    }

    res.status(200).json(investor);
  } catch (error) {
    console.error('Error fetching investor profile:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
