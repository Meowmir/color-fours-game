import React from "react";
import logo from "./logo.svg";
import { TextField, Container } from "@mui/material";

import "./App.css";
import { PlayerNames } from "./player-names";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Container>
          <TextField
            margin="normal"
            id="outlined-basic"
            label="Player 1"
            color="secondary"
            variant="outlined"
          />
          <br />
          <TextField
            margin="normal"
            id="outlined-basic"
            label="Player 2"
            color="warning"
            variant="outlined"
          />
        </Container>
      </header>
    </div>
  );
}

export default App;
