import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, Container } from "@mui/material";

import { PlayerChips } from "../components/player-chips";
import { GameTitle } from "../components/game-title";
import { Player1Name } from "../components/player-names";
import { useNewGame } from "../hooks/use-new-game.hook";

export default function FrontView() {
  const navigate = useNavigate();
  const [player1, setPlayer1] = useState("");
  const [newGame, isLoading, createGame] = useNewGame();

  useEffect(() => {
    if (!newGame) return;

    navigate(`/running-game/${newGame.gameId}`);
  }, [navigate, newGame]);

  return (
    <>
      <Container>
        <Grid container spacing={0}>
          <Grid xs={2}>
            <PlayerChips />
          </Grid>
          <Grid xs={8}>
            <GameTitle />
          </Grid>
          <Grid xs={2}>
            <PlayerChips fill />
          </Grid>
        </Grid>
      </Container>
      <Player1Name onChange={setPlayer1} />
      <br />
      <Button variant="contained" onClick={() => createGame(player1)}>
        NEW GAME
      </Button>
    </>
  );
}
