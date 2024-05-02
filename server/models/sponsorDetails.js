const mongoose = require('mongoose');

// create a schema
const sponsorCmpSchema = new mongoose.Schema({
    compnyName: { type: String, required: true},
    compnyDescription: { type: String},
    sponsorAmount: { type: String, required: true},
    websiteURL: {type: String, required: true},
    companyEmail: { type: String,  required: true, unique: true },
})

const company = mongoose.model('sponsorCompany', sponsorCmpSchema);

module.exports = company