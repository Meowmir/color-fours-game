import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import { Alert, Button, ButtonProps, Container, Snackbar } from "@mui/material";

import { GameTitle } from "../components/displays/game-title";
import { PlayerName } from "../components/input-player-names";
import { useNewGame } from "../hooks/use-new-game.hook";
import { styled } from "@mui/material/styles";
import { darkerPinkColor, pinkColor } from "../constants";
import { Chip } from "../components/chip";
import LinksModal from "../components/links-modal";

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
      <p style={{ opacity: 0.5, paddingBottom: 20 }}>
        <LinksModal />
      </p>
      <Container style={{ marginTop: 10 }}>
        <Grid container spacing={0}>
          <Grid xs={2}>
            <Chip color="blue" />
            <Chip color="green" />
            <Chip color="orange" />
            <Chip color="pink" />
          </Grid>
          <Grid xs={8}>
            <GameTitle />
          </Grid>
          <Grid xs={2}>
            <Chip fill color="blue" />
            <Chip fill color="green" />
            <Chip fill color="orange" />
            <Chip fill color="pink" />
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
