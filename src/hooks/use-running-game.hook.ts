import { useEffect, useState } from "react";
import { Game } from "../types";
import { gameSocket } from "../game-socket";

export function useRunningGame(gameId: string): [Game | null, boolean] {
  const [theGame, setTheGame] = useState<Game | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTheGame(null);

    // get initial state from server
    gameSocket
      .emitWithAck("game", {
        type: "GET_GAME",
        gameId,
      })
      .then(setTheGame)
      .catch((err) =>
        console.error(`Failed getting the game with msg: ${err.message}`, err),
      )
      .finally(() => setIsLoading(false));

    // listen for updates
    gameSocket.on(`game/${gameId}`, setTheGame);

    return () => {
      // clean up your mess whenever this effect unmounts
      gameSocket.off(`game/${gameId}`, setTheGame);
    };
  }, [gameId]);

  return [theGame, isLoading];
}
