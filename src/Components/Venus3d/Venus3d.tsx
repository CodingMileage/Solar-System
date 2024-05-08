import React, { useState, useEffect } from "react";
import "./Venus3d.css";
const apiUrl = "https://api.le-systeme-solaire.net/rest/bodies/venus";

const Venus3d = () => {
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
    <div className="vCard">
      <h1>{data.englishName}</h1>
      <div className="venus">{/* <div className="vMoon"></div> */}</div>
      <p>The hotest planet in the solar system!</p>
      <p>Venus has {moons} moons!</p>
    </div>
  );
};

export default Venus3d;
