import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import { Alert, Button, Container, Snackbar } from "@mui/material";

import { PlayerBlueChip } from "../components/player-chips";
import { GameTitle } from "../components/game-title";
import { Player1Name } from "../components/player-names";
import { useNewGame } from "../hooks/use-new-game.hook";

export default function FrontView() {
  const navigate = useNavigate();
  const [player1, setPlayer1] = useState("");
  const [newGame, isLoading, createGame] = useNewGame();
  const [openAlertEmptyName, setOpenAlertEmptyName] = React.useState(false);
  const [openAlertShortName, setOpenAlertShortName] = React.useState(false);

  const handleClick = () => {
    if (player1 === "") {
      setOpenAlertEmptyName(true);
      setTimeout(() => {
        setOpenAlertEmptyName(false);
      }, 3000);
    }
    if (player1 != "" && player1.length < 3) {
      setOpenAlertShortName(true);
      setTimeout(() => {
        setOpenAlertShortName(false);
      }, 3000);
    } else {
      createGame(player1);
    }
  };

  useEffect(() => {
    if (!newGame) return;

    navigate(`/running-game/${newGame.gameId}`);
  }, [navigate, newGame]);

  return (
    <>
      <Container>
        <Grid container spacing={0}>
          <Grid xs={2}>
            <PlayerBlueChip color="red" />
          </Grid>
          <Grid xs={8}>
            <GameTitle />
          </Grid>
          <Grid xs={2}>
            <PlayerBlueChip fill color="red" />
          </Grid>
        </Grid>
      </Container>
      <Player1Name onChange={setPlayer1} />
      <br />
      <Button variant="contained" onClick={handleClick}>
        NEW GAME
      </Button>
      <Snackbar
        open={openAlertEmptyName}
        onClose={() => setOpenAlertEmptyName(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="error" sx={{ width: "100%" }}>
          Player name can't be empty.
        </Alert>
      </Snackbar>
      <Snackbar
        open={openAlertShortName}
        onClose={() => setOpenAlertShortName(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="error" sx={{ width: "100%" }}>
          Player name can't be less than 3 characters.
        </Alert>
      </Snackbar>
    </>
  );
}
