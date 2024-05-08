import React, { useState, useEffect } from "react";
import "./Saturn3d.css";

const apiUrl = "https://api.le-systeme-solaire.net/rest/bodies/saturn";

const Saturn3d = () => {
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
