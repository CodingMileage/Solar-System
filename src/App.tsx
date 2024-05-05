import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Mercury from "./Components/Mercury/Mercury";
import Venus from "./Components/Venus/Venus";
import Earth from "./Components/Earth/Earth";
import Mars from "./Components/Mars/Mars";
import Orbit from "./Components/Orbit/Orbit";
import Orbit3d from "./Components/Orbit/Orbit3d";
import Earth3d from "./Components/Earth3d/Earth3d";
import Mercury3d from "./Components/Mercury3d/Mercury3d";
import Mars3d from "./Components/Mars3d/Mars3d";
import Jupiter3d from "./Components/Jupiter3d/Jupiter3d";
import Saturn3d from "./Components/Saturn3d/Saturn3d";
import Uranas3d from "./Components/Uranas3d/Uranas3d";
import Neptune3d from "./Components/Nuptune3d/Neptune3d";

function App() {
  return (
    <div className="plane">
      <NavBar />
      {/* <Mercury /> */}
      {/* <Venus /> */}
      {/* <Earth /> */}
      {/* <Mars /> */}
      {/* <Jupiter /> */}
      {/* <Orbit /> */}
      <Mercury3d />
      <Orbit3d />
      <Earth3d />
      <Mars3d />
      <Jupiter3d />
      <Saturn3d />
      <Uranas3d />
      <Neptune3d />
    </div>
  );
}

export default App;
