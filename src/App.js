import React, { Component } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import NavBar from './Pages/NavBar.js';
import Home from './Pages/Home.js';
import Footer from './Pages/Footer.js';
import Login from './Pages/Login.js';
import EmpLogin from './Pages/EmpLogin.js';
import Profile from './Pages/Profile.js';
import Forumall from './Forum/allforum.js';
import Status from './Status/Status_Page_put.js';
import Complaint from './Complaint/complaint.js';
import Reports from './Pages/Reports.js';
import CompanyLogin from './Pages/company_login.js';
import CompanyRegister from './Pages/company_register.js';
import CompanyHome from './Pages/CompanyHome.js';
import StatusCompany from './Company/complaint_company.js';
import LawyersPage from './Pages/lawyer.js';
function App() {
  return (
    <div className='app-div'>
      <Router>
        <NavBar/>
        <Routes>
          <Route  path='/' element={<Home />} ></Route>
          <Route  path='/Login' element={<Login/>} ></Route>
          <Route  path='/EmpLogin' element={<EmpLogin/>} ></Route>
          <Route  path='/Lawyers' element={<LawyersPage/>} ></Route>
          <Route  path='/Profile' element={<Profile/>} ></Route>
          <Route  path='/Forum' element={<Forumall/>} ></Route>
          <Route  path='/Status' element={<Status/>} ></Route>
          <Route  path='/Reports' element={<Reports/>} ></Route>
          <Route  path='/NewComplaint' element={<Complaint/>} ></Route>
          <Route  path='/company-register' element={<CompanyRegister/>} ></Route>
          <Route  path='/company-login' element={<CompanyLogin/>} ></Route>
          <Route  path='/company-home' element={<CompanyHome/>} ></Route>
          <Route  path='/company-status' element={<StatusCompany/>} ></Route>

        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
