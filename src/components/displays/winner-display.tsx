import { Box } from "@mui/material";

export function WinnerDisplay({
  playerName,
  backgroundColor,
  borderColor,
  color,
}: {
  playerName: string;
  backgroundColor: string;
  borderColor: string;
  color: string;
}) {
  return (
    <Box
      sx={{
        backgroundColor: { backgroundColor },
        border: 2,
        borderColor: { borderColor },
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
      <p>{playerName} IS THE WINNER!</p>
    </Box>
  );
}
