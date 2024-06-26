import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Orbit3d from "./Components/Orbit/Orbit3d";
import Earth3d from "./Components/Earth3d/Earth3d";
import Mercury3d from "./Components/Mercury3d/Mercury3d";
import Venus3d from "./Components/Venus3d/Venus3d";
import Mars3d from "./Components/Mars3d/Mars3d";
import Jupiter3d from "./Components/Jupiter3d/Jupiter3d";
import Saturn3d from "./Components/Saturn3d/Saturn3d";
import Uranus3d from "./Components/Uranus3d/Uranus3d";
import Neptune3d from "./Components/Nuptune3d/Neptune3d";
import Ring from "./Components/Ring/Ring";
import ScrollBar from "./Components/ScrollBar/ScrollBar";
import Sun from "./Components/Sun/Sun";

function App() {
  return (
    <div className="back">
      <div className="plane">
        {/* <ScrollBar /> */}
        <NavBar />
        <Sun />
        {/* <Orbit /> */}

        <div className="mercDiv">
          <Mercury3d />
        </div>

        <div className="venusDiv">
          <Venus3d />
        </div>

        <div className="earthDiv">
          <Earth3d />
        </div>

        <div className="marsDiv">
          <Mars3d />
        </div>

        <div className="jDiv">
          <Jupiter3d />
        </div>

        <div className="satDiv">
          <Saturn3d />
        </div>

        <div className="uDiv">
          <Uranus3d />
        </div>

        <div className="nDiv">
          <Neptune3d />
        </div>

        {/* <Ring /> */}
      </div>
    </div>
  );
}

export default App;
