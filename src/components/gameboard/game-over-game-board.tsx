import { Box, Container } from "@mui/material";
import { WinnerDisplay } from "../displays/winner-display";
import { blueColor, COL_COUNT, pinkColor } from "../../constants";
import Grid from "@mui/material/Unstable_Grid2";
import { PlayerNameDisplay } from "../displays/player-name-display";
import { PlayerChips } from "../player-chips";
import { BoardRow } from "./board-row";
import React from "react";
import { Game } from "../../my-types";

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
            <PlayerChips theGame={theGame} color="blue" />
            <PlayerChips theGame={theGame} color="green" />
            <PlayerChips theGame={theGame} color="orange" />
            <PlayerChips theGame={theGame} color="pink" />
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
            <PlayerChips theGame={theGame} fill color="blue" />
            <PlayerChips theGame={theGame} fill color="green" />
            <PlayerChips theGame={theGame} fill color="orange" />
            <PlayerChips theGame={theGame} fill color="pink" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
