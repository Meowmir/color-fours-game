import React from "react";
import "./app.css";

import { Button } from "@mui/material";
import { Route, BrowserRouter, Routes, useNavigate } from "react-router-dom";

import { gameSocket, SocketContext } from "./game-socket";

import NewGame from "./pages/new-game";
import FrontPage from "./pages/front-page";

function App() {
  return (
    <div className="vertical-center">
      <SocketContext.Provider value={gameSocket}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route index element={<FrontPage />} />
              <Route path="/new-game" element={<NewGame />} />
            </Routes>
          </div>
        </BrowserRouter>
      </SocketContext.Provider>
    </div>
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
