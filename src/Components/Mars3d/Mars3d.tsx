import React, { useEffect, useState } from "react";
import "./Mars3d.css";

const apiUrl = "https://api.le-systeme-solaire.net/rest/bodies/mars";

const Mars3d = () => {
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
