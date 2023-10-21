import React from "react";
import { TextField } from "@mui/material";

type PlayerNameProps = {
  onChange: (name: string) => void;
  color:
    | "error"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | undefined;
  label: string;
};

export function PlayerName({ onChange, label, color }: PlayerNameProps) {
  return (
    <TextField
      inputProps={{ min: 0, style: { textAlign: "center" } }}
      sx={{
        width: 300,
        backgroundColor: "rgba(255,255,255, 0.3)",
        borderRadius: 2,
      }}
      margin="normal"
      id="outlined-basic"
      variant="outlined"
      label={label}
      color={color}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  );
}
