import React from "react";
import logo from "./logo.svg";
import { Button } from "@mui/material";
import { Route, BrowserRouter, Routes, useNavigate } from "react-router-dom";

import "./App.css";
import NewGame from "./pages/new-game";
import { gameSocket, SocketContext } from "./game-socket";

function App() {
  return (
    <SocketContext.Provider value={gameSocket}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route index element={<Splash />} />
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
      <img src={logo} className="App-logo" alt="logo" />
      <Button onClick={() => navigate("/new-game")} variant="contained">
        ?
      </Button>
    </header>
  );
}

export default App;
