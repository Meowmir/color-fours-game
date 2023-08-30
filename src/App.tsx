import React from "react";
import logo from "./logo.svg";
import { Container } from "@mui/material";

import "./App.css";
import { PlayerNames } from "./player-names";
import { BoardGrid } from "./board-grid";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Container>
          <PlayerNames />
        </Container>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <BoardGrid></BoardGrid>
      </header>
    </div>
  );
}

export default App;
