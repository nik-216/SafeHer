import React, { useState } from 'react';
import axios from 'axios';
import './complaint.css';
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';

function Complaint() {
    const navigate = useNavigate();
    const [name,setName] = useState('');
    const { user } = useAuth0();
    const [formData, setFormData] = useState({
        companyName:'',
        otherCompanyName:'',
        hremail:'',
        name: user.name,
        instigatorName: '',
        departmentInst: '',
        departmentEmp: '',
        issue: '',
        writeUp: '',
        safetyFeeling: '',
        duration: '',
        talkedBefore: '',
        awareness: '',
        action:''
    });
    // setName({user.name});
    
    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:5000/api/complaints', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
        
            if (response.status === 200) {
            navigate('/');
              // Handle success, e.g., display a success message to the user
              console.log('Appointment saved successfully');
            } else {
              // Handle error, e.g., display an error message to the user
               console.error('An error occurred while saving the appointment');
              // alert("Desired date and time slot is already booked !! Please choose another date and time")
            }
          } catch (error) {
            console.error('An error occurred:', error);
          }

    };

    return (
        <div className="complaint-new">
            <center><h1>COMPLAINT</h1></center>
            <h3 className='note'>Kindly fill in all the details regarding your complaint</h3>
            <br></br>
            <br></br>
            <div className="complaint">
                <form onSubmit={handleSubmit} className='complaint-details'>
                    <table>
                        <tbody>
                            <tr>
                                <td><label htmlFor="instigatorName">Name of Instigator:</label></td>
                                <td><input type="text" id="instigatorName" name="instigatorName" onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <td>Company</td>
                                <td>
                                    <select name="companyName" onChange={handleChange}>
                                        <option value="">Select</option>
                                        <option value="Amazon">Amazon</option>
                                        <option value="Apple">Apple</option>
                                        <option value="Google">Google</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </td>
                            </tr>
                            {formData.companyName === 'Others' && (
                                <tr>
                                    <td><label htmlFor="otherCompanyName">Company Name:</label></td>
                                    <td><input type="text" id="otherCompanyName" name="otherCompanyName" onChange={handleChange} /></td>
                                </tr>
                                
                            )}

                            {formData.companyName === 'Others' && (
                                <tr>
                                    <td><label htmlFor="hremail">HR Email:</label></td>
                                    <td><input type="email" id="hremail" name="hremail" onChange={handleChange} /></td>
                                </tr>
                                
                            )}
                            <tr>
                                <td><label htmlFor="departmentInst">Department of the Instigator:</label></td>
                                <td><input type="text" id="departmentInst" name="departmentInst" onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="departmentEmp">Department of the Employee:</label></td>
                                <td><input type="text" id="departmentEmp" name="departmentEmp" onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="issue">Issue Faced:</label></td>
                                <td><input type="text" id="issue" name="issue" onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="writeUp">Details of the issue faced:</label></td>
                                <td><textarea id="writeUp" name="writeUp" rows="4" onChange={handleChange} /></td>
                            </tr>
                            


                            <tr>
                                <td>How safe do you feel?</td>
                                <td>
                                    <select name="safetyFeeling" onChange={handleChange}>
                                        <option value="">Select</option>
                                        <option value="Very safe">Very safe</option>
                                        <option value="Safe">Safe</option>
                                        <option value="Neutral">Neutral</option>
                                        <option value="Unsafe">Unsafe</option>
                                        <option value="Very unsafe">Very unsafe</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>How long has this been happening?</td>
                                <td>
                                    <select name="duration" onChange={handleChange}>
                                        <option value="">Select</option>
                                        <option value="Less than a week">Less than a week</option>
                                        <option value="1-2 weeks">1-2 weeks</option>
                                        <option value="2-4 weeks">2-4 weeks</option>
                                        <option value="More than a month">More than a month</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Have you already talked about this with others?</td>
                                <td>
                                    <select name="talkedBefore" onChange={handleChange}>
                                        <option value="">Select</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="Not sure">Not sure</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Do others know about this issue?</td>
                                <td>
                                    <select name="awareness" onChange={handleChange}>
                                        <option value="">Select</option>
                                        <option value="Yes, many people are aware">Yes, many people are aware</option>
                                        <option value="Yes, a few people are aware">Yes, a few people are aware</option>
                                        <option value="No, nobody else knows">No, nobody else knows</option>
                                        <option value="Not sure">Not sure</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2"><input type="submit" value="Submit" className='butt' /></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );
}

export default Complaint;
