import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Intermediate = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const responseData = location.state?.responseData || "No data received";

  alert(responseData)

  const queryParams = new URLSearchParams(location.search);
  const nextPage =
    queryParams.get("next") === "additional-questions"
      ? "/additional-questions"
      : "/questions";

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4 text-center" style={{ width: "28rem" }}>
        <h1 className="fw-bold mb-3">Welcome!</h1>
        <p className="text-muted fs-5">You have successfully logged in.</p>

        <div className="d-grid gap-3 mt-4">
          <button className="btn btn-primary btn-lg" onClick={() => navigate(nextPage)}>
            Go to Questionnaire
          </button>

          <button className="btn btn-primary btn-lg" onClick={() => navigate("/myUnis", { state: { responseData } })}>
            Go to My Results
          </button>

          <button className="btn btn-primary btn-lg" onClick={() => navigate("/uniWishList", { state: { responseData } })}>
            Go to My Uni Wish List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intermediate;