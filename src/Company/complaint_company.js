import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./company.css";

function StatusCompany() {
    const [complaints, setComplaints] = useState([]);
    const [newAction, setNewAction] = useState(""); // State to hold the new action for a complaint

    const user = { companyName: 'Amazon' };

    useEffect(() => {
        async function fetchData(companyName) {
            try {
                const response = await axios.get(`http://localhost:5000/getComplaints?companyName=${companyName}`);
                setComplaints(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    
        const nameToFetch = user.companyName;
        fetchData(nameToFetch);
    }, [user.companyName]);

    const changeStatus = async (itemId, newStatus) => {
        const updatedComplaints = complaints.map(item => {
            if (item._id === itemId) {
                return { ...item, status: newStatus, action: newAction }; // Include the new action in the updated complaint
            }
            return item;
        });

        setComplaints(updatedComplaints);

        try {
            await axios.put(`http://localhost:5000/ComplaintsCompany/${itemId}`, { status: newStatus, action: newAction });
        } catch (error) {
            console.error('Error updating complaint:', error);
        }
    };

    const statuses = ["Registered", "In Progress", "Completed"];

    const handleChange = e => {
        setNewAction(e.target.value); // Update the new action state when the textarea value changes
    };

    return (
        <div className="StatusCompany">
            <div className="complaint_list">
                {complaints
                    .filter(item => item.companyName === user.companyName)
                    .map((item, index) => (
                        <div className="complaint_item" key={item._id}>
                            <h2> Complaint {index + 1}</h2>
                            <div className="tick"></div>
                            <p> Company: {item.companyName}</p>
                            <button onClick={() => changeStatus(item._id, 1)} className={!item.status ? "Ack_visible" : "Ack_invisible"}>
                                <span className="material-symbols-outlined">done</span>
                            </button>
                            <p> Date Registered : {item.createdAt}</p>
                            <p> Complainee Department : {item.departmentEmp}</p>
                            <p> Instigator Name : {item.instigatorName}</p>
                            <p> Instigator Department : {item.departmentInst}</p>
                            <p> Issue : {item.issue}</p>
                            <p> Safety Feeling : {item.safetyFeeling}</p>
                            <p> Duration : {item.duration}</p>
                            <p> Talked To Others : {item.talkedBefore}</p>
                            <p> Who All Knows : {item.awareness}</p>
                            <p> Status : {statuses[item.status]}</p>
                            <p> Action Taken : {!(item.status === 2) ? <textarea className="action" onChange={handleChange}></textarea> : item.action}</p>
                            <button onClick={() => changeStatus(item._id, 2)} className={!(item.status === 2) ? "visible" : "invisible"}>
                                Completed
                            </button>
                            <button onClick={() => changeStatus(item._id, 1)} className={!(item.status === 2) ? "visible" : "invisible"}>
                                Not Completed
                            </button>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default StatusCompany;
