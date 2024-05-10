import React, { useState, useEffect } from "react";
import "./Earth3d.css";

const apiUrl =
  "https://api.le-systeme-solaire.net/rest/bodies/?filter=id,eq,earth";

const Earth3d = () => {
  const [data, setData] = useState({});
  const [moons, setMoons] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        setData(result);
        setMoons(result.moons.length);
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
          <li className="earthTemp">Temperature: {15} C</li>
          <li className="earthMass">
            Mass: {5.97} X 10^{24}
          </li>
          <li className="earthEV">Escape Velocity: {11176} m/s</li>
          <li className="earthMoon">Moons: {1}</li>
          <li className="earthDays">Sideral Days: {365}</li>
        </ul>
      </div>

      <div className="eCard">
        <h1>Earth</h1>
        <div className="earth">
          <div className="eMoon"></div>
        </div>
        <p>Home!</p>
      </div>
    </>
  );
};

export default Earth3d;
