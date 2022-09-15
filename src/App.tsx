import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import { Routes, Route, Link } from "react-router-dom";
import Maintenance from "./Maintenance";
import Profile from "./Profile";
import Schedule from "./Schedule";
import Aircraft from "./Aircraft";
import Footer from "./Footer";
import Signup from "./Signup";
import Login from "./Login";
import Landing from "./Landing";
import ForgotPassword from "./ForgotPassword";
import Backend from "./Backend";



function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/maintenance/:aircraftId" element={<Aircraft />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/backend" element={<Backend />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/" element={<Landing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
