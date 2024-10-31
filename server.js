const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Complaint = require('./models/Comp');
const Forum = require('./models/Foru')
const Company = require('./models/company');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const crypto = require('crypto');

function hashInput(input) {
    const normalizedInput = input.toLowerCase();
  
    const hash = crypto.createHash('sha256');
  
    hash.update(normalizedInput);
  
    const hashedValue = hash.digest('hex');
  
    return hashedValue;
  }
const mongoURL = 'mongodb://127.0.0.1:27017/safeher';

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));

app.get('/', (req, res) => {
        res.send('API endpoint is working');
    });


app.get('/getComplaints', (req, res) => {
        Complaint.find() 
            .then(complaints => res.json(complaints))
            .catch(err => {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
            });
    });

app.get('/foru', async (req, res) => {
        Forum.find() 
            .then(forum => res.json(forum))
            .catch(err => {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
            });
      });

app.post('/api/foru', async (req, res) => {
        
        const { title, content, author } = req.body;

    const newforum = new Forum({
        title,
        content,
        author,
        
    });

    newforum.save()
        .then(forum => res.json(forum))
        .catch(err => console.error(err));

      });

app.post('/api/complaints', (req, res) => {
    const {companyName,otherCompanyName,hremail, name,instigatorName, departmentInst, departmentEmp, issue, writeUp, safetyFeeling ,duration,talkedBefore,awareness,action } = req.body;

    const hashedName = hashInput(name); 

    const newComplaint = new Complaint({
        companyName,
        otherCompanyName,
        hremail, 
        name:hashedName,
        instigatorName,
        departmentInst,
        departmentEmp,
        issue,
        writeUp,
        status: 0, 
        confirm: 0,
        createdAt: new Date(),
        safetyFeeling,
        duration,
        talkedBefore,
        awareness,
        action
    });

    newComplaint.save()
        .then(complaint => res.json(complaint))
        .catch(err => console.error(err));



});

app.put('/ComplaintsCompany/:id', (req, res) => {
    const { id } = req.params;
    const { status, action } = req.body;

    Complaint.findByIdAndUpdate(
        id,
        { $set: { status: status, action: action } }, // Update both status and action fields
        { new: true }
    )
        .then(updatedComplaint => {
            if (!updatedComplaint) {
                return res.status(404).json({ message: 'Complaint not found' });
            }
            res.json(updatedComplaint);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ message: 'Server Error' });
        });
});

app.put('/Complaints/:id', (req, res) => {
    const { id } = req.params;
    const { confirm, status } = req.body;

    Complaint.findByIdAndUpdate(id, { confirm, status }, { new: true })
        .then(updatedComplaint => {
            if (!updatedComplaint) {
                return res.status(404).json({ message: 'Complaint not found' });
            }
            res.json(updatedComplaint);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ message: 'Server Error' });
        });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    Company.findOne({ email: email })
        .then(company => {
            if (company) {
                if (company.password === password) {
                    res.json("Success");
                } else {
                    res.json("Incorrect password");
                }
            } else {
                res.json("User not found");
            }
        })
        .catch(err => {
            console.error("Error:", err);
            res.status(500).json({ error: "An error occurred while processing your request" });
        });
});

// app.post('/register', (req, res) => {
//     Company.create(req.body)
//         .then(company => res.json(company))
//         .catch(err => {
//             console.error("Error:", err);
//             res.status(500).json({ error: "An error occurred while processing your request" });
//         });
// });

app.post('/register', async (req, res) => {
    const { name, companyName, email, password } = req.body;

    const newCompany = new Company({
        name,
        companyName, // Ensure company field is included
        email,
        password
    });

    newCompany.save()
        .then(company => res.json(company))
        .catch(err => {
            console.error("Error:", err);
            res.status(500).json({ error: "An error occurred while processing your request" });
        });
});



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
