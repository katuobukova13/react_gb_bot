import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { store, persistor } from "./store/index";

import Router from "./components/Router";

import { PersistGate } from "redux-persist/integration/react";

import "regenerator-runtime/runtime.js";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
