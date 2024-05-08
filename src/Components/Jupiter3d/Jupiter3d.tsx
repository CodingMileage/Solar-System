import React, { useState, useEffect } from "react";
import "./Jupiter3d.css";

const apiUrl = "https://api.le-systeme-solaire.net/rest/bodies/jupiter";

const Jupiter3d = () => {
  const [data, setData] = useState({});
  const [moons, setMoons] = useState(0);
  const [days, setDays] = useState(0);

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
        setMoons(result.moons.length);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="jCard">
        <h1>{data.englishName}</h1>
        <div className="jupiter">
          <div className="jMoon"></div>
        </div>
        <p>
          While Jupiter is eleven times the diameter of earth, it's gravity is
          only 2.4 times that of earths gravity!
        </p>
        <p>Jupiter has {moons} moons and you might have thought that Jupiter wins the most moons contest, but it doesn't!</p>
        <p>It takes about {Math.round(days)} earth days to orbit the sun!</p>
      </div>
    </>
  );
};

export default Jupiter3d;
