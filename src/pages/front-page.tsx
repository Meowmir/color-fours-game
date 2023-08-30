import Grid from "@mui/material/Unstable_Grid2";
import { Player1Chips, Player2Chips } from "../components/player-chips";
import { GameTitle } from "../components/game-title";
import { Button, Container } from "@mui/material";
import React, { useEffect } from "react";
import { Player1Name } from "../components/player-names";
import { useNewGame } from "../game-socket";
import { useNavigate } from "react-router-dom";

export default function FrontPage() {
  const navigate = useNavigate();
  const player1 = "";
  const [newGame, player, isLoading, createGame] = useNewGame();

  useEffect(() => {
    if (!newGame) return;

    navigate(`/running-game/${newGame.gameId}`);
  }, [navigate, newGame]);

  return (
    <>
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
      <Player1Name></Player1Name>
      <br />
      <Button variant="contained" onClick={() => createGame(player1)}>
        NEW GAME
      </Button>
    </>
  );
}
