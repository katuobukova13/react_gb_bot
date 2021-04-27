import React, { useState, useRef, useCallback } from "react";
import { Button, Form, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { changeName } from "../store/profile/profileActions";
import { profileName } from "../store/profile/profileSelector";

const Profile = () => {
  const [name, setName] = useState("");
  const defaultName = useSelector(profileName);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    dispatch(changeName(name));
    setName("");
  };

  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Hello there, {defaultName}!
      </h2>
      <Form onSubmit={handleSubmit} style={{ margin: "0 auto" }}>
        <Form.Row className="align-items-center">
          <Col sm={2} className="my-1">
            <Form.Label htmlFor="inlineFormInputName" srOnly>
              YourMessage
            </Form.Label>
            <Form.Control
              id="inlineFormInputName"
              type="text"
              value={name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </Col>
          <Col sm={2} className="my-1">
            <Button
              type="submit"
              onClick={handleClick}
              style={{
                backgroundColor: "#343a40",
                opacity: "0.9",
              }}
            >
              Change name
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </>
  );
};

export default Profile;
