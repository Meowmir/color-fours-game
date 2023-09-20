import React, { FC } from "react";
import { useParams } from "react-router-dom";

import { Game } from "../../my-types";
import { useRunningGame } from "../../hooks/use-running-game.hook";
import { RunningGameBoard } from "./running-game-board";
import { GameOverGameBoard } from "./game-over-game-board";

export interface BoardProps {
  game: Game;
}

export const BoardGrid: FC<BoardProps> = ({ game }) => {
  const { gameId } = useParams();
  const [theGame] = useRunningGame(gameId!);

  if (!theGame) {
    return <p>"Loading"</p>;
  }

  const { players, turn } = theGame;
  const [{ name: player1Name }, { name: player2Name }] = players;

  if (theGame.state !== "GAME_OVER") {
    return (
      <RunningGameBoard
        theGame={theGame}
        player1Name={player1Name}
        player2Name={player2Name}
        turn={turn}
      />
    );
  }

  return (
    <GameOverGameBoard
      theGame={theGame}
      player1Name={player1Name}
      player2Name={player2Name}
      turn={turn}
    />
  );
};
