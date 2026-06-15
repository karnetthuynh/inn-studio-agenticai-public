import "./index.scss";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";

const basename = import.meta.env.MODE === 'production'
  ? (import.meta.env.VITE_BASE_PATH || '/inn-studio-agenticai-public/')
  : '/';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
