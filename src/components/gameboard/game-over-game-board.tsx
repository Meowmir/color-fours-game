import { Box, Container } from "@mui/material";
import { WinnerDisplay } from "./displays/winner-display";
import { blueColor, COL_COUNT, pinkColor } from "../constants";
import Grid from "@mui/material/Unstable_Grid2";
import { PlayerNameDisplay } from "./displays/player-name-display";
import { PlayerChip } from "./player-chips";
import { BoardRow } from "./gameboard/board-row";
import React from "react";
import { Game } from "../my-types";

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
  return (
    <Box>
      <Container>
        <WinnerDisplay
          playerName={turn === 1 ? player1Name : player2Name}
          backgroundColor={turn === 1 ? "white" : pinkColor}
          borderColor={turn === 1 ? blueColor : pinkColor}
          color={turn === 1 ? "black" : "white"}
        />
        <Grid container>
          <Grid xs={2}>
            <PlayerNameDisplay
              playerName={player1Name}
              borderColor={blueColor}
            />
            <PlayerChip color="blue" />
            <PlayerChip color="green" />
            <PlayerChip color="orange" />
            <PlayerChip color="pink" />
          </Grid>
          <Grid xs={8}>
            <Grid
              container
              columns={COL_COUNT}
              spacing={1}
              sx={{
                background: "black",
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
            <PlayerNameDisplay
              playerName={player2Name}
              backgroundColor={pinkColor}
              borderColor={pinkColor}
              color="white"
            />
            <PlayerChip fill color="blue" />
            <PlayerChip fill color="green" />
            <PlayerChip fill color="orange" />
            <PlayerChip fill color="pink" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
