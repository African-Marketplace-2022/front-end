import React from "react";
import HomeImg from '../Images/vegetables-img.jpg';
import "../css/Landing.css";


const Landing = () => {





  
  return <div>
    
    <div className="home-img">
      <img src={HomeImg} alt="vegetables" />
      </div>
      <div className="body-text">
      <h2>What were about:</h2>
      <h3>We empower women-led small and medium-sized enterprises to trade to legally, safely, and profitably across Africa. </h3>
    </div>
    <button id="landing-login" >Login To Start!</button>
  </div>;
};

export default Landing;
