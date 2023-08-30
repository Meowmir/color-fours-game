import React, { useState } from "react";
import { TextField } from "@mui/material";

export function Player1Name() {
  const [player1, setPlayer1] = useState("");

  return (
    <TextField
      inputProps={{ min: 0, style: { textAlign: "center" } }}
      sx={{
        width: 300,
      }}
      margin="normal"
      id="outlined-basic"
      label="Player 1"
      color="secondary"
      variant="outlined"
      onChange={(e) => {
        setPlayer1(e.target.value);
      }}
    />
  );
}

export default function Player2Name() {
  return (
    <TextField
      inputProps={{ min: 0, style: { textAlign: "center" } }}
      sx={{
        width: 300,
      }}
      margin="normal"
      id="outlined-basic"
      label="Player 2"
      color="warning"
      variant="outlined"
    />
  );
}
