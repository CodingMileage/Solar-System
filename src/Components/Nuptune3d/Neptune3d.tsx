import React, { useState, useEffect } from "react";
import "./Neptune3d.css";

const apiUrl = "https://api.le-systeme-solaire.net/rest/bodies/Neptune";

const Neptune3d = () => {
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
      <div className="nCard">
        <h1>{data.englishName}</h1>
        <div className="neptune">
          <div className="nMoon"></div>
        </div>
        <p>Neptune has {moons} moons!</p>
      </div>
    </>
  );
};

export default Neptune3d;
