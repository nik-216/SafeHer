import { useNavigate } from "react-router-dom";
import "./Reports.css";
import { useAuth0 } from '@auth0/auth0-react';

function Reports() {
    const navigate = useNavigate();
    const { user, isAuthenticated, isLoading} = useAuth0();
    const changePage = (path) => {
        navigate(path)
    };
    if(isAuthenticated)
    {
        return (
            <div>
                <h3 className="user-name">Welcome {user.name}!</h3>
                <div className="reports">
                <br></br>
                <div className="track" onClick={() => { changePage('/Status'); }}>
                    <p>Track all your complaints</p>
                </div>
                <div className="new" onClick={() => { changePage('/NewComplaint'); }}>
                    <p>File a new complaint</p>
                </div>
            </div>
            </div>
            
        );
    }
    else if(isLoading)
    {
        return(<h3>Loading....</h3>);
    }
    else
    {
        return(
            <div>
                <h1 className='profile-login'>Please login first!</h1>
            </div>
        );
    }
}

export default Reports;
