import React, { useState, useEffect } from "react";
import "./Saturn3d.css";

const apiUrl = "https://api.le-systeme-solaire.net/rest/bodies/saturn";

const Saturn3d = () => {
  const [data, setData] = useState({});
  const [moons, setMoons] = useState(0);
  const [days, setDays] = useState(0.0);
  const [mass, setMass] = useState(0);
  const [massE, setMassE] = useState(0);
  const [vol, setVol] = useState(0);
  const [volE, setVolE] = useState(0);
  const [escape, setEscape] = useState(0);
  const [temp, setTemp] = useState(0);

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

        setTemp(result.avgTemp);

        setMoons(result.moons.length);
        setDays(result.sideralOrbit);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <h2>Comparison Amongst The Cosmos</h2>
        <ul>
          <li className="satTemp">Temperature: {temp - 273} C</li>
          <li className="satMass">
            Mass: {mass} X 10^{massE}
          </li>
          <li className="satEV">Escape Velocity: {escape} m/s</li>
          <li className="satMoon">Moons: {moons}</li>
          <li className="satDays">Sideral Days: {Math.round(days)}</li>
        </ul>
      </div>

      <div className="sCard">
        <h1>{data.englishName}</h1>
        <div className="saturn">
          <div className="sMoon"></div>
        </div>
        <p>Saturn has {moons} moons!</p>
      </div>
    </>
  );
};

export default Saturn3d;
