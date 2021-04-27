import React, { useState, useEffect, useCallback } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Button, Form, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { addChat, removeChats } from "../store/chats/chatsActions";
import { useSelector, useDispatch } from "react-redux";

function ChatLists(props) {
  const [newChat, setNewChat] = useState("");
  const chats = useSelector((state) => state.chats.chats);
  const dispatch = useDispatch();

  const addNewChat = () => {
    if (newChat !== "") {
      dispatch(addChat(newChat));
      setNewChat("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setNewChat(e.target.value);
  };

  const removeChat = (key) => {
    dispatch(removeChats(key));
  };

  return (
    <>
      <ListGroup>
        {chats.map((chat) => (
          <ListGroup.Item
            key={chat.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Link
              to={`/chats/${chat.id}`}
              className={
                chat.unreadMessage ? "animate__animated animate__flash" : ""
              }
            >
              {chat.name}
            </Link>
            <button onClick={() => removeChat(`${chat.id}`)}>&times;</button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Form onSubmit={handleSubmit}>
        <Form.Row className="align-items-center">
          <Col sm={8} className="my-1">
            <Form.Control
              id="inlineFormInputName"
              type="text"
              value={newChat}
              onChange={handleChange}
              placeholder="New chat..."
            />
          </Col>
          <Col sm={4} className="my-1">
            <Button
              type="submit"
              onClick={addNewChat}
              style={{
                backgroundColor: "#343a40",
                opacity: "0.9",
              }}
            >
              Аdd chat
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </>
  );
}

export default ChatLists;
