// import React from 'react';
// import { Link } from 'react-router-dom';
// import {useState} from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './company_login.css';

// function CompanyLogin() {

//   const [email,setEmail] = useState('');
//   const [password,setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e)=>{


//     e.preventDefault();
//     axios.post('http://localhost:5000/login',{email,password})
//     .then(result=>{
      
//       console.log(result);
//       if(result.data==="Success")
//       {
//         // alert("Logged in ");
//         navigate('/company-home');

//       }
//       if(result.data==="incorrect")
//       {
//         alert("Email or Password is incorrect");
//       }

    
//     })
//     .catch(err=>console.log(err));

//   }

//   return (
//     <div className='login-div'>
//       <div className='login-img'>
//       </div>
//       <div className='login-container'>
//         <p className='whiteout'>124567909876543</p>
//         <div className='login-info'>
//           <h2>Welcome Back to SafeHer</h2>
//           <br></br>
//           <form onSubmit={handleSubmit}>
//           <p>Email: </p>
//           <input type='email' className='mailid' name='login-email' onChange={(e)=> setEmail(e.target.value)}  placeholder='Email' size={30}></input>
//           <br></br>
//           <br></br>
//           <p>Password: </p>
//           <input type='password' className='passwd' name='login-password' onChange={(e)=> setPassword(e.target.value)} placeholder='Password' size={30} ></input>
//           <br></br>
//           <br></br>
//           <button type='submit' className='log'>login</button>
//           </form>
//           <br></br>
//           <br></br>
//           <Link to='/company-register' className='reg-exp'>New Member? Register now. </Link>
//           {/* <button className='sign'>Sign-up</button> */}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CompanyLogin

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './company_login.css';

function CompanyLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      const { data } = response;
      if (data === 'Success') {
        localStorage.setItem('loggedInUser', email); // Store the logged-in user's email in local storage
        navigate('/company-home');
      } else {
        alert('Email or Password is incorrect');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='login-div'>
      <div className='login-img'></div>
      <div className='login-container'>
        <p className='whiteout'>124567909876543</p>
        <div className='login-info'>
          <h2>Welcome Back to SafeHer</h2>
          <br />
          <form onSubmit={handleSubmit}>
            <p>Email: </p>
            <input
              type='email'
              className='mailid'
              name='login-email'
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              size={30}
            ></input>
            <br />
            <br />
            <p>Password: </p>
            <input
              type='password'
              className='passwd'
              name='login-password'
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
              size={30}
            ></input>
            <br />
            <br />
            <button type='submit' className='log'>
              Login
            </button>
          </form>
          <br />
          <br />
          <Link to='/company-register' className='reg-exp'>
            New Member? Register now.
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompanyLogin;
