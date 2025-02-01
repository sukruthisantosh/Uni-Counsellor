import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css"; // Assuming you have a separate CSS file for styling

const Login = ({ onLoginSuccess }) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Simulating successful login
        alert("Logged in successfully!");
        navigate("/intermediate");
    };

    return (
        <div className="login-container">
            <h2 className="login-title">Welcome Back</h2>
            <div className="image-container">
                <img src="/assets/logo.png" alt="Logo" className="logo" />
            </div>
            <div className="form-container">
                <input
                    className="input"
                    type="text"
                    placeholder="User Name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <input
                    className="input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="forgot-password" onClick={() => alert('Forgot password?')}>
                    Forgot password?
                </button>
                <button className="button" onClick={handleLogin}>Log in</button>
                <div className="footer">
                    <span>Don't have an account? </span>
                    <button className="sign-up" onClick={() => navigate("/signup")}>Sign up</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
