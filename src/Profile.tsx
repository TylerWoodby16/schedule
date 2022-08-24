import React, { useState } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function Profile() {
  const [state, setState] = useState("");
  return (
    <Container>
      <Row>
        <Col className="h1" >Profile</Col>
      </Row>
      <Row>
        <Col lg={3} style={{
        backgroundColor: '#E0E0E0'}}>Picture $$</Col>
        <Col>
          <Row>
            <Col className="h3">Michael Brown</Col>
          </Row>
          <Row>
            <Col>949-848-4984</Col>
          </Row>
          <Row>
            <Col>tylerwoodby16@gmail.com</Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col>$69.00</Col>
      </Row>
      <Row>
        <Col>Private Pilot</Col>
      </Row>
    </Container>
  );
}

export default Profile;
