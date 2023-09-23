import React from "react";
import { useDrop } from "react-dnd";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";

import { Game, ItemType, ReadTileDTO } from "../../my-types";
import { usePlaceTile } from "../../hooks/use-place-tile.hook";
import { blueColor, greenColor, orangeColor, pinkColor } from "../../constants";

export type BoardTileProps = {
  game: Game;
  tile: ReadTileDTO | null;
  tileIndex: number;
  rowIndex: number;
};

const StyledDiv = styled("div")`
  &.placed {
    animation: blinkingBackground 2s linear;
  }
  @keyframes blinkingBackground {
    0% {
      background-color: transparent;
    }
    25% {
      background-color: rgba(135, 206, 235, 0.5);
    }
    50% {
      background-color: transparent;
    }
    75% {
      background-color: rgba(135, 206, 235, 0.5);
    }
    100% {
      background-color: transparent;
    }
  }
`;

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

export function BoardTile({ game, tile, tileIndex, rowIndex }: BoardTileProps) {
  const [, , placeTile] = usePlaceTile(game.gameId);
  const [, drop] = useDrop(() => ({
    accept: ItemType.Chip,
    drop(item: { color: string }) {
      placeTile({ color: item.color, row: rowIndex, column: tileIndex });
      console.log(`On row ${rowIndex}, tile ${tileIndex} you dropped`, item);
    },
    canDrop: () => !tile,
  }));

  const styleColor =
    tile?.color === "BLUE"
      ? blueColor
      : tile?.color === "GREEN"
      ? greenColor
      : tile?.color === "ORANGE"
      ? orangeColor
      : tile?.color === "PINK"
      ? pinkColor
      : "transparent";

  return (
    <Grid
      xs={1}
      className="board-cell"
      sx={{
        display: "inline-block",
        position: "relative",
      }}
    >
      <Item ref={drop} className={tile ? "placed" : undefined}>
        <StyledDot
          style={{
            backgroundColor: tile?.isP1 ? "" : styleColor,
            borderColor: styleColor,
          }}
        />
      </Item>
    </Grid>
  );
}

const Item = styled(StyledDiv)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
