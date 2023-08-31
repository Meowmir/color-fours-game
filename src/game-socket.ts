import { io } from "socket.io-client";
import { createContext, useCallback, useState } from "react";

// http://localhost:3001
//const SOCKET_URL = "http://localhost:3001";
const SOCKET_URL = "http://64.225.83.55";
const API_KEY_KEY = "myToken";
const token = localStorage.getItem(API_KEY_KEY);

export const gameSocket = io(SOCKET_URL, {
  auth: {
    "X-API-TOKEN": token ? atob(token) : "",
  },
});

gameSocket.on("connect", () => console.log("connected"));
gameSocket.on("game", (d) => console.log("game", d));

export const SocketContext = createContext(gameSocket);

type Game = { gameId: string };

export function useNewGame(): [
  Game | null,
  string,
  boolean,
  (player: string) => Promise<void>,
] {
  const [newGame, setNewGame] = useState<Game | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const player = "";

  const createNewGame: (player: string) => Promise<void> = useCallback(
    (player) => {
      setIsLoading(true);

      return gameSocket
        .emitWithAck("game", {
          type: "NEW_GAME",
          player: { name: player, playerId: "1" },
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

  return [newGame, player, isLoading, createNewGame];
}
