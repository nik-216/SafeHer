const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Company = require('./company');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/safeher");

app.post('/register', (req, res) => {
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

app.post('/register', (req, res) => {
    Company.create(req.body)
        .then(company => res.json(company))
        .catch(err => {
            console.error("Error:", err);
            res.status(500).json({ error: "An error occurred while processing your request" });
        });
});

app.listen(3000, () => {
    console.log("server is running...");
});
