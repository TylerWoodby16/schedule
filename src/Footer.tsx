import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <Container className="text-center h6">
      <Row className="my-3">
        <Col>Copyright Tyler Woodby 2022</Col>
      </Row>
    </Container>
  );
}

export default Footer;
