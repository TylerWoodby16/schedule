import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import momPhoto from "./assets/mom.jpg";

function ProfileCopy() {
  const [query, setQuery] = useState("");
  const [showMenu, setShowMenu] = useState(true);
  const [showDocuments, setShowDocuments] = useState(false);
  const [showEndorsements, setShowEndorsements] = useState(false);
  const [showCourseEnrollment, setShowCourseEnrollment] = useState(false);
  const [showNotes, setShowNotes] = useState(false)

  const documentClick = () => {
    setShowMenu(false);
    setShowDocuments(true);
  };

  const endorsementsClick = () => {
    setShowMenu(false);
    setShowEndorsements(true);
  };

  const courseenrollmentClick = () => {
    setShowMenu(false);
    setShowCourseEnrollment(true);
  };
  
  const notesClick = () => {
    setShowMenu(false);
    setShowNotes(true);
  };

  const backClick = () => {
    setShowMenu(true);
    setShowDocuments(false);
    setShowEndorsements(false);
    setShowCourseEnrollment(false);
    setShowNotes(false);
  };

  return (
    <Container>
      <Row>
        <Col className="h1">Profile</Col>
        <Col className="m-1">
          <Dropdown>
            <Dropdown.Toggle variant="info" id="dropdown-basic">
              Account Settings
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col className="m-1">
          <label>search</label>
          <input type="text" onChange={(e) => setQuery(e.target.value)} />
        </Col>
      </Row>

      <Row
        style={{
          backgroundColor: "#E0E0E0",
        }}
      >
        <Col lg={5}>
          {/* <img className="photo" src="mom.jpg" alt="Picture"></img> */}
          <Image src={momPhoto} width="100" />
        </Col>

        <Col>
          <Row>
            <Col>
              <p className="m-1">Name: Tyler Woodby</p>
              <p className="m-1">Phone: 2055852111</p>
              <p className="m-1">Username: tylerwoodby16</p>
              <p className="m-1">Email: tylerwoodby16@gmail.com</p>
              <p className="m-1">Role: Instructor</p>
              <p className="m-1">Active: yes</p>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col>
              <p className="m-1">Balance: $420.00</p>
              <p className="m-1">Last Flight: Aug 20, 2022</p>
              <p className="m-1">Last Login: Today at 4:22 PM</p>
              <p className="m-1">Created Mar 9, 2021</p>
            </Col>
          </Row>
        </Col>
      </Row>

      <Container className={showMenu ? "" : "d-none"}>
        <Row>
          <Col>
            {" "}
            <div className="d-grid gap-2">
              <Button
                onClick={() => documentClick()}
                variant="secondary"
                size="lg"
              >
                Documents
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <div className="d-grid gap-2">
              <Button
                onClick={() => endorsementsClick()}
                variant="secondary"
                size="lg"
              >
                Endorsements
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="d-grid gap-2">
            <Button
                onClick={() => courseenrollmentClick()}
                variant="secondary"
                size="lg"
              >
                Endorsements
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <div className="d-grid gap-2">
            <Button
                onClick={() => notesClick()}
                variant="secondary"
                size="lg"
              >
                Notes
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className={showDocuments ? "" : "d-none"}>
        <Row>
          <Col>
            <Button onClick={() => backClick()} variant="secondary" size="lg">
              Back
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>DOCUMENTS DISPLAYED HERE</Col>
        </Row>
      </Container>

      <Container className={showEndorsements ? "" : "d-none"}>
        <Row>
          <Col>
            <Button onClick={() => backClick()} variant="secondary" size="lg">
              Back
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>ENDORSEMENTS DISPLAYED HERE</Col>
        </Row>
      </Container>
      <Container className={showCourseEnrollment ? "" : "d-none"}>
        <Row>
          <Col>
            <Button onClick={() => backClick()} variant="secondary" size="lg">
              Back
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>Course Enrollments DISPLAYED HERE</Col>
        </Row>
      </Container>
      <Container className={showNotes ? "" : "d-none"}>
        <Row>
          <Col>
            <Button onClick={() => backClick()} variant="secondary" size="lg">
              Back
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>Notes DISPLAYED HERE</Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProfileCopy;
