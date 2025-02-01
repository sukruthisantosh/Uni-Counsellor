import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Intermediate = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const nextPage = queryParams.get("next") === "additional-questions" ? "/additional-questions" : "/questions";

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Intermediate Page</h1>
            <p>You have successfully logged in!</p>

            <div style={{ marginTop: "20px" }}>
                <button 
                    style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }} 
                    onClick={() => navigate(nextPage)}
                >
                    Go to Questionnaire
                </button>

                <button 
                    style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }} 
                    onClick={() => navigate("/myUnis")}
                >
                    Go to My Unis
                </button>
            </div>
        </div>
    );
};

export default Intermediate;
