import { useEffect, useState } from "react";
import { Game } from "../my-types";
import { gameSocket } from "../game-socket";
import { getSessionId } from "../utils/get-player-id.util";

export function useRunningGame(
  gameId: string,
): [Game | null, boolean, boolean] {
  const [theGame, setTheGame] = useState<Game | null>(null);
  const [isP1, setIsP1] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTheGame(null);

    // get initial state from server
    gameSocket
      .emitWithAck("game", {
        type: "GET_GAME",
        gameId,
        sessionId: getSessionId(),
      })
      .then((game) => {
        setTheGame(game);
        setIsP1(!!game.isP1);
      })
      .catch((err) =>
        console.error(`Failed getting the game with msg: ${err.message}`, err),
      )
      .finally(() => setIsLoading(false));

    // listen for updates
    gameSocket.on(`game/${gameId}`, (game) => {
      setTheGame(game);
    });

    return () => {
      // clean up your mess whenever this effect unmounts
      gameSocket.off(`game/${gameId}`, setTheGame);
    };
  }, [gameId]);

  return [theGame, isP1, isLoading];
}
