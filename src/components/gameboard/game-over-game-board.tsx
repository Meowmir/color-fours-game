import { Box, Container } from "@mui/material";
import { WinnerDisplay } from "../displays/winner-display";
import { blueColor, COL_COUNT, pinkColor } from "../../constants";
import Grid from "@mui/material/Unstable_Grid2";
import { PlayerNameDisplay } from "../displays/player-name-display";
import { PlayerChips } from "../player-chips";
import { BoardRow } from "./board-row";
import React from "react";
import { Game } from "../../my-types";
import { PlayerArea } from "./player-area";
import { GameOverText } from "../displays/game-over-text";

export function GameOverGameBoard({
  theGame,
  player1Name,
  player2Name,
  turn,
}: {
  theGame: Game;
  player1Name: string;
  player2Name: string;
  turn: number;
}) {
  const [player1, player2] = theGame.players;

  return (
    <Box>
      <Container>
        <WinnerDisplay
          theGame={theGame}
          backgroundColor={turn === 1 ? "white" : pinkColor}
          borderColor={turn === 1 ? blueColor : pinkColor}
          color={turn === 1 ? "black" : "white"}
        />
        <Grid container>
          <Grid xs={2}>
            <PlayerArea player={player1} isP1 gameOver />
          </Grid>
          <Grid xs={8}>
            <Grid
              container
              columns={COL_COUNT}
              spacing={1}
              sx={{
                borderWidth: "1px",
                borderTop: "solid",
                borderLeft: "solid",
                "& > div": {
                  borderBottom: "solid",
                  borderRight: "solid",
                },
              }}
            >
              {theGame.gameBoard.map((row, index) => (
                <BoardRow
                  gameId={theGame}
                  row={row}
                  rowIndex={index}
                  key={index}
                />
              ))}
            </Grid>
          </Grid>
          <Grid xs={2}>
            <PlayerArea player={player2} gameOver />
          </Grid>
        </Grid>
      </Container>
      <GameOverText />
    </Box>
  );
}
