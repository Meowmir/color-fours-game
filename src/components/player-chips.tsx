import { styled } from "@mui/material/styles";

// creating a "base dot"
const Dot = styled("div")({
  height: 50,
  width: 50,
  borderRadius: "50%",
  margin: "auto",
});
// we can "compose" styled components
// utterly useless in this case, but a good example
const StyledDot = styled(Dot)({
  marginTop: 20,
  borderStyle: "solid",
  borderWidth: 2,
});

export function PlayerChips({ fill }: { fill?: boolean }) {
  return (
    <>
      <StyledDot
        className="dot"
        style={{
          backgroundColor: fill ? "#00D6F2" : "",
          borderColor: "#00D6F2",
        }}
      ></StyledDot>

      <StyledDot
        className="dot"
        style={{
          backgroundColor: fill ? "#90EA00" : "",
          borderColor: "#90EA00",
        }}
      ></StyledDot>

      <StyledDot
        className="dot"
        style={{
          backgroundColor: fill ? "#FFB100" : "",
          borderColor: "#FFB100",
        }}
      ></StyledDot>

      <StyledDot
        className="dot"
        style={{
          backgroundColor: fill ? "#EA0090" : "",
          borderColor: "#EA0090",
        }}
      ></StyledDot>
    </>
  );
}
