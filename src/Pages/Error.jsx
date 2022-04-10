import { useNavigate } from "react-router-dom";
import "./page_styles/error.css";
import goBack from "./../images/go-back.svg";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="error-container">
      <div className="go-back-div">
        <button id="go-back-btn" onClick={() => navigate(-1)}>
          <img id="arrow-go-back" src={goBack} alt="Go back?" />
        </button>{" "}
        <h4 className="go-back-h4"> Back </h4>
      </div>
      <section className="not-found">
        <div className="sad-dog-container">
          <div className="sad-dog"></div>
        </div>
        <section className="heading-container">
          <h4 id="heading"> The page you requested does not exist!</h4>
          <h4 id="error-h4"> ERROR 404 - NOT FOUND</h4>
        </section>
      </section>
    </div>
  );
};

export default Error;
