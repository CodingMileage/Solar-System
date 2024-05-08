import React, {useState, useEffect} from 'react'

const apiU = "https://api.le-systeme-solaire.net/rest/bodies/";

const api = () => {
    const [planet, setPlanet] = useState("")
  const [data, setData] = useState({});
  const [moons, setMoons] = useState(0);
  const [days, setDays] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await fetch(apiU);
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
    
  )
}

export default api