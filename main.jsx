import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"; // Add this line to import Bootstrap
import "./index.css";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
