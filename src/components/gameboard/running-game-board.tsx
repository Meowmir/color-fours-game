import { Box, Container } from "@mui/material";
import { PlayerTurnDisplay } from "../displays/player-turn-display";
import { blueColor, pinkColor, COL_COUNT } from "../../constants";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import { Game } from "../../my-types";
import { BoardRow } from "./board-row";
import { PlayerArea } from "./player-area";

export function RunningGameBoard({
  theGame,
  player1Name,
  player2Name,
  turn,
  isP1,
}: {
  theGame: Game;
  player1Name: string;
  player2Name: string;
  turn: number;
  isP1?: boolean;
}) {
  const [player1, player2] = theGame.players;

  return (
    <Box>
      <Container>
        <PlayerTurnDisplay
          playerName={turn === 0 ? player1Name : player2Name}
          backgroundColor={turn === 0 ? "rgba(255,255,255, 0.3)" : pinkColor}
          borderColor={turn === 0 ? blueColor : pinkColor}
          color={turn === 0 ? "black" : "white"}
        />
        <Grid container>
          <Grid xs={2}>
            <PlayerArea player={player1} isP1 isCurrentPlayer={isP1} />
          </Grid>
          <Grid xs={8}>
            <Grid
              container
              columns={COL_COUNT}
              spacing={1}
              sx={{
                margin: 1,
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
                  latestTile={theGame.latestTile}
                />
              ))}
            </Grid>
          </Grid>
          <Grid xs={2}>
            <PlayerArea player={player2} isCurrentPlayer={!isP1} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
