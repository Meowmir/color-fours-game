import { useCallback, useState } from "react";

import { gameSocket } from "../game-socket";
import { Game } from "../my-types";
import { getSessionId } from "../utils/get-player-id.util";

export function useAddPlayer(
  gameId?: string,
): [Game | null, boolean, (player: string) => Promise<void>] {
  const [updateGame, setUpdateGame] = useState<Game | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const addPlayer: (player: string) => Promise<void> = useCallback(
    (player) => {
      if (!gameId) return Promise.resolve();

      setIsLoading(true);

      return gameSocket
        .emitWithAck("game", {
          type: "ADD_PLAYER",
          gameId,
          player: { name: player, sessionId: getSessionId() },
        })
        .then(setUpdateGame)
        .catch((err) =>
          console.error(`Failed adding player with msg: ${err.message}`, err),
        )
        .finally(() => setIsLoading(false));
    },
    [gameId],
  );

  return [updateGame, isLoading, addPlayer];
}
