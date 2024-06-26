import { Link } from "react-router-dom";

// bootstrap import
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

// internal imports
import { useTheme } from "../../contexts/ThemeContext";
import "./customNavbar.css";
import logo from "/assets/images/logo.webp";

const CustomNavbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary navbar">
        <Container>
          <div className="flex-spacer">
            <Navbar.Brand className="brand-name" as={Link} to="/">
              {/* replace with logo here */}
              <img
                src={logo}
                className="logo-img"
                alt="Logo image of i-woman"
              ></img>
            </Navbar.Brand>
          </div>

          <div className="navbar-links">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto links-container">
                <Nav.Link
                  as={Link}
                  to="/"
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active" : "")
                  }
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/about"
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active" : "")
                  }
                >
                  About
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="groups"
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active" : "")
                  }
                >
                  Groups
                </Nav.Link>

                <NavDropdown
                  title={<FontAwesomeIcon icon={faUser} />}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.2">
                    View Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Settings
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Sign Out
                  </NavDropdown.Item>
                </NavDropdown>
                {/* toggle button for light/dark theme */}
                <BootstrapSwitchButton
                  className="toggle-theme-btn"
                  size="sm"
                  checked={theme === "light"}
                  onlabel={
                    <FontAwesomeIcon
                      icon={faSun}
                      style={{ fontSize: "27px" }}
                    />
                  }
                  offlabel={
                    <FontAwesomeIcon
                      icon={faMoon}
                      style={{ fontSize: "27px" }}
                    />
                  }
                  onChange={() => {
                    toggleTheme();
                  }}
                />
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
