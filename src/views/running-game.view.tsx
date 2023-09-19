import React, { useCallback, useState } from "react";
import { useParams } from "react-router-dom";

import { Button, Box, Snackbar, Alert } from "@mui/material";
import { styled } from "@mui/material/styles";

import { useRunningGame } from "../hooks/use-running-game.hook";
import { PlayerName } from "../components/player-names";
import { useAddPlayer } from "../hooks/use-add-player.hook";
import Grid from "@mui/material/Unstable_Grid2";
import { PlayerChip } from "../components/player-chips";
import { GameTitle, SmallGameTitle } from "../components/game-title";
import { BoardGrid } from "../components/board-grid";

const StyledDiv = styled("div")({
  marginTop: 30,
});

const StyledSpinner = styled("img")(({ theme }) => ({
  animation: "circles@2x infinite 700ms linear",
  transformBox: "fill-box",

  "@keyframes circles@2x": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
}));

export default function RunningGameView() {
  const { gameId } = useParams();
  const [theGame, isP1] = useRunningGame(gameId!);
  const [player2, setPlayer2] = useState("");
  //  const [newGame, isLoading, createGame] = useNewGame();
  const [openAlertEmptyName, setOpenAlertEmptyName] = useState(false);
  const [openAlertShortName, setOpenAlertShortName] = useState(false);
  const [openAlertLongName, setOpenAlertLongName] = useState(false);

  const [, isUpdating, addPlayer] = useAddPlayer(gameId);

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
      </StyledDiv>
    );
  }

  if (theGame.players.length < 2 && isP1) {
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
              <StyledSpinner
                style={{ width: "20%" }}
                src={"/circles@2x.png"}
                sx={{
                  animation: "spin 8s linear infinite",
                  "@keyframes spin": {
                    "0%": {
                      transform: "rotate(0deg)",
                    },
                    "100%": {
                      transform: "rotate(360deg)",
                    },
                  },
                }}
              />
              <h2>WAITING FOR PLAYER 2</h2>
              <Button variant="contained" color="success">
                COPY INVITE LINK
              </Button>
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

  return (
    <StyledDiv>
      <SmallGameTitle />
      <BoardGrid game={theGame} />
    </StyledDiv>
  );
}
