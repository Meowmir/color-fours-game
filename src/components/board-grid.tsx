import { Box, Container, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import React, { FC, useEffect, useState } from "react";
import { PlayerChips } from "./player-chips";
import { Tile } from "./tile";
import BoardTile from "./board-tile";
import { Piece } from "./piece";

import type { GameTest, Position } from "../game-test";

const ROW_COUNT = 12;
const COL_COUNT = 12;

const game: { gameboard: null[][] } = {
  gameboard: Array(ROW_COUNT)
    .fill(null)
    .map((_) => Array(COL_COUNT).fill(null)),
};

export interface BoardProps {
  gameT: GameTest;
}

export const BoardGrid: FC<BoardProps> = ({ gameT }) => {
  const [[chipX, chipY], setChipPosition] = useState<Position>(
    gameT.chipPosition,
  );

  useEffect(() => gameT.observe(setChipPosition));

  function RenderTile(i: number) {
    const x = i % 8;
    const y = Math.floor(i / 8);

    return (
      <div key={i} style={{ width: "12.5%", height: "12.5%" }}>
        <BoardTile x={x} y={y}>
          <Piece hasChip={x === chipX && y === chipY}></Piece>
        </BoardTile>
      </div>
    );
  }

  return (
    <Box>
      <Container>
        <Grid container>
          <Grid xs={2}>
            <PlayerChips />
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
              {game.gameboard.map((row, index) => (
                <BoardRow row={row} rowIndex={index} key={index} />
              ))}
            </Grid>
          </Grid>
          <Grid xs={2}>
            <PlayerChips fill />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

function BoardRow({ row, rowIndex }: { row: null[]; rowIndex: number }) {
  return (
    <>
      {row.map((tile, index) => (
        <Tile tile={tile} tileIndex={index} rowIndex={index} key={index} />
      ))}
    </>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
/*
function RenderPiece(x, y, [chipX, chipY]) {
  if (x === chipX && y === chipY) {
    return <PlayerChips />;
  }
}


 */
