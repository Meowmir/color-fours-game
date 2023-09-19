import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import { Alert, Button, ButtonProps, Container, Snackbar } from "@mui/material";

import { PlayerChip } from "../components/player-chips";
import { GameTitle } from "../components/game-title";
import { PlayerName } from "../components/player-names";
import { useNewGame } from "../hooks/use-new-game.hook";
import { styled } from "@mui/material/styles";
import { darkerPinkColor, pinkColor } from "../constants";

const StyledNewGameButton = styled(Button)<ButtonProps>((theme) => ({
  color: "white",
  backgroundColor: pinkColor,
  "&:hover": {
    backgroundColor: darkerPinkColor,
  },
}));

export default function FrontView() {
  const navigate = useNavigate();
  const [player1, setPlayer1] = useState("");
  const [newGame, isLoading, createGame] = useNewGame();
  const [openAlertEmptyName, setOpenAlertEmptyName] = React.useState(false);
  const [openAlertShortName, setOpenAlertShortName] = React.useState(false);
  const [openAlertLongName, setOpenAlertLongName] = React.useState(false);

  const handleClick = () => {
    if (player1 === "") {
      setOpenAlertEmptyName(true);
      setTimeout(() => {
        setOpenAlertEmptyName(false);
      }, 3000);
    }
    if (player1 !== "" && player1.length < 3) {
      setOpenAlertShortName(true);
      setTimeout(() => {
        setOpenAlertShortName(false);
      }, 3000);
    }
    if (player1 !== "" && player1.length > 10) {
      setOpenAlertLongName(true);
      setTimeout(() => {
        setOpenAlertLongName(false);
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
      <p style={{ opacity: 0.5 }}>Created by Nora Disewji</p>
      <Container style={{ marginTop: 10 }}>
        <Grid container spacing={0}>
          <Grid xs={2}>
            <PlayerChip readOnly color="blue" />
            <PlayerChip readOnly color="green" />
            <PlayerChip readOnly color="orange" />
            <PlayerChip readOnly color="pink" />
          </Grid>
          <Grid xs={8}>
            <GameTitle />
          </Grid>
          <Grid xs={2}>
            <PlayerChip readOnly fill color="blue" />
            <PlayerChip readOnly fill color="green" />
            <PlayerChip readOnly fill color="orange" />
            <PlayerChip readOnly fill color="pink" />
          </Grid>
        </Grid>
      </Container>
      <PlayerName label="Player 1" color="secondary" onChange={setPlayer1} />
      <br />
      <StyledNewGameButton
        variant="contained"
        color="secondary"
        onClick={handleClick}
      >
        CREATE NEW GAME
      </StyledNewGameButton>
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
      <Snackbar
        open={openAlertLongName}
        onClose={() => setOpenAlertShortName(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="error" sx={{ width: "100%" }}>
          Player name can't be more than 10 characters.
        </Alert>
      </Snackbar>
    </>
  );
}
