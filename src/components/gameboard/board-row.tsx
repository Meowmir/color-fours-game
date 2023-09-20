import { Game, ReadTileDTO } from "../../my-types";
import { BoardTile } from "./board-tile";
import React from "react";

export function BoardRow({
  gameId,
  row,
  rowIndex,
}: {
  gameId: Game;
  row: (ReadTileDTO | null)[];
  rowIndex: number;
}) {
  return (
    <>
      {row.map((tile, index) => (
        <BoardTile
          game={gameId}
          tile={tile}
          tileIndex={index}
          rowIndex={rowIndex}
          key={index}
        />
      ))}
    </>
  );
}
