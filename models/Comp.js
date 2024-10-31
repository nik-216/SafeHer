const mongoose = require('mongoose');

const ComplaintSchema = new mongoose.Schema({
    companyName: String,
    otherCompanyName: String,
    hremail: String, 
    name: String,
    instigatorName: String,
    departmentInst: String,
    departmentEmp: String,
    issue: String,
    writeUp: String,
    status: {
        type: Number,
        default: 0 
    },
    confirm: {
        type: Number,
        default: 0 
    },
    createdAt: {
        type: String,
        default: () => {
            const currentDate = new Date();
            const day = String(currentDate.getDate()).padStart(2, '0');
            const month = String(currentDate.getMonth() + 1).padStart(2, '0');
            const year = currentDate.getFullYear();
            return `${day}/${month}/${year}`; // Format: dd/mm/yyyy
    }
},

        safetyFeeling: String,
        duration: String,
        talkedBefore: String,
        awareness: String,
        action: {
            type: String,
            default: 'Pending' 
        }
},{ collection: 'complaints' });

const Complaint = mongoose.model('Complaint', ComplaintSchema);

module.exports = Complaint;
