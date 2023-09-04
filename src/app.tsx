import React from "react";

import { Route, BrowserRouter, Routes } from "react-router-dom";

import { gameSocket, SocketContext } from "./game-socket";

import FrontView from "./views/front.view";
import RunningGameView from "./views/running-game.view";

export default function App() {
  return (
    // there is no reason for this context apart from being educational
    <SocketContext.Provider value={gameSocket}>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route index element={<FrontView />} />
            <Route path="/running-game/:gameId" element={<RunningGameView />} />
          </Routes>
        </div>
      </BrowserRouter>
    </SocketContext.Provider>
  );
}
