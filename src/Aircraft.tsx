import React from "react";
import "./App.css";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Aircraft: React.FC = () => {
  const {aircraftId} = useParams();

  return (
    <>
      {aircraftId}
    </>
  );
};

export default Aircraft;
