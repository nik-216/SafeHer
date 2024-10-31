import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './company_register.css';

function CompanyRegister() {
    const [name, setName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const companyData = { name, companyName, email, password };

        try {
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(companyData)
            });

            if (response.ok) {
                navigate('/company-home');
            } else {
                throw new Error('Failed to register');
            }
        } catch (error) {
            console.error(error);
            alert('Failed to register. Please try again.');
        }
    };

    return (
        <div className='register-div'>
            <div className='register-img'></div>
            <div className='register-container'>
                <p className='whiteout'>124567909876543</p>
                <div className='register-info'>
                    <h2>Welcome to SafeHer</h2>
                    <br></br>
                    <form onSubmit={handleSubmit}>
                        <p>Name:</p>
                        <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' required />
                        <br></br>
                        <br></br>
                        <p>Company Name:</p>
                        <input type='text' name='companyName' value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder='Company Name' required />
                        <br></br>
                        <br></br>
                        <p>Email:</p>
                        <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
                        <br></br>
                        <br></br>
                        <p>Password:</p>
                        <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
                        <br></br>
                        <br></br>
                        <button type='submit' className='reg'>Register</button>
                    </form>
                    <br></br>
                    <br></br>
                    <Link to='/company-login' className='reg-exp'>Already have an account? Log in here.</Link>
                </div>
            </div>
        </div>
    )
}

export default CompanyRegister;
