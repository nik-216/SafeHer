import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function Login() {
    const navigate = useNavigate();
    const { loginWithRedirect } = useAuth0();

    const handleEmployeeLogin = () => {
        loginWithRedirect();
    };

    const handleCompanyLogin = () => {
        navigate('/company-register');
    };
  
    return (
        <nav>
            <div className="login-choice">
                <br />
                <h2 className="h">Welcome! Who do you want to login as?</h2>
                <br />
                <button onClick={handleEmployeeLogin} className="butt">
                    Employee Login
                </button>
                <br />
                <br />
                <button onClick={handleCompanyLogin} className="butt">
                    Company Login
                </button>
            </div>
        </nav>
    );
}

export default Login;
