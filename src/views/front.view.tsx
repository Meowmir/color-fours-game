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
import {
  EmptyNameAlert,
  LongNameAlert,
  ShortNameAlert,
} from "../snackbar-alerts";

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
  const noAlerts = false;

  const handleClick = () => {
    if (noAlerts) {
      createGame(player1);
    }
  };
  /*
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

   */

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
      <EmptyNameAlert player1={player1} noAlerts={noAlerts} />
      <ShortNameAlert player1={player1} noAlerts={noAlerts} />
      <LongNameAlert player1={player1} noAlerts={noAlerts} />
    </>
  );
}
