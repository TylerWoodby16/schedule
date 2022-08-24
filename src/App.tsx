import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import { Routes, Route, Link } from "react-router-dom";
import Maintenance from "./Maintenance";
import Profile from "./Profile";
import Schedule from "./Schedule";
import Footer from "./Footer";
import ProfileCopy from "./ProfileCopy";
import NavBarCopy from "./NavBarCopy";

function App() {
  return (
    <div>
      {/* <NavBar /> */}
      <NavBarCopy />
      <Routes>
        <Route path="schedule" element={<Schedule />} />
        <Route path="maintenance" element={<Maintenance />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profilecopy" element={<ProfileCopy />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
