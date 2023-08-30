import React from "react";
import "./app.css";

import { Button } from "@mui/material";
import { Route, BrowserRouter, Routes, useNavigate } from "react-router-dom";

import { gameSocket, SocketContext } from "./game-socket";

import NewGame from "./pages/new-game";
import FrontPage from "./pages/front-page";

function App() {
  return (
    <SocketContext.Provider value={gameSocket}>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route index element={<FrontPage />} />
            <Route path="/new-game" element={<NewGame />} />
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
