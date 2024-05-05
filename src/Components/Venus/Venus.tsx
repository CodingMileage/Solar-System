import React from "react";
import "../Cards.css";
import venus from "../../assets/Venus.png";

const Venus = () => {
  return (
    <div className="card">
      <div className="venus">
        <h1 className="planet">Venus</h1>
        <img className="image" src={venus} alt="Mercury"></img>
        <h3>The second planet in the solar system</h3>
        <p>Venus is actually the hotest planet due to its atmosphere!</p>
      </div>
    </div>
  );
};

export default Venus;
