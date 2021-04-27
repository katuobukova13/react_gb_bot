import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Header from "./Header";
import Layout from "./Layout";
import Profile from "./Profile";
import Home from "./Home";
import ChatLists from "./ChatLists";
import "bootstrap/dist/css/bootstrap.min.css";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/chats/:chatId">
          <Layout />
        </Route>
        <Route path="/chats/">
          <ChatLists />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
