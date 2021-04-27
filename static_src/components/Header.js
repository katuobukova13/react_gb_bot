import React from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useSelector, useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { profileName } from "../store/profile/profileSelector";

function Header() {
  const name = useSelector(profileName);
  const isMobile = useMediaQuery({ query: "(min-width: 650px)" });

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>GB REACT</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
          <Link to="/chats" className="nav-link">
            Chats
          </Link>
        </Nav>
        {isMobile && (
          <span
            className="username"
            style={{
              color: "#fff",
            }}
          >
            User: {name}
          </span>
        )}
      </Navbar>
    </>
  );
}

export default Header;
