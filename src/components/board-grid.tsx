import { Box, Chip, Container, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import { PlayerChips } from "./player-chips";
import { useRunningGame } from "../hooks/use-running-game.hook";
import { useParams } from "react-router-dom";
import { Game } from "../types";

const ROW_COUNT = 12;
const COL_COUNT = 12;

const game: { gameboard: null[][] } = {
  gameboard: Array(ROW_COUNT)
    .fill(null)
    .map((_) => Array(COL_COUNT).fill(null)),
};

export function BoardGrid() {
  const { gameId } = useParams();
  const [theGame, isLoading] = useRunningGame(gameId!);

  if (!theGame) {
    return <p>"Loading"</p>;
  }
  const { players } = theGame;
  const player1 = players[0];
  const player1name = Object.values(player1)[0];

  const player2 = players[1];
  /*
  const player2name = Object.values(player2)[0];

   */
  console.log(player1name);
  console.log(player2);

  return (
    <Box>
      <Container>
        <Grid container>
          <Grid xs={2}>
            <Chip
              variant="outlined"
              color="secondary"
              label={player1name}
            ></Chip>
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
            <Chip color="warning" label="BOO"></Chip>
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
