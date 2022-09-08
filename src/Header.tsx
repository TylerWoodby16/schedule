import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function Header() {
  return (
    <Container>
      <Row className="text-center">
        <Col>
          <h1 style={{ textAlign: "center" }}>Profile</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
