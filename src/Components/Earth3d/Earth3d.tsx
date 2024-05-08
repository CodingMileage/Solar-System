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
