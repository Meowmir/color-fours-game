import React from "react";
import { TextField } from "@mui/material";

export function PlayerNames() {
  return (
    <>
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
      />
      <br />
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
    </>
  );
}
