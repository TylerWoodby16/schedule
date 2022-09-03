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
      <Container>
        <Col>
          <Row className="mb-1">
            <Button variant="outline-secondary">
              <Col xxl={1} xl={2} lg={4} md={6} sm={8} xs={10}>
                <Airplane image={cessnaPhoto} name="Cessna" />
              </Col>
            </Button>
          </Row>
          <Row className="mb-1">
            <Col xxl={1} xl={2} lg={4} md={6} sm={8} xs={10}>
              <Airplane image={archerPhoto} name="archer" />
            </Col>
          </Row>
          <Row className="mb-1">
            <Col xxl={1} xl={2} lg={4} md={6} sm={8} xs={10}>
              <Airplane image={seminolePhoto} name="seminole" />
            </Col>
          </Row>
        </Col>
      </Container>
    </>
  );
}

export default Maintenance;
