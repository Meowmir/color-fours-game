import React, { useCallback, useState } from "react";
import { useParams } from "react-router-dom";

import { Alert, Button, Snackbar } from "@mui/material";
import { styled } from "@mui/material/styles";

import { BoardGrid } from "../components/board-grid";
import { useRunningGame } from "../hooks/use-running-game.hook";
import { PlayerName } from "../components/player-names";
import { useAddPlayer } from "../hooks/use-add-player.hook";

const StyledDiv = styled("div")({
  marginTop: 30,
});

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
        <PlayerName color="warning" label="Player 2" onChange={setPlayer2} />
        <Button variant="contained" onClick={handleClick}>
          ADD PLAYER 2
        </Button>
      </StyledDiv>
    );
  }

  return (
    <StyledDiv>
      <PlayerName color="warning" label="Player 2" onChange={setPlayer2} />

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
      <BoardGrid game={theGame} />
    </StyledDiv>
  );
}
