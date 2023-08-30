import Grid from "@mui/material/Unstable_Grid2";
import { Player1Chips, Player2Chips } from "../components/player-chips";
import { GameTitle } from "../components/game-title";
import { Container } from "@mui/material";
import React from "react";

export default function FrontPage() {
  return (
    <Container>
      <Grid container spacing={0}>
        <Grid xs={2}>
          <Player1Chips />
        </Grid>
        <Grid xs={8}>
          <GameTitle />
        </Grid>
        <Grid xs={2}>
          <Player2Chips />
        </Grid>
      </Grid>
    </Container>
  );
}
