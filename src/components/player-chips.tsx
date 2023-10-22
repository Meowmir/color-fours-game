import React from "react";
import { useDrag } from "react-dnd";
import { ItemType } from "../my-types";
import { Chip } from "./chip";
import {whiteColorOpacity} from "../constants";

export function PlayerChips({
  color,
  fill,
  isDraggable,
  isCurrentPlayer,
}: {
  color: string;
  fill?: boolean;
  isDraggable?: boolean;
  isCurrentPlayer?: boolean;
}) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType.Chip,
    item: { color, isP1: !fill },
    canDrag: () => Boolean(isDraggable && isCurrentPlayer),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
      <div
        ref={drag}
        style={{
          transform: "translate(0, 0)",
          opacity: isDragging || !isDraggable ? 0.33 : 1,
          cursor: isDraggable && isCurrentPlayer ? "move" : "not-allowed",
        }}
      >
        <Chip color={color} fill={fill}></Chip>
      </div>
  );
}
