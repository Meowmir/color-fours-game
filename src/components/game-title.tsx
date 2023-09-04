import { styled } from "@mui/material/styles";

const StyledTitle = styled("h1")({
  textAlign: "center",
  textTransform: "uppercase",
  fontWeight: 750,
  fontSize: 100,
  letterSpacing: 20,
  lineHeight: 0.4,
  stroke: "#707070",
  strokeWidth: 20,
  textShadowColor: "black",
  textShadowRadius: 1,
  textShadowOffset: {
    width: 2,
    height: 2,
  },
});

export function GameTitle() {
  return (
    <>
      <StyledTitle>
        <span style={{ color: "#00D6F2" }}>C</span>
        <span style={{ color: "#90EA00" }}>O</span>
        <span style={{ color: "#FFB100" }}>L</span>
        <span style={{ color: "#EA0090" }}>O</span>
        <span style={{ color: "#00D6F2" }}>R</span>
      </StyledTitle>
      <StyledTitle>
        <span style={{ color: "#90EA00" }}>F</span>
        <span style={{ color: "#FFB100" }}>O</span>
        <span style={{ color: "#EA0090" }}>U</span>
        <span style={{ color: "#00D6F2" }}>R</span>
        <span style={{ color: "#90EA00" }}>S</span>
      </StyledTitle>
    </>
  );
}
