import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./Status_Page.css";
import { useAuth0 } from "@auth0/auth0-react";
import sha256 from 'crypto-js/sha256';

function Status() {
    const [complaints, setComplaints] = useState([]);
    const {user} = useAuth0();
    useEffect(() => {
        async function fetchData(name) {
            try {
                const response = await axios.get(`http://localhost:5000/getComplaints?name=${name}`);
                setComplaints(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    
        const nameToFetch = user.name; 
        fetchData(nameToFetch);
    }, []);

    const changeConfirm = async (itemId, newConfirmStatus) => {
        const updatedComplaints = complaints.map(item => {
            if (item._id === itemId) {
                return { ...item, confirm: newConfirmStatus, status: newConfirmStatus ? 2 : 1 };
            }
            return item;
        });

        setComplaints(updatedComplaints);
        console.log(updatedComplaints)

        try {
            await axios.put(`http://localhost:5000/Complaints/${itemId}`, { confirm: newConfirmStatus, status: newConfirmStatus ? 2 : 1 });
        } catch (error) {
            console.error('Error updating complaint:', error);
        }
    };

    const statuses = ["Registered", "In Progress", "Completed"];

    return (
        <div className="Status">
            <div className="complaint_list">
                {complaints
                    .filter(item => item.name === sha256(user.name).toString()) // Filter complaints by user's name
                    .map((item, index) => (
                        <div className="complaint_item" key={item._id}>
                            <h2> Complaint {index + 1}</h2>
                            <p> Date Registered : {item.createdAt}</p>
                            <p> Company : {item.companyName}</p>
                            <p> Instigator Name : {item.instigatorName}</p>
                            <p> Instigator Department : {item.departmentInst}</p>
                            <p> Issue : {item.issue}</p>
                            <p> Safety Feeling : {item.safetyFeeling}</p>
                            <p> Duration : {item.duration}</p>
                            <p> Talked To Others : {item.talkedBefore}</p>
                            <p> Who All Knows : {item.awareness}</p>
                            <p> Status : {statuses[item.status]}</p>
                            <p> Action Taken : {item.action}</p>
                            <button onClick={() => changeConfirm(item._id, 1)} className={!item.confirm ? "visible" : "invisible"}>
                                <span class="material-symbols-outlined">done</span>
                            </button>
                            <button onClick={() => changeConfirm(item._id, 0)} className={!item.confirm ? "visible" : "invisible"}>
                                <span class="material-symbols-outlined">close</span>
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Status;
