import { useCallback, useState } from "react";

import { gameSocket } from "../game-socket";
import { Game } from "../my-types";
import { getSessionId } from "../utils/get-player-id.util";

export function useNewGame(): [
  Game | null,
  boolean,
  (player: string) => Promise<void>,
] {
  const [newGame, setNewGame] = useState<Game | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const createNewGame: (player: string) => Promise<void> = useCallback(
    (player) => {
      setIsLoading(true);

      return gameSocket
        .emitWithAck("game", {
          type: "NEW_GAME",
          player: { name: player, sessionId: getSessionId() },
        })
        .then(setNewGame)
        .catch((err) =>
          console.error(
            `Failed creating new game with msg: ${err.message}`,
            err,
          ),
        )
        .finally(() => setIsLoading(false));
    },
    [],
  );

  return [newGame, isLoading, createNewGame];
}
