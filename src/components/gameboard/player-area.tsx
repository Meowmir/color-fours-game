import React from "react";

import { ReadPlayerDTO } from "../../my-types";
import { PlayerNameDisplay } from "../displays/player-name-display";
import { ALL_TILE_COLORS, blueColor, pinkColor } from "../../constants";
import { PlayerChips } from "../player-chips";

export function PlayerArea({
  player,
  isP1,
  gameOver,
  isCurrentPlayer,
}: {
  player: ReadPlayerDTO;
  isP1?: boolean;
  gameOver?: boolean;
  isCurrentPlayer?: boolean;
}) {
  const { placeableTiles = [] } = player;

  return (
    <>
      <PlayerNameDisplay
        playerName={player.name}
        borderColor={isP1 ? blueColor : pinkColor}
        backgroundColor={isP1 ? undefined : pinkColor}
        color={isP1 ? undefined : "white"}
      />
      {ALL_TILE_COLORS.map((color) => (
        <PlayerChips
          key={color}
          fill={!isP1}
          color={color.toLowerCase()}
          isDraggable={!gameOver && placeableTiles.includes(color)}
          isCurrentPlayer={isCurrentPlayer}
        />
      ))}
    </>
  );
}
