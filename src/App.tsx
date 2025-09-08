import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Rockets from "./pages/Rockets";
import RocketDetail from "./pages/RocketDetail";
import Launches from "./pages/Launches";
import History from "./pages/History";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/rockets/:id" element={<RocketDetail />} />
          <Route path="/launches" element={<Launches />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
