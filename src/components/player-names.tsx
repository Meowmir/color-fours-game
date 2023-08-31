import React from "react";
import { TextField } from "@mui/material";

type Player1NameProps = {
  onChange: (name: string) => void;
};

export function Player1Name({ onChange }: Player1NameProps) {
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
        onChange(e.target.value);
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
