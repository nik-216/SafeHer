import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
function Profile() {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (isLoading) {
      return <div>Loading ...</div>;
    }
    if(isAuthenticated)
    {
        return(
        <div>
            <p>Welcome {user.name}!</p>
            <img src={user.picture} alt={user.name} className='pp' />
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
        );
    }
    else{
        return(
            <div>
                {/* <h1 className='profile-login'>Please login first!</h1> */}
                <h2>Welcome, {loggedInUser}</h2>
            </div>
        );
    }
}

export default Profile