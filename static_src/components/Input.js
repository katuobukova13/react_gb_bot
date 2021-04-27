import React, { useState, useRef, useCallback } from "react";
import "../styles/style.css";
import { Button, Form, Col } from "react-bootstrap";
import { AUTHORS } from "../utils/constants";

const Input = ({ addYourMessage }) => {
  const [value, setValue] = useState("");
  const textArea = useRef(null);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (value !== "") {
        addYourMessage({ text: value, author: AUTHORS.ME });
        setValue("");
      }
    },
    [addYourMessage, value, focus]
  );

  const focus = useCallback(() => textArea.current?.focus(), []);

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row className="align-items-center">
        <Col sm={8} className="my-1">
          <Form.Label htmlFor="inlineFormInputName" srOnly>
            YourMessage
          </Form.Label>
          <Form.Control
            id="inlineFormInputName"
            placeholder="Сообщение..."
            ref={textArea}
            value={value}
            onChange={handleChange}
          />
        </Col>
        <Col sm={4} className="my-1">
          <Button
            type="submit"
            onClick={focus}
            style={{ backgroundColor: "#343a40", opacity: "0.9" }}
          >
            Отправить
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
};

export default Input;
