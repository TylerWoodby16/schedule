import React from "react";
import "./App.css";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";

type AirplaneProps = {
  image: string;
  name: string;
};

const Airplane: React.FC<AirplaneProps> = ({ image, name }) => {
  return (
    <>
      <Image src={image} width={300} className="m-3" />
      {name}
    </>
  );
};

export default Airplane;
