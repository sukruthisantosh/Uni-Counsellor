import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const confirmLogout = window.confirm("Are you sure you want to logout?");
        if (confirmLogout) {
            alert("You have been logged out.");
            setIsLoggedIn(false);
            navigate("/login");
        } else {
            navigate(-1);
        }
    }, [navigate, setIsLoggedIn]);

    return (
        <div className="logout-container">
            <p>Logging out...</p>
        </div>
    );
};

export default Logout;