import React from "react";
import logo from "./logo.svg";
import Container from "@mui/material/Grid";

import "./App.css";
import { GameTitle } from "./game-title";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Container>
          <GameTitle />
        </Container>
      </header>
    </div>
  );
}

export default App;
