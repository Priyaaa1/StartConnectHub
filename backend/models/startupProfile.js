const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const startupProfileSchema = new Schema({
  startupName: { type: String, required: true },
  founder: { type: String, required: true },
  fundingAmount: { type: Number, required: true },
  fundingRounds: { type: Number, required: true },
  latestRoundDate: { type: Date, required: true },
  description: { type: String },
  website: { type: String },
  businessPlan: { type: String },
  category: { type: String },
  investors: [
    {
      investorName: { type: String, required: true },
      investmentAmount: { type: Number, required: true },
      investmentDate: { type: Date, required: true },
      sharesIssued: { type: Number, required: true }
    }
  ],
  links: { type: String }, // Remove the trailing comma and define links properly
  email: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const StartupProfile = mongoose.model('StartupProfile', startupProfileSchema);

module.exports = StartupProfile;
