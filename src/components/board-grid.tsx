import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { PlayerChip } from "./player-chips";
import { BoardTile } from "./board-tile";
import { Game, ReadTileDTO } from "../my-types";
import { useRunningGame } from "../hooks/use-running-game.hook";

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

  const { players } = theGame;
  const [{ name: player1Name }, { name: player2Name }] = players;

  console.log(player1Name);
  console.log(player2Name);

  return (
    <Box>
      <Container>
        <Grid container>
          <Grid xs={2}>
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
                <BoardRow row={row} rowIndex={index} key={index} />
              ))}
            </Grid>
          </Grid>
          <Grid xs={2}>
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
  row,
  rowIndex,
}: {
  row: (ReadTileDTO | null)[];
  rowIndex: number;
}) {
  return (
    <>
      {row.map((tile, index) => (
        <BoardTile
          tile={tile}
          tileIndex={index}
          rowIndex={rowIndex}
          key={index}
        />
      ))}
    </>
  );
}
