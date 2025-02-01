import React, { useState } from 'react';
import axios from 'axios';
import { BACKEND_SRC } from '@env';
import "./Login.css"; // Assuming you have a separate CSS file for styling
import { useNavigate } from 'react-router-dom';

const Login = ({ onLoginSuccess }) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.get(`${BACKEND_SRC}user/${userName}`);
            console.log("Received response: ", response.data);

            if (!response.data) {
                alert("Wrong username. Try again.");
                setUserName('');
                setPassword('');
                return;
            }

            if (response.data.Password !== password) {
                alert("Wrong Password, try again.");
                return;
            }

            alert("Logged in successfully!");

            if (onLoginSuccess) {
                onLoginSuccess();
            }

            navigate("/home", { state: { profile: response.data } });
        } catch (error) {
            let errorMsg = "An error occurred.";
            if (error.response) {
                if (error.response.status === 500) errorMsg = "Internal Server Error";
                else if (error.response.status === 401) errorMsg = "Wrong password";
                else if (error.response.status === 404) errorMsg = "Username not found";
                else errorMsg = error.response.data?.message || error.message;
            }
            alert(errorMsg);
            console.log(error.message);
        }
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