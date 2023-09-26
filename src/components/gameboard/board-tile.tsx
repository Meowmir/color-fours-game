import React from "react";
import { useDrop } from "react-dnd";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";

import { Game, ItemType, LatestTileDTO, ReadTileDTO } from "../../my-types";
import { usePlaceTile } from "../../hooks/use-place-tile.hook";
import { blueColor, greenColor, orangeColor, pinkColor } from "../../constants";

export type BoardTileProps = {
  game: Game;
  tile: ReadTileDTO | null;
  colIndex: number;
  rowIndex: number;
  latestTile?: LatestTileDTO | null;
};

const StyledDiv = styled("div")`
  &.placed-blue {
    background-color: rgba(135, 206, 235, 0.3);
    animation: blinkingBlueBackground 2s linear;
  }
  @keyframes blinkingBlueBackground {
    0% {
      background-color: transparent;
    }
    25% {
      background-color: rgba(135, 206, 235, 0.3);
    }
    50% {
      background-color: transparent;
    }
    75% {
      background-color: rgba(135, 206, 235, 0.3);
    }
    100% {
      background-color: transparent;
    }
  }
  &.placed-pink {
    background-color: rgba(234, 0, 144, 0.3);
    animation: blinkingPinkBackground 2s linear;
  }
  @keyframes blinkingPinkBackground {
    0% {
      background-color: transparent;
    }
    25% {
      background-color: rgba(234, 0, 144, 0.3);
    }
    50% {
      background-color: transparent;
    }
    75% {
      background-color: rgba(234, 0, 144, 0.3);
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

export function BoardTile({
  game,
  tile,
  colIndex,
  rowIndex,
  latestTile,
}: BoardTileProps) {
  const [, , placeTile] = usePlaceTile(game.gameId);
  const [, drop] = useDrop(() => ({
    accept: ItemType.Chip,
    drop(item: { color: string }) {
      placeTile({ color: item.color, row: rowIndex, column: colIndex });
      console.log(`On row ${rowIndex}, tile ${colIndex} you dropped`, item);
    },
    canDrop: () => !tile,
  }));

  const placedClass =
    latestTile && latestTile.column === colIndex && latestTile.row === rowIndex
      ? `placed-${latestTile.isP1 ? "blue" : "pink"}`
      : undefined;

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
      <Item ref={drop} className={placedClass}>
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
