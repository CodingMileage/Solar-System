import React from "react";
import "../Cards.css";
import mars from "../../assets/Mars.png";

const Mars = () => {
  return (
    <div className="card">
      <div className="mars">
        <h1 className="planet">Mars</h1>
        <img className="image" src={mars} alt="Mars"></img>
        <h3>The fourth planet in the solar system</h3>
      </div>
    </div>
  );
};

export default Mars;
