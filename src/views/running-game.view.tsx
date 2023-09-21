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

const StyledInviteButton = styled(Button)<ButtonProps>((theme) => ({
  color: "black",
  backgroundColor: greenColor,
  "&:hover": {
    backgroundColor: darkerGreenColor,
  },
}));

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
  const [openAlertEmptyName, setOpenAlertEmptyName] = useState(false);
  const [openAlertShortName, setOpenAlertShortName] = useState(false);
  const [openAlertLongName, setOpenAlertLongName] = useState(false);
  const [buttonText, setButtonText] = useState("COPY INVITE LINK");

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

  const currentUrl = window.location.href;
  const copy = useCopyToClipboard();

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
            <Chip color="blue" />
            <Chip color="green" />
            <Chip color="orange" />
            <Chip color="pink" />
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
              <StyledInviteButton
                variant="contained"
                onClick={() => {
                  copy(currentUrl);
                  setButtonText("LINK COPIED");
                }}
              >
                {buttonText}
              </StyledInviteButton>
            </Box>
          </Grid>
          <Grid xs={2}>
            <Chip fill color="blue" />
            <Chip fill color="green" />
            <Chip fill color="orange" />
            <Chip fill color="pink" />
          </Grid>
        </Grid>
      </StyledDiv>
    );
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
      <BoardGrid game={theGame} />
    </StyledDiv>
  );
}
