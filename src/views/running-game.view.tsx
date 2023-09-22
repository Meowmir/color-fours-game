import React, { useCallback, useState } from "react";
import { useParams } from "react-router-dom";

import { Button, Box, Snackbar, Alert, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";

import { useRunningGame } from "../hooks/use-running-game.hook";
import { useAddPlayer } from "../hooks/use-add-player.hook";
import { useCopyToClipboard } from "../hooks/use-copy-to-clipboard.hook";

import { PlayerName } from "../components/input-player-names";
import { GameTitle, SmallGameTitle } from "../components/displays/game-title";
import { BoardGrid } from "../components/gameboard/board-grid";
import {
  darkerGreenColor,
  darkerOrangeColor,
  greenColor,
  orangeColor,
} from "../constants";
import { GameOverText } from "../components/displays/game-over-text";
import { Chip } from "../components/chip";
import { InviteP2View } from "./invite-P2.view";
import {
  EmptyNameAlert,
  LongNameAlert,
  ShortNameAlert,
} from "../snackbar-alerts";

const StyledDiv = styled("div")({
  marginTop: 30,
});

const StyledAddP2Button = styled(Button)<ButtonProps>((theme) => ({
  color: "black",
  backgroundColor: orangeColor,
  "&:hover": {
    backgroundColor: darkerOrangeColor,
  },
}));

export default function RunningGameView() {
  const { gameId } = useParams();
  const [theGame, isP1] = useRunningGame(gameId!);
  const [player2, setPlayer2] = useState("");
  //  const [newGame, isLoading, createGame] = useNewGame();
  /*
  const [openAlertEmptyName, setOpenAlertEmptyName] = useState(false);
  const [openAlertShortName, setOpenAlertShortName] = useState(false);
  const [openAlertLongName, setOpenAlertLongName] = useState(false);

     */

  const [, isUpdating, addPlayer] = useAddPlayer(gameId);

  const noAlerts = false;

  const handleClick = useCallback(() => {
    if (noAlerts) {
      addPlayer(player2);
    }
  }, [addPlayer, player2]);

  /*
  const handleClick = useCallback(() => {
    if (player2 === "") {
      setOpenAlertEmptyName(true);
      setTimeout(() => {
        setOpenAlertEmptyName(false);
      }, 3000);
      return;
    }
    if (player2 !== "" && player2.length < 3) {
      setOpenAlertShortName(true);
      setTimeout(() => {
        setOpenAlertShortName(false);
      }, 3000);
      return;
    }
    if (player2 !== "" && player2.length > 10) {
      setOpenAlertLongName(true);
      setTimeout(() => {
        setOpenAlertLongName(false);
      }, 3000);
    } else {
      addPlayer(player2);
    }
  }, [addPlayer, player2]);

 */

  if (!theGame) {
    return <p>LOADING</p>;
  }

  if (isUpdating) {
    return <p>UPDATING</p>;
  }

  if (theGame.players.length < 2 && !isP1) {
    return (
      <StyledDiv>
        <p style={{ opacity: 0.5 }}>Created by Nora Disewji</p>
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

        <PlayerName color="warning" label="Player 2" onChange={setPlayer2} />
        <br />
        <StyledAddP2Button
          variant="contained"
          color="warning"
          onClick={handleClick}
        >
          ADD PLAYER 2
        </StyledAddP2Button>
        <EmptyNameAlert player2={player2} noAlerts={noAlerts} />
        <ShortNameAlert player2={player2} noAlerts={noAlerts} />
        <LongNameAlert player2={player2} noAlerts={noAlerts} />
      </StyledDiv>
    );
  }

  if (theGame.players.length < 2 && isP1) {
    return <InviteP2View />;
  }

  if (theGame.state === "GAME_OVER") {
    return (
      <StyledDiv>
        <SmallGameTitle />
        <BoardGrid game={theGame} />
        <GameOverText />
      </StyledDiv>
    );
  }

  return (
    <StyledDiv>
      <SmallGameTitle />
      <BoardGrid game={theGame} isP1={isP1} />
    </StyledDiv>
  );
}
