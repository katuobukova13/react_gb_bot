import React from "react";
import Input from "./Input";
import "../styles/style.css";
import { AUTHORS } from "../utils/constants";

const MessageFields = ({ messages, addYourMessage }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#e2e2e2",
          padding: "20px",
          width: "100%",
          minHeight: "calc(100vh - 110px)",
          overflowY: "scroll",
        }}
      >
        {messages?.map((message) => (
          <div
            style={{
              alignSelf: message.author === "bot" ? "flex-end" : "flex-start",
              backgroundColor: "#343a40",
              opacity: "0.9",
              padding: "5px 15px",
              borderRadius: "20px",
              fontSize: "18px",
              margin: "5px",
              color: "white",
            }}
            key={message.id}
          >
            {message.author}: {message.text}
          </div>
        ))}
      </div>
      <Input addYourMessage={addYourMessage} />
    </>
  );
};

export default MessageFields;
