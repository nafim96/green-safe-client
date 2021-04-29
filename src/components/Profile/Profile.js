import React, { useContext } from 'react';
import { UserContext } from '../../App';

const Profile = () => {
    document.title= "Profile";
    const [loggedInUser, setLoggedInUser]= useContext(UserContext);
    return (
        <div>
            <h1>{loggedInUser.name || loggedInUser.displayName}</h1>
            <p>{loggedInUser.email}</p>
        </div>
    );
};

export default Profile;