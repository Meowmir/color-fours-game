import { io } from "socket.io-client";
import { createContext } from "react";

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
