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
import { useState, useEffect } from "react";
import Airplane from "./AircraftThumb";
import Header from "./Header";
import axios from "axios";

const MaintenanceBackend: React.FC = () => {
  const [example, setExample] = useState<string>('');

  const getExample = async () => {
    // We get an object that looks like {data:}
    const { data } = await axios.get<string>(
      `http://localhost:3001/aircraftsOther`
    );
    setExample(data);
  };

  useEffect(() => {
    getExample();
    //  console.log(data);
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            {example}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MaintenanceBackend;
