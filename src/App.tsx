import React from "react";
import logo from "./logo.svg";
import { Button } from "@mui/material";
import { Route, BrowserRouter, Routes, useNavigate } from "react-router-dom";

import "./App.css";
import NewGame from "./pages/new-game";
import { gameSocket, SocketContext } from "./game-socket";


import Container from "@mui/material/Grid";

import "./App.css";
import { GameTitle } from "./game-title";
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "@mui/material";
import "./App.css";
import { Player1Chips, Player2Chips } from "./player-chips";
import { Container } from "@mui/material";

import "./App.css";
import { PlayerNames } from "./player-names";
import { BoardGrid } from "./board-grid";

function App() {
  return (
    <SocketContext.Provider value={gameSocket}>
      <BrowserRouter>
    <div className="App">
      <Routes>
            <Route index element={<Splash />} />
            <Route path="/new-game" element={<NewGame />} />
          </Routes>
      <Container>
        <Grid container spacing={0}>
          <Grid xs={3}>
            <Player1Chips />
          </Grid>
          <Grid xs={6}>
            <img src={logo} className="App-logo" alt="logo" />
          </Grid>
          <Grid xs={3}>
            <Player2Chips />
          </Grid>
        </Grid>
      </Container>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Container>
          <GameTitle />
        </Container>
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
      </BrowserRouter>
    </SocketContext.Provider>
  );
}
  
  function Splash() {
  const navigate = useNavigate();

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Button onClick={() => navigate("/new-game")} variant="contained">
        ?
      </Button>
    </header>
    )}

export default App;
