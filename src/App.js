import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/header";
import { Home } from "./pages/home/home";
import { Link } from "react-router-dom";
import { Apple } from "./pages/apple/apple";
import { Lime } from "./pages/lime/lime";
import { Lychee } from "./pages/lychee/lychee";
import { Appricot } from "./pages/appricot/appricot";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/apple" element={<Apple />} />
        <Route path="/lime" element={<Lime />} />
        <Route path="/lychee" element={<Lychee />} />
        <Route path="/appricot" element={<Appricot />} />
      </Routes>
    </Router>
  );
}

export default App;
