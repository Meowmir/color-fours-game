import React from "react";
import { useParams } from "react-router-dom";

import { useRunningGame } from "../hooks/use-running-game.hook";

import { SmallGameTitle } from "../components/displays/game-title";
import { BoardGrid } from "../components/gameboard/board-grid";
import LinksModal from "../components/links-modal";
import { PendingGameBoard } from "../components/gameboard/pending-game-board";

export default function RunningGameView() {
  const { gameId } = useParams();
  const [theGame, isP1] = useRunningGame(gameId!);

  if (!theGame) {
    return <p>LOADING</p>;
  }

  if (theGame.players.length < 2) {
    return <PendingGameBoard theGame={theGame} isP1={isP1} />;
  }

  return (
    <>
      <p style={{ opacity: 0.5, paddingBottom: 20 }}>
        Created by Nora Disewji
        <LinksModal />
      </p>
      <SmallGameTitle />
      <BoardGrid game={theGame} isP1={isP1} />
    </>
  );
}
