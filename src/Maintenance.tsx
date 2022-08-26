import React from "react";
import "./App.css";
import Image from "react-bootstrap/Image";
import cessnaPhoto from "./assets/Cessna_172S.jpg";
import archerPhoto from "./assets/piperArcher.jpg";
import seminolePhoto from "./assets/seminole.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Airplane from "./AircraftThumb";

function Maintenance() {
  
  
  return (
    <>
      <Airplane image={cessnaPhoto} name="Cessna" />

      <Airplane image={archerPhoto} name="archer"/>

      <Airplane image={seminolePhoto} name="seminole"/>
    </>
  );
}

export default Maintenance;
