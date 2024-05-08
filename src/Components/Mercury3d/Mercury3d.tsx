import React, { useState, useEffect } from "react";
import "./Mercury3d.css";

const apiUrl = "https://api.le-systeme-solaire.net/rest/bodies/mercury";

const Mercury3d = () => {
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
      <div className="mCard">
        <h1>{data.englishName}</h1>
        <div className="mercury">{/* <div className="mercMoon"></div> */}</div>
        <p>
          While this is the closest planet to the sun, it is <b>NOT </b>
          the hotest!
        </p>
        <p>Mercury has {moons} moons!</p>
      </div>
    </>
  );
};

export default Mercury3d;
