import React from "react";
import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

type Aircraft = {
  name: string;
  id: number;
};

const Backend: React.FC = () => {
  const [objects, setObjects] = useState<Aircraft[]>([]);
  const [aircrafts, setAircrafts] = useState<string[]>([]);
  const [backendString, setBackendString] = useState<string>("");
  const [basicPost, setBasicPost] = useState<string>("");
  const [basicInput, setBasicInput] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [registration, setRegistration] = useState<string>("");

  const getData = async () => {
    // This is a clearer way of doing the below. The second axios call here
    // is a shortcut.
    // const resp = await axios.get<string>(`http://localhost:3001/users`);
    // const ourString = resp.data;
    // setData(ourString);

    // We also have access to other fields of the response.
    const { data, status, statusText } = await axios.get<string>(
      `http://localhost:3001/users`
    );
    setBackendString(data);
  };

  const getAircrafts = async () => {
    // We get an object that looks like {data:}
    const { data } = await axios.get<string[]>(
      `http://localhost:3001/aircrafts`
    );
    setAircrafts(data);
  };

  const getObjects = async () => {
    // We get an object that looks like {data:}
    const { data } = await axios.get<Aircraft[]>(
      `http://localhost:3001/aircrafts/objects`
    );
    setObjects(data);
  };

  const postRequestBasic = async () => {
    // We get an object that looks like {data:}
    const { data } = await axios.post<string>(
      `http://localhost:3001/aircrafts/test`,
      { id: basicInput } // this is the request body
    );
    setBasicPost(data);
  };

  const postAircraft = async () => {
    // We get an object that looks like {data:}
    const { data } = await axios.post<Aircraft[]>(
      `http://localhost:3001/aircrafts`,
      { id: id, name: name, registration: registration } // this is the request body
    );
    setObjects(data);
  };

  useEffect(() => {
    getData();
    getAircrafts();
    getObjects();
  }, []);

  return (
    <Container className="text-center h6">
      <Row className="my-3">
        <Col>{backendString}</Col>
      </Row>

      <Row>
        <Col>
          {aircrafts.map((aircraft, index) => {
            return <div key={index}>{aircraft}</div>;
          })}
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          {objects.map((object, index) => {
            return (
              <>
                {" "}
                <div key={index}>{object.name}</div>
                <div key={index}>{object.id}</div>{" "}
              </>
            );
          })}
        </Col>
      </Row>
      <Row className="my-3">
        <Col>{basicPost}</Col>
      </Row>
      <Row>
        <Col>
          <input type="text" onChange={(e) => setBasicInput(e.target.value)} />
          <button onClick={() => postRequestBasic()}>post</button>
        </Col>
      </Row>
      <Row>
        <Col>
          {/*Ternary operator: condition ? what to do if true : what to do if false
        Basically equivalent to:
        if(condition) {
          what to do if true
        } else {
          what to do if false
        }
        */}
          {parseInt(basicInput) >= 7
            ? "greater than or equal to 7"
            : "less than 7"}
        </Col>
      </Row>
      <Row>
        <Col>
          {/*Ternary operator: condition ? what to do if true : what to do if false
        Basically equivalent to:
        if(condition) {
          what to do if true
        } else {
          what to do if false
        }
        */}
          {parseInt(basicInput) >= 7 ? (
            <div>
              <button>winner</button>
            </div>
          ) : (
            <div>:(</div>
          )}
        </Col>
      </Row>

      <Row>
        <Col>
          <input type="text" onChange={(e) => setId(e.target.value)} />
        </Col>
      </Row>
      <Row>
        <Col>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </Col>
      </Row>
      <Row>
        <Col>
          <input
            type="text"
            onChange={(e) => setRegistration(e.target.value)}
          />
          <button onClick={() => postAircraft()}>insert aircraft</button>
        </Col>
      </Row>
    </Container>
  );
};

export default Backend;
