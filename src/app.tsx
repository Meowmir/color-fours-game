import React from "react";
import "./app.css";

import { Button } from "@mui/material";
import { Route, BrowserRouter, Routes, useNavigate } from "react-router-dom";

import { gameSocket, SocketContext } from "./game-socket";

import NewGameView from "./views/new-game.view";
import FrontView from "./views/front.view";
import RunningGameView from "./views/running-game.view";

function App() {
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

function Splash() {
  const navigate = useNavigate();

  return (
    <header className="App-header">
      <Button onClick={() => navigate("/new-game")} variant="contained">
        ?
      </Button>
    </header>
  );
}

export default App;
