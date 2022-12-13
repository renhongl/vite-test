import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import UnauthApps from "./routes/UnauthApps";

function App() {
  return (
    <BrowserRouter>
      <UnauthApps />
    </BrowserRouter>
  );
}

export default App;
