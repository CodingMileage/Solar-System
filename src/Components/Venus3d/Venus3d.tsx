import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import "./Venus3d.css";
const apiUrl = "https://api.le-systeme-solaire.net/rest/bodies/venus";

const Venus3d = () => {
  const [data, setData] = useState({});
  const [moons, setMoons] = useState(0);
  const [days, setDays] = useState(0.0);
  const [mass, setMass] = useState(0);
  const [massE, setMassE] = useState(0);
  const [vol, setVol] = useState(0);
  const [volE, setVolE] = useState(0);
  const [escape, setEscape] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        setData(result);
        setDays(result.sideralOrbit);
        console.log(result.sideralOrbit);

        setMass(result.mass.massValue);
        setMassE(result.mass.massExponent);

        setVol(result.vol.volValue);
        setVolE(result.vol.volExponent);

        setEscape(result.escape);

        setMoons(result.moons.length);
        setDays(result.sideralOrbit);
        console.log(result.sideralOrbit);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="card">
        <p>
          Volume: {vol}X 10^{volE} KG
        </p>
        <p>
          Escape Velocity: {escape} m/s or {escape * 2.237} mph
        </p>
      </div>
      <div className="vCard">
        <h1>{data.englishName}</h1>
        <div className="venus">{/* <div className="vMoon"></div> */}</div>
        <p>The hotest planet in the solar system!</p>
        <p>Venus has {moons} moons!</p>
        <p>
          It takes about {Math.round(days)} earth days to orbit the sun once!
        </p>
        <p>
          It's mass is {mass} X 10^{massE} KG
        </p>
      </div>
    </>
  );
};

export default Venus3d;
