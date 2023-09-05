import { Box, Container, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import { PlayerChips } from "./player-chips";

const ROW_COUNT = 12;
const COL_COUNT = 12;

const game: { gameboard: null[][] } = {
  gameboard: Array(ROW_COUNT)
    .fill(null)
    .map((_) => Array(COL_COUNT).fill(null)),
};

export function BoardGrid() {
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
}

function BoardRow({ row, rowIndex }: { row: null[]; rowIndex: number }) {
  return (
    <>
      {row.map((tile, index) => (
        <BoardCell tile={tile} tileIndex={index} rowIndex={index} key={index} />
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

function BoardCell({
  tile,
}: {
  tile: null;
  tileIndex: number;
  rowIndex: number;
}) {
  return (
    <Grid xs={1} className="board-cell">
      <Item>
        <Box
          sx={{
            width: 30,
            height: 30,
            backgroundColor: "primary.dark",
          }}
        />
      </Item>
    </Grid>
  );
}
