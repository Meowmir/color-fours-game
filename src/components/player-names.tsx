import React from "react";
import { Box, TextField } from "@mui/material";

type PlayerNameProps = {
  onChange: (name: string) => void;
  color: string;
  label: string;
};

export function PlayerName({ onChange }: PlayerNameProps) {
  return (
    <TextField
      inputProps={{ min: 0, style: { textAlign: "center" } }}
      sx={{
        width: 300,
      }}
      margin="normal"
      id="outlined-basic"
      variant="outlined"
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  );
}
