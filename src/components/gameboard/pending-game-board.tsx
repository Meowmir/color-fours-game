import LinksModal from "../links-modal";
import Grid from "@mui/material/Unstable_Grid2";
import { Chip } from "../chip";
import { GameTitle } from "../displays/game-title";
import { PlayerName } from "../input-player-names";
import { Alert, Box, Button, ButtonProps, Snackbar } from "@mui/material";
import React, { useCallback, useState } from "react";
import { Game } from "../../my-types";
import { useAddPlayer } from "../../hooks/use-add-player.hook";
import { useCopyToClipboard } from "../../hooks/use-copy-to-clipboard.hook";
import { styled } from "@mui/material/styles";
import {
  darkerGreenColor,
  darkerOrangeColor,
  greenColor,
  orangeColor,
} from "../../constants";

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

export function PendingGameBoard({
  theGame,
  isP1,
}: {
  theGame: Game;
  isP1: boolean;
}) {
  const [player2, setPlayer2] = useState("");
  const [currentAlert, setCurrentAlert] = useState<string | null>(null);
  const [buttonText, setButtonText] = useState("COPY INVITE LINK");
  const [, isUpdating, addPlayer] = useAddPlayer(theGame.gameId);
  const setTimedAlert = useCallback(
    (alert: string | null) => {
      setCurrentAlert(alert);
      setTimeout(() => {
        setCurrentAlert(null);
      }, 3000);
    },
    [setCurrentAlert],
  );

  const handleClick = useCallback(() => {
    if (player2 === "") {
      setTimedAlert("Player name can't be empty.");
      return;
    }
    if (player2 !== "" && player2.length < 3) {
      setTimedAlert("Player name can't be less than 3 characters.");
      return;
    }
    if (player2 !== "" && player2.length > 10) {
      setTimedAlert("Player name can't be more than 10 characters.");
      return;
    }
    addPlayer(player2);
  }, [addPlayer, player2]);

  const copy = useCopyToClipboard();

  if (isUpdating) {
    return <p style={{ opacity: 0.5, marginTop: "auto", paddingTop: 20 }}>UPDATING</p>;
  }

  return (
    <>
      <p style={{ opacity: 0.5, paddingBottom: 20, marginTop: "auto" }}>
        <LinksModal />
      </p>
      <Grid container spacing={0}>
        <Grid xs={2}>
          <Chip color="blue" />
          <Chip color="green" />
          <Chip color="orange" />
          <Chip color="pink" />
        </Grid>
        <Grid xs={8}>
          {isP1 ? (
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
                  setButtonText("LINK COPIED");
                  copy(window.location.href);
                }}
              >
                {buttonText}
              </StyledInviteButton>
            </Box>
          ) : (
            <GameTitle />
          )}
        </Grid>
        <Grid xs={2}>
          <Chip fill color="blue" />
          <Chip fill color="green" />
          <Chip fill color="orange" />
          <Chip fill color="pink" />
        </Grid>
      </Grid>
      {!isP1 ? (
        <>
          <PlayerName color="warning" label="Player 2" onChange={setPlayer2} />
          <br />
          <StyledAddP2Button
            variant="contained"
            color="warning"
            onClick={handleClick}
          >
            ADD PLAYER 2
          </StyledAddP2Button>
        </>
      ) : null}
      <Snackbar
        open={!!currentAlert}
        onClose={() => setCurrentAlert(null)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="error" sx={{ width: "100%" }}>
          {currentAlert}
        </Alert>
      </Snackbar>
    </>
  );
}
