import React from "react";
import { useParams } from "react-router-dom";

import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

import { BoardGrid } from "../components/board-grid";
import { useRunningGame } from "../hooks/use-running-game.hook";

const StyledDiv = styled("div")({
  marginTop: 30,
});

export default function RunningGameView() {
  const { gameId } = useParams();
  const [theGame, isLoading] = useRunningGame(gameId!);

  console.log(theGame);

  if (!theGame) {
    return <p>"LOADING"</p>;
  }

  return (
    <StyledDiv>
      <Container>
        <BoardGrid game={theGame} />
      </Container>
    </StyledDiv>
  );
}
