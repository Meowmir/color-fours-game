import React from "react";
import { useDrop } from "react-dnd";
import { Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";

import { ItemType, ReadTileDTO } from "../my-types";

export type BoardTileProps = {
  tile: ReadTileDTO | null;
  tileIndex: number;
  rowIndex: number;
};

const Dot = styled("div")({
  height: 20,
  width: 20,
  borderRadius: "50%",
  margin: "auto",
});

const StyledDot = styled(Dot)({
  marginTop: 0,
  borderStyle: "solid",
  borderWidth: 2,
});

export function BoardTile({ tile, tileIndex, rowIndex }: BoardTileProps) {
  const [, drop] = useDrop(() => ({
    accept: ItemType.Chip,
    drop(item) {
      console.log(`On row ${rowIndex}, tile ${tileIndex} you dropped`, item);
    },
    canDrop: () => !tile,
  }));

  return (
    <Grid
      xs={1}
      className="board-cell"
      sx={{
        display: "inline-block",
        position: "relative",
      }}
    >
      <Item ref={drop}>
        <StyledDot />
      </Item>
    </Grid>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
