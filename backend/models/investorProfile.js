const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const investorProfileSchema = new Schema({
  firmName: { type: String, required: true },
  investorType: { type: String, required: true },
  preferredStage: { type: String, enum: ['Seed', 'Early Stage', 'Growth'], required: true },
  investments: [
    {
      startupName: { type: String, required: true },
      investmentAmount: { type: Number, required: true },
      investmentDate: { type: Date, required: true },
      sharesAcquired: { type: Number, required: true }
    }
  ],
  
    email: { type: String, required: true },
  socialMediaLinks: [{ type: String }],
  experience: { type: String },
  riskAppetite: { type: String },
  fundingCriteria: { type: String },
  preferredCommunication: { type: String },
  availability: { type: String },
  password: { type: String, required: true },
  category: { type: String, required: true }, 
  links:{type:String,required:true},// Added category field
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const InvestorProfile = mongoose.model('InvestorProfile', investorProfileSchema);

module.exports = InvestorProfile;
