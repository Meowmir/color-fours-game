import { Game, LatestTileDTO, ReadTileDTO } from "../../my-types";
import { BoardTile } from "./board-tile";
import React from "react";

export function BoardRow({
  gameId,
  row,
  rowIndex,
  latestTile,
}: {
  gameId: Game;
  row: (ReadTileDTO | null)[];
  rowIndex: number;
  latestTile?: LatestTileDTO | null;
}) {
  return (
    <>
      {row.map((tile, index) => (
        <BoardTile
          game={gameId}
          tile={tile}
          colIndex={index}
          rowIndex={rowIndex}
          key={index}
          latestTile={latestTile}
        />
      ))}
    </>
  );
}
