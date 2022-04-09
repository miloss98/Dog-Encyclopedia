import React from "react";
import "./page_styles/about.css";

const About = () => {
  return (
    <section className="about-container">
      <div className="about-div">
        <section className="about-section">
          <h2 className="heading"> About the application</h2>
          <p className="info">
            {" "}
            The application lets users to search their favorite, or any other
            dog breed and see the detailed info about them. Some of many things
            you can find out are, weight, height and the lifespan of the breed.{" "}
          </p>
        </section>
      </div>
      <div className="about-div">
        <section className="about-section">
          <h2 className="heading"> About the project</h2>
          <p className="info">
            {" "}
            This is a project for my thesis. The goal is to make functional,
            user friendly and simple application. The application fetchs free
            dog API, which contains lots of informations, for thousands of
            different dog breeds. Application is made in React.js, with some
            external libraries and npm packages.{" "}
          </p>
        </section>
      </div>
    </section>
  );
};

export default About;
