import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { useState, useEffect } from "react";
import momPhoto from "./assets/mom.jpg";
import Header from "./Header";

// creates type for data of User
type User = {
  name: string;
  email: string;
  phone: string;
  role: string;
  active: string;
  balance: string;
  lastflight: string;
  lastlogin: string;
  created: string;
};

function Profile() {
  const [query, setQuery] = useState("");
  const [showMenu, setShowMenu] = useState(true);
  const [showDocuments, setShowDocuments] = useState(false);
  const [showEndorsements, setShowEndorsements] = useState(false);
  const [showCourseEnrollment, setShowCourseEnrollment] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  // Creates data and properties for currentUser
  const [currentUser, setCurrentUser] = useState<User>({
    name: "",
    email: "",
    phone: "",
    role: "",
    active: "",
    balance: "",
    lastflight: "",
    lastlogin: "",
    created: "",
  });

  useEffect(() => {
    // creating the variable user
    const user: User = {
      name: "tyler",
      email: "tylerWoodby",
      phone: "666666",
      role: "Instructor",
      active: "Yes",
      balance: "$420.00",
      lastflight: "Aug 20, 2022",
      lastlogin: "Today at 4:22 PM",
      created: "Mar 9, 2021",
    };
    // Insert FAKE DATA into local storage
    localStorage.setItem("user", JSON.stringify(user));

    // Retrieve FAKE DATA from local storage.
    const currentUserObjectString = localStorage.getItem("user");
    if (currentUserObjectString) {
      const currentUser: User = JSON.parse(currentUserObjectString);
      setCurrentUser(currentUser);
    }

    // TODO: Actually get the data from API.
  }, [setCurrentUser]);

  console.log("are we looping?");

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
      <Header />
      <Row>
        <Col lg={5}>
          <Image fluid roundedCircle src={momPhoto} width="250" />
        </Col>

        <Col>
          <Row>
            
              <Col className="m-1">
                <Dropdown>
                  <Dropdown.Toggle variant="info" id="dropdown-basic">
                    Account Settings
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col className="m-1">
                <label>search</label>
                <input type="text" onChange={(e) => setQuery(e.target.value)} />
              </Col>
            
          </Row>
        </Col>
      </Row>

      <Row
        style={{
          backgroundColor: "#E0E0E0",
        }}
      >
        <Container className={showMenu ? "" : "d-none"}>
          <Row>
            <Col>
              <p className="m-1">Name: {currentUser.name}</p>
              <p className="m-1">Phone: {currentUser.phone}</p>
              <p className="m-1">Username: {currentUser.email}</p>
              <p className="m-1">Role: {currentUser.role}</p>
              <p className="m-1">Active: {currentUser.active}</p>
              <p className="m-1">Balance: {currentUser.balance}</p>
              <p className="m-1">Last Flight: {currentUser.lastflight}</p>
              <p className="m-1">Last Login: {currentUser.lastlogin}</p>
              <p className="m-1">Created {currentUser.created}</p>
            </Col>

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
              </div>{" "}
              <div className="d-grid gap-2">
                <Button
                  onClick={() => endorsementsClick()}
                  variant="secondary"
                  size="lg"
                >
                  Endorsements
                </Button>
              </div>
              <div className="d-grid gap-2">
                <Button
                  onClick={() => courseenrollmentClick()}
                  variant="secondary"
                  size="lg"
                >
                  Course Enrollments
                </Button>
              </div>{" "}
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
      </Row>

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

export default Profile;
