import { Box } from "@mui/material";
import { Game } from "../../my-types";

export function WinnerDisplay({
  theGame,
  backgroundColor,
  borderColor,
  color,
}: {
  theGame: Game;
  backgroundColor: string;
  borderColor: string;
  color: string;
}) {
  const [player1, player2] = theGame.players;
  const playerName = theGame.winner === "P1" ? player1.name : player2.name;

  return (
    <Box
      sx={{
        backgroundColor: {
          backgroundColor: theGame.winner ? backgroundColor : "#C3C3C3",
        },
        border: 2,
        borderColor: { borderColor: theGame.winner ? borderColor : "grey" },
        width: 300,
        height: 33,
        borderRadius: 4,
        margin: "auto",
        marginBottom: 6,
        fontSize: 20,
        color: { color },
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        lineHeight: 4,
      }}
    >
      {theGame.winner ? (
        <p>{playerName} IS THE WINNER!</p>
      ) : (
        <p>IT'S A DRAW!</p>
      )}
    </Box>
  );
}
