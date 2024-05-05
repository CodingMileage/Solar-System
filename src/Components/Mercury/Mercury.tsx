import React from "react";
import "../Cards.css";
import mercury from "../../assets/Mercury.png";

const Mercury = () => {
  return (
    <div className="card">
      <div className="mercury">
        <h1 className="planet">Mercury</h1>
        <img className="image" src={mercury} alt="Mercury"></img>
        <h3>The first planet in the solar system</h3>
        <p>
          Although this is the closest planet to the sun, it's not the hotest!
        </p>
      </div>
    </div>
  );
};

export default Mercury;
