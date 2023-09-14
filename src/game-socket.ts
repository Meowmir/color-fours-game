import { io } from "socket.io-client";
import { createContext } from "react";

// http://localhost:3001
//const SOCKET_URL = "http://localhost:3001";
const SOCKET_URL = "http://64.225.83.55";
const token = process.env.REACT_APP_API_KEY || "";

if (!token) {
  throw new Error("MISSING API TOKEN");
}

export const gameSocket = io(SOCKET_URL, {
  auth: {
    "X-API-TOKEN": token ? atob(token) : "",
  },
});

gameSocket.on("connect", () => console.log("connected"));
gameSocket.on("game", (d) => console.log("game", d));

export const SocketContext = createContext(gameSocket);
