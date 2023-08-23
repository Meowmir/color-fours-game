import React from "react";
import logo from "./logo.svg";
import { Container } from "@mui/material";

import "./App.css";
import { PlayerNames } from "./player-names";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Container>
          <PlayerNames />
        </Container>
      </header>
    </div>
  );
}

export default App;
