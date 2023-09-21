import React from "react";
import { useDrag } from "react-dnd";
import { Game, ItemType } from "../my-types";
import { Chip } from "./chip";

export function PlayerChips({
  color,
  fill,
  theGame,
}: {
  color: string;
  fill?: boolean;
  theGame: Game;
}) {
  const { players } = theGame;
  const [{ placeableTiles: P1placeableTiles }] = players;

  const placeableColor = P1placeableTiles.includes(
    color.toString().toUpperCase(),
  );

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType.Chip,
    item: { color, isP1: !fill },
    canDrag: () => placeableColor,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging || !placeableColor ? 0.33 : 1,
        cursor: "move",
      }}
    >
      <Chip color={color} fill={fill}></Chip>
    </div>
  );
}

export function Player2Chips({
  color,
  fill,
  theGame,
  readOnly,
}: {
  color: string;
  fill?: boolean;
  theGame: Game;
  readOnly?: boolean;
}) {
  const { players } = theGame;
  const [, { placeableTiles: P2placeableTiles }] = players;

  const placeableColor = P2placeableTiles.includes(
    color.toString().toUpperCase(),
  );

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType.Chip,
    item: { color, isP1: !fill },
    canDrag: () => placeableColor,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging || !placeableColor ? 0.33 : 1,
        cursor: "move",
      }}
    >
      <Chip color={color} fill={fill}></Chip>
    </div>
  );
}
