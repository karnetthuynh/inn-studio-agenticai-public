import "./index.scss";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/Karnett-Huynh/inn-studio-gmf-briefing">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
