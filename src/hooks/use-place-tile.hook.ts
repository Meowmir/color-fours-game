import { useCallback, useState } from "react";
import { Game, PlaceTileDTO } from "../my-types";
import { emitMessage } from "../game-socket";
import { getSessionId } from "../utils/get-player-id.util";

export function usePlaceTile(
  gameId: string,
): [Game | null, boolean, (tile: PlaceTileDTO) => Promise<void>] {
  const [updateGame, setUpdateGame] = useState<Game | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const placeTile: (tile: PlaceTileDTO) => Promise<void> = useCallback(
    (tile) => {
      if (!gameId) return Promise.resolve();

      setIsLoading(true);

      return emitMessage({
        type: "PLACE_TILE",
        gameId,
        ...tile,
        sessionId: getSessionId(),
      })
        .then(setUpdateGame)
        .catch((err) =>
          console.error(`Failed placing tile with msg: ${err.message}`, err),
        )
        .finally(() => setIsLoading(false));
    },
    [gameId],
  );

  return [updateGame, isLoading, placeTile];
}
