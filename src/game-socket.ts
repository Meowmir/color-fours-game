import { io } from "socket.io-client";
import { createContext } from "react";

const SOCKET_URL = process.env.REACT_APP_HOST || "http://64.225.83.55";
const token = process.env.REACT_APP_API_KEY || "";

if (!token) {
  throw new Error("MISSING API TOKEN");
}

export const gameSocket = io(SOCKET_URL, {
  auth: {
    "X-API-TOKEN": token,
  },
});

gameSocket.on("connect", () => console.log("connected"));
gameSocket.on("game", (d) => console.log("game", d));

export const SocketContext = createContext(gameSocket);

export function emitMessage(...args: any[]) {
  return gameSocket.emitWithAck("game", ...args).then((message) => {
    if (message.error) {
      throw new Error(message.error);
    }

    return message;
  });
}
