import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import { Routes, Route, Link } from "react-router-dom";
import Maintenance from "./Maintenance";
import Profile from "./Profile";
import Schedule from "./Schedule";
import Aircraft from "./Aircraft";
import Footer from "./Footer";


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/maintenance/:aircraftId" element={<Aircraft />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
