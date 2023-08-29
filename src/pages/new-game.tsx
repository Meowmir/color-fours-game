import { useEffect } from "react";
import { useNewGame } from "../game-socket";
import { useNavigate } from "react-router-dom";

export default function NewGame() {
  const navigate = useNavigate();
  const [newGame, isLoading, createGame] = useNewGame();

  useEffect(() => {
    if (!newGame) return;

    navigate(`/running-game/${newGame.gameId}`);
  }, [navigate, newGame]);

  return <h2 onClick={createGame}>NEW GAME</h2>;
}
