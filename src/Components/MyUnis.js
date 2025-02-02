import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios"; // Import axios
import "bootstrap/dist/css/bootstrap.min.css";

const MyUnis = () => {
  const location = useLocation();
  let responseData = location.state?.responseData || {};

  console.log("Received responseData:", responseData);

  // Ensure responseData is an object, not a stringified JSON
  if (typeof responseData === "string") {
    try {
      responseData = JSON.parse(responseData);
    } catch (error) {
      console.error("Error parsing responseData:", error);
      responseData = {};
    }
  }

  const universities = responseData.universities || [];

  // Function to handle button click and send data to the API
  const handleLearnMoreClick = async (uni) => {
    const apiUrl = `127.0.0.2:8080/?${queryParams}`; // Replace with your actual API endpoint
    
    try {
      const requestData = {
        "name": 'wha',
        "university": uni.name,
        // You can add any additional information you need to send
      };
      
      const response = await axios.put(apiUrl, requestData);
      console.log("Data successfully sent:", response.data);
      alert("University info sent successfully!");
    } catch (error) {
      console.error("Error sending data:", error);
      alert("There was an error sending the university data.");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4" style={{ color: "#6D4C41" }}>🎓 My Universities</h1>
      
      {universities.length > 0 ? (
        <div className="row">
          {universities.map((uni, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 shadow border-0" style={{ backgroundColor: "#F5F5DC" }}>
                <div className="card-body">
                  <h5 className="card-title fw-bold" style={{ color: "#8B5E3C" }}>{uni.name}</h5>
                  <p className="card-text text-dark">{uni.description}</p>
                </div>
                <div className="card-footer bg-transparent text-end">
                  <button 
                    className="btn btn-sm" 
                    style={{ backgroundColor: "#8B5E3C", color: "white" }}
                    onClick={() => handleLearnMoreClick(uni)} // Add onClick handler here
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted fs-5">No university data available.</p>
      )}
    </div>
  );
};

export default MyUnis;
