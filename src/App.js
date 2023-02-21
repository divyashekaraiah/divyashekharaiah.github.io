import SearchApp from "./SearchApp";
import "./App.css";
import TopBar from "./components/TopBar";
import Javascript from "./components/Javascript";
import Kannada from "./components/Kannada";
import Arts from "./components/Arts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="container">
      <h3 style={{ color: "red" }}>Challenge 1</h3>
      <SearchApp />
      <h3 style={{ color: "red" }}>Challenge 2</h3>

      <BrowserRouter>
        <TopBar />

        <Routes>
          <Route exact path="/" element={<Javascript />} />
          <Route path="/kannada" element={<Kannada />} />
          <Route path="/art" element={<Arts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
