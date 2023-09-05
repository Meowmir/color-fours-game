import React from "react";
import type { FC, ReactNode } from "react";

import { Tile } from "./tile";
import { useDrop } from "react-dnd";
import { ItemType } from "../my-types";

import type { GameTest, Position } from "../game-test";

export interface BoardSquareProps {
  x: number;
  y: number;
  children?: ReactNode;
  game: Game;
}

export default function BoardTile({ x, y, children }) {
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: ItemType.Chip,
      drop: () => moveChip(x, y),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [x, y],
  );
  return (
    <div
      ref={drop}
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      <Tile>{children}</Tile>;
    </div>
  );
}
