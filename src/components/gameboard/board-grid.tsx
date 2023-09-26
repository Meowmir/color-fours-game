import React, { FC } from "react";

import { Game } from "../../my-types";
import { RunningGameBoard } from "./running-game-board";
import { GameOverGameBoard } from "./game-over-game-board";

export interface BoardProps {
  game: Game;
  isP1?: boolean;
}

export const BoardGrid: FC<BoardProps> = ({ game, isP1 }) => {
  const { players, turn } = game;
  const [{ name: player1Name }, { name: player2Name }] = players;

  if (game.state !== "GAME_OVER") {
    return (
      <RunningGameBoard
        theGame={game}
        player1Name={player1Name}
        player2Name={player2Name}
        turn={turn}
        isP1={isP1}
      />
    );
  }

  return (
    <GameOverGameBoard
      theGame={game}
      player1Name={player1Name}
      player2Name={player2Name}
      turn={turn}
    />
  );
};
