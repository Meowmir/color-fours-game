import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "@mui/material";
import "./App.css";
import { Player1Chips, Player2Chips } from "./player-chips";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
