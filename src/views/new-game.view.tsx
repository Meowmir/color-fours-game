import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { useNewGame } from "../hooks/use-new-game.hook";

export default function NewGameView() {
  const navigate = useNavigate();
  const [newGame, isLoading, createGame] = useNewGame();
  const [player1, setPlayer1] = useState("");

  useEffect(() => {
    if (!newGame) return;

    navigate(`/running-game/${newGame.gameId}`);
  }, [navigate, newGame]);

  return (
    <>
      <br />
      <TextField
        id="outlined-basic"
        label="Player 1"
        variant="outlined"
        value={player1}
        onChange={(e) => {
          setPlayer1(e.target.value);
        }}
      />
      <br />
      <Button variant="contained" onClick={() => createGame(player1)}>
        NEW GAME
      </Button>
    </>
  );
}
