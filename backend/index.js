const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors=require("cors")
// Import route files
const investorRoutes = require('./routes/investorRoute');
const startupRoutes = require('./routes/startupRoute');

const app = express();
app.use(bodyParser.json());
app.use(cors())
// Connect to MongoDB (replace 'mongodb://localhost/yourdbname' with your actual MongoDB URI)
mongoose.connect('mongodb+srv://Pritamsingh:12345678Rt.@cluster0.dwdkodg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err.message);
});

// Use routes
app.use('/investor', investorRoutes);
app.use('/startup', startupRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
