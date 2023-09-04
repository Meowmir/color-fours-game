import React from "react";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

type Player1NameProps = {
  onChange: (name: string) => void;
};

const StyledDiv = styled("div")({
  textAlign: "center",
});

export function Player1Name({ onChange }: Player1NameProps) {
  return (
    <StyledDiv>
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
    </StyledDiv>
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
