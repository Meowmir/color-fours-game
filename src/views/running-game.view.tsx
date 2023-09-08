import React, { useCallback, useState } from "react";
import { useParams } from "react-router-dom";

import { Button, Modal, Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

import { BoardGrid } from "../components/board-grid";
import { useRunningGame } from "../hooks/use-running-game.hook";
import { PlayerName } from "../components/player-names";
import { useAddPlayer } from "../hooks/use-add-player.hook";
import Grid from "@mui/material/Unstable_Grid2";
import { PlayerChip } from "../components/player-chips";
import { GameTitle } from "../components/game-title";

const StyledDiv = styled("div")({
  marginTop: 30,
});

const styledBox = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "background.paper",
  border: "2px solid #000",
  borderRadius: 4,
  boxShadow: 24,
  padding: 4,
};

export default function RunningGameView() {
  const { gameId } = useParams();
  const [theGame, isP1, isLoading] = useRunningGame(gameId!);
  const [player2, setPlayer2] = useState("");
  //  const [newGame, isLoading, createGame] = useNewGame();
  const [openAlertEmptyName, setOpenAlertEmptyName] = useState(false);
  const [openAlertShortName, setOpenAlertShortName] = useState(false);
  const [updatedGame, isUpdating, addPlayer] = useAddPlayer(gameId);
  const handleClick = useCallback(() => {
    if (player2 === "") {
      setOpenAlertEmptyName(true);
      setTimeout(() => {
        setOpenAlertEmptyName(false);
      }, 3000);
    }
    if (player2 !== "" && player2.length < 3) {
      setOpenAlertShortName(true);
      setTimeout(() => {
        setOpenAlertShortName(false);
      }, 3000);
    } else {
      addPlayer(player2);
    }
  }, [addPlayer, player2]);

  if (!theGame) {
    return <p>LOADING</p>;
  }

  if (isUpdating) {
    return <p>UPDATING</p>;
  }

  if (theGame.players.length < 2 && !isP1) {
    return (
      <StyledDiv>
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

        <PlayerName color="warning" label="Player 2" onChange={setPlayer2} />
        <br />
        <Button variant="contained" color="warning" onClick={handleClick}>
          ADD PLAYER 2
        </Button>
      </StyledDiv>
    );
  }

  return (
    <StyledDiv>
      <Grid container spacing={0}>
        <Grid xs={2}>
          <PlayerChip readOnly color="blue" />
          <PlayerChip readOnly color="green" />
          <PlayerChip readOnly color="orange" />
          <PlayerChip readOnly color="pink" />
        </Grid>
        <Grid xs={8}>
          <Box>
            <img alt="" style={{ width: "50%" }} src="/circles@2x.png" />
          </Box>
        </Grid>
        <Grid xs={2}>
          <PlayerChip readOnly fill color="blue" />
          <PlayerChip readOnly fill color="green" />
          <PlayerChip readOnly fill color="orange" />
          <PlayerChip readOnly fill color="pink" />
        </Grid>
      </Grid>
    </StyledDiv>
  );
}
