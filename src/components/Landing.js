import React from "react";
import HomeImg from "../Images/vegetables-img.jpg";
import "../css/Landing.css";
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="home-img">
        <img src={HomeImg} alt="vegetables" />
      </div>
      <div className="body-text">
        <h2>What were about:</h2>
        <h3>
          We empower women-led small and medium-sized<br></br> enterprises to trade to
          legally, safely, <br></br>and profitably across Africa.{" "}
        </h3>
      </div>
      <Link to="/login" className="button-hm">
        Login
      </Link>

      <Link to="/signup" className="button-hm">
        Create Account
      </Link>
      <Link to="/shop" className="button-hm">
        View Listings
      </Link>

    </div>
  );
};

export default Landing;
