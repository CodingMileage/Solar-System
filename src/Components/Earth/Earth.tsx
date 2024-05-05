import React from "react";
import "../Cards.css";
import earth from "../../assets/Earth.png";

const Earth = () => {
  return (
    <div className="card">
      <div className="earth">
        <h1 className="planet">Earth</h1>
        <img className="image" src={earth} alt="Earth"></img>
        <h3>The third planet in the solar system</h3>
      </div>
    </div>
  );
};

export default Earth;

// import React from "react";
// import "../Cards.css";
// import earth from "../../assets/Earth.png";

// const Earth = () => {
//   return (
//     <div className="card">
//       <div className="sun"></div>
//       <div className="earth">
//         <div className="moon"></div>
//       </div>
//       {/* <h3>The third planet in the solar system</h3> */}
//     </div>
//   );
// };

// export default Earth;
