import { io } from "socket.io-client";
import { createContext, useCallback, useState } from "react";

const SOCKET_URL = "http://localhost:3001"; //"http://64.225.83.55";
const API_KEY_KEY = "myToken";

export const gameSocket = io(SOCKET_URL, {
  extraHeaders: {
    "X-API-TOKEN": localStorage.getItem(API_KEY_KEY) || "",
  },
});

gameSocket.on("connect", () => console.log("connected"));
gameSocket.on("game", (d) => console.log("game", d));

export const SocketContext = createContext(gameSocket);

type Game = { gameId: string };

export function useNewGame(): [Game | null, boolean, () => Promise<void>] {
  const [newGame, setNewGame] = useState<Game | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const createNewGame: () => Promise<void> = useCallback(() => {
    setIsLoading(true);

    return gameSocket
      .emitWithAck("game", { type: "NEW_GAME" })
      .then(setNewGame)
      .catch((err) =>
        console.error(`Failed creating new game with msg: ${err.message}`, err),
      )
      .finally(() => setIsLoading(false));
  }, []);

  return [newGame, isLoading, createNewGame];
}
