import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import configureStore from "./hooks-store/products";

const root = ReactDOM.createRoot(document.getElementById("root"));

configureStore();

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
