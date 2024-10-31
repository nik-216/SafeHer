const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    // Define your schema fields here
    // For example:
    name: { type: String, required: true },
    companyName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
},{ collection: 'company' });

module.exports = mongoose.model('Company', companySchema);
