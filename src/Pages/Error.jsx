import React from "react";
import { useNavigate } from "react-router-dom";
import "./page_styles/error.css";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="error-container">
      <div className="go-back-div">
        <button id="go-back-btn" onClick={() => navigate(-1)}>
          <img
            id="arrow-go-back"
            src="./../../images/go-back.svg"
            alt="Go back?"
          />
        </button>{" "}
        <h4> Go back? </h4>
      </div>
      <h1 id="not-found"> The page you requested does not exist!</h1>
    </div>
  );
};

export default Error;
