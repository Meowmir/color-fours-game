import { Box, Container } from "@mui/material";
import { PlayerTurnDisplay } from "../displays/player-turn-display";
import { blueColor, pinkColor, COL_COUNT } from "../../constants";
import Grid from "@mui/material/Unstable_Grid2";
import { PlayerNameDisplay } from "../displays/player-name-display";
import { Player2Chips, PlayerChips } from "../player-chips";
import React from "react";
import { Game } from "../../my-types";
import { BoardRow } from "./board-row";

export function RunningGameBoard({
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
        <PlayerTurnDisplay
          playerName={turn === 0 ? player1Name : player2Name}
          backgroundColor={turn === 0 ? "white" : pinkColor}
          borderColor={turn === 0 ? blueColor : pinkColor}
          color={turn === 0 ? "black" : "white"}
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
                margin: 1,
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
            <Player2Chips theGame={theGame} fill color="blue" />
            <Player2Chips theGame={theGame} fill color="green" />
            <Player2Chips theGame={theGame} fill color="orange" />
            <Player2Chips theGame={theGame} fill color="pink" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
