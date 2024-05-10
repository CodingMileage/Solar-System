import React, { useEffect, useState } from "react";
import "./Mars3d.css";

const apiUrl = "https://api.le-systeme-solaire.net/rest/bodies/mars";

const Mars3d = () => {
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
          <li className="marsTemp">Temperature: {temp - 273} C</li>
          <li className="marsMass">
            Mass: {mass} X 10^{massE}
          </li>
          <li className="marsEV">Escape Velocity: {escape} m/s</li>
          <li className="marsMoons">Moons: {moons}</li>
          <li className="marsDays">Sideral Days: {Math.round(days)}</li>
        </ul>
      </div>

      <div className="mCard">
        <h1>{data.englishName}</h1>
        <div className="mars">
          <div className="marsMoon"></div>
          <div className="marsMoon2"></div>
        </div>
        <p>Mars has {moons} moons!</p>
      </div>
    </>
  );
};

export default Mars3d;
