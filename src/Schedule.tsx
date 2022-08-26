import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import schedulePhoto from "./assets/scheduleScreenShot.jpg"

function Schedule() {
  return (
    <Container>
      <Row className="text-center">
        <Col lg={3}>
          <Image src={schedulePhoto} width="1000" />
        </Col>
      </Row>
    </Container>
  );
}

export default Schedule;
