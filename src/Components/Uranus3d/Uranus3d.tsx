import React, { useState, useEffect } from "react";
import "./Uranus3d.css";

const apiUrl = "https://api.le-systeme-solaire.net/rest/bodies/uranus";

const Uranus3d = () => {
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
      <div className="uCard">
        <h1>{data.englishName}</h1>
        <div className="uranus">
          <div className="uMoon"></div>
        </div>
        <p>Uranus has {moons} moons!</p>
      </div>
    </>
  );
};

export default Uranus3d;