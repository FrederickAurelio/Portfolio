import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TextLanguage } from "./context/TextContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TextLanguage>
      <App />
    </TextLanguage>
  </React.StrictMode>,
);
