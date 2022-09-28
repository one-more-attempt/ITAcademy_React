import logo from "./logo.svg";
import "./App.css";
import RainbowFrame from "./components/RainbowFrame/RainbowFrame";
const colorArray = ["orange", "blue", "green", "red", "skyblue"];
const text = `RAINBOW BOOM!`;
function App() {
  return <RainbowFrame text={text} colors={colorArray} />;
}

export default App;
