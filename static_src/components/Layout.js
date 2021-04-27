import React, { useCallback, useState, useEffect, useRef } from "react";
import "../styles/style.css";
import { useParams } from "react-router-dom";
import MessageFields from "./MessageField";
import ChatLists from "./ChatLists";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector, useDispatch } from "react-redux";
import { messageBotMiddleware } from "../store/messages/messagesActions";
import { messagesSelector } from "../store/messages/messagesSelector";
import MediaQuery from "react-responsive";

const Layout = () => {
  const { chatId } = useParams();
  const messages = useSelector(messagesSelector);

  const dispatch = useDispatch();

  const addNewMessage = useCallback(
    (newMessage) => {
      dispatch(
        messageBotMiddleware(chatId, {
          ...newMessage,
          id: `${chatId}-${(messages[chatId]?.length || 0) + 1}`,
        })
      );
    },
    [chatId, dispatch, messages]
  );

  return (
    <Container fluid>
      <Row>
        <Col sm={8}>
          <MessageFields
            messages={messages[chatId]}
            addYourMessage={addNewMessage}
          />
        </Col>
        <Col sm={4}>
          <MediaQuery minWidth={650}>
            <ChatLists />
          </MediaQuery>
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;

const PureApp = React.memo(Layout);
