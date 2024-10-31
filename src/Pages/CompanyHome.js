import React from 'react'
import { useNavigate } from 'react-router-dom'

function CompanyHome() {
    const navigate = useNavigate();
  return (
    <div className="home-div">
    <div className="playfair-display-color">
      <h1>For Women,</h1>
      <h1>By Women.</h1>
    </div>
    <br></br>
    <button onClick={()=>{navigate('/company-status')}} className='company-btn'>See Your Complaints</button>
    <br></br>
    <div className="org-brief">
        <h3 className="topic">Our Mission:</h3>
        <p>
        We are committed to fostering safe and ethical work environments for all. 
        Our platform empowers female employees to confidentially report incidents 
        and concerns directly to their organization's HR department, ensuring anonymity throughout the process.
        </p>
        <br></br>
        <h3 className="topic">Commitment to Privacy:</h3>
        <p>
        We take data security and privacy very seriously. 
        Our platform adheres to strict privacy regulations to ensure all reports and user activity remain completely anonymous.
        </p>
        <br></br>
        <h3 className="topic">Confidential Reporting:</h3>
        <p>
         We provide a secure and anonymous channel for employees to report incidents of harassment, discrimination, or other workplace concerns. This allows for open communication without fear of retribution.
        </p>
        <br></br>
        <h3 className="topic">Complaint Tracking:</h3>
        <p>
         Our system tracks the progress of each reported incident, allowing employees to monitor the resolution process. In cases where necessary action is not taken, we offer guidance on escalating the issue to higher authorities within the organization.
        </p>
        <br></br>
        <h3 className="topic">Supportive Community Forum:</h3>
        <p>
        We foster a safe and controlled online forum where employees can discuss workplace issues and receive support from peers. This facilitates peer-to-peer interaction and empowers individuals to find solutions collaboratively.
        </p>
        <br></br>
        <h3 className="topic">Workplace Education Center:</h3>
        <p>
        Our dedicated news page provides informative articles on workplace ethics, safety, and employee rights. This resource equips individuals with knowledge and empowers them to navigate workplace challenges.
        </p>
    </div>
</div>
  )
}

export default CompanyHome