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
import Header from "./Header";

function Maintenance() {
  return (
    <>
      <Header />
      <Container>
        <Row className="m-1">
          <Col xxl={1} xl={2} lg={1} md={6} sm={8} xs={10} className="m-1">
            {/* <Button className="m-5" variant="outline-secondary"> */}
              <Airplane image={cessnaPhoto} name="Cessna" />
            {/* </Button> */}
          </Col>
        
          <Col xxl={1} xl={2} lg={3} md={6} sm={8} xs={10} className="m-1">
            {/* <Button className="m-5" variant="outline-secondary"> */}
              <Airplane image={archerPhoto} name="archer" />
            {/* </Button> */}
          </Col>
        </Row>
        <Row className="mb-1">
          <Col xxl={1} xl={2} lg={4} md={6} sm={8} xs={10}>
            <Airplane image={seminolePhoto} name="seminole" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Maintenance;
