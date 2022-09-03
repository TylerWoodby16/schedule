import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function NavBar() {
  const location = useLocation();

  // If our path == "/", hide all Nav.Links except for Login
  // TODO: Hide other links when on signup and login.

  return (
    <>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/schedule">
              Flight-Schedule
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/schedule" className={location.pathname != "/" ? "" : "d-none"}>
                  Schedule
                </Nav.Link>
                <Nav.Link as={Link} to="/profile" className={location.pathname != "/"  ? "" : "d-none"}>
                  Profile
                </Nav.Link>
                <Nav.Link as={Link} to="/maintenance" className={location.pathname != "/" && location.pathname != "/signup" ? "" : "d-none"}>
                  Maintenance
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Signup
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  );
}

export default NavBar;
