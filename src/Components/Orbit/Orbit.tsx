import React from "react";
import "./Orbit.css";

const Orbit = () => {
  return (
    <div id="cirle-orbit-container">
      <div id="inner-orbit">
        <div className="inner-orbit-circles"></div>
      </div>

      <div id="middle-orbit">
        <div className="middle-orbit-circles"></div>
      </div>

      <div id="outer-orbit">
        <div className="outer-orbit-circles"></div>
      </div>
    </div>
  );
};

export default Orbit;
