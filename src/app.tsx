import React from "react";
import "./app.css";

import { Button } from "@mui/material";
import { Route, BrowserRouter, Routes, useNavigate } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { gameSocket, SocketContext } from "./game-socket";

import FrontView from "./views/front.view";
import RunningGameView from "./views/running-game.view";
import { styled } from "@mui/material/styles";

const BgdImg = styled("img")(({ theme }) => ({
  backgroundImage: `url(triangles-bgd.png)`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
  height: "auto",
  minHeight: "100%",
  opacity: 0.3,
}));

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <SocketContext.Provider value={gameSocket}>
        <BrowserRouter>
          <div
            className="app"
            style={{
              backgroundImage: `url(bgd.png)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "auto",
              height: "100vh",
            }}
          >
            <Routes>
              <Route index element={<FrontView />} />
              <Route
                path="/running-game/:gameId"
                element={<RunningGameView />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </SocketContext.Provider>
    </DndProvider>
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
