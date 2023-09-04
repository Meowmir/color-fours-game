import React from "react";
import { useParams } from "react-router-dom";

import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

import { BoardGrid } from "../components/board-grid";
import { PlayerChips } from "../components/player-chips";
import { useRunningGame } from "../hooks/use-running-game.hook";

const StyledDiv = styled("div")({
  marginTop: 30,
});

export default function RunningGameView() {
  const { gameId } = useParams();
  const [theGame, isLoading] = useRunningGame(gameId!);

  console.log(theGame);

  return (
    <StyledDiv>
      <Container>
        <Grid container spacing={0}>
          <Grid xs={2}>
            <PlayerChips />
          </Grid>
          <Grid xs={8}>
            <BoardGrid />
          </Grid>
          <Grid xs={2}>
            <PlayerChips fill />
          </Grid>
        </Grid>
      </Container>
    </StyledDiv>
  );
}
