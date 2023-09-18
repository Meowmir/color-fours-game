import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { PlayerChip } from "./player-chips";
import { BoardTile } from "./board-tile";
import { Game, ReadTileDTO } from "../my-types";
import { useRunningGame } from "../hooks/use-running-game.hook";
import { PlayerNameDisplay } from "./player-name-display";
import { blueColor, greenColor, orangeColor, pinkColor } from "../constants";
import { usePlaceTile } from "../hooks/use-place-tile.hook";
import { PlayerTurnDisplay } from "./player-turn-display";

const COL_COUNT = 12;

export interface BoardProps {
  game: Game;
}

export const BoardGrid: FC<BoardProps> = ({ game }) => {
  const { gameId } = useParams();
  const [theGame, isLoading] = useRunningGame(gameId!);

  if (!theGame) {
    return <p>"Loading"</p>;
  }

  const { players, turn } = theGame;
  const [{ name: player1Name }, { name: player2Name }] = players;

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
              {game.gameBoard.map((row, index) => (
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
};
function BoardRow({
  gameId,
  row,
  rowIndex,
}: {
  gameId: Game;
  row: (ReadTileDTO | null)[];
  rowIndex: number;
}) {
  return (
    <>
      {row.map((tile, index) => (
        <BoardTile
          game={gameId}
          tile={tile}
          tileIndex={index}
          rowIndex={rowIndex}
          key={index}
        />
      ))}
    </>
  );
}
