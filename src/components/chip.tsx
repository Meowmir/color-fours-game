import { styled } from "@mui/material/styles";
import React from "react";
import { blueColor, greenColor, orangeColor, pinkColor } from "../constants";

const Dot = styled("div")({
  height: 50,
  width: 50,
  borderRadius: "50%",
  margin: "auto",
});

const StyledDot = styled(Dot)({
  marginTop: 20,
  borderStyle: "solid",
  borderWidth: 2,
});

export function Chip({
  color,
  fill,
  style,
}: {
  color: string;
  fill?: boolean;
  style?: any;
}) {
  const styleColor =
    color === "blue"
      ? blueColor
      : color === "green"
      ? greenColor
      : color === "orange"
      ? orangeColor
      : color === "pink"
      ? pinkColor
      : "grey";

  return (
    <StyledDot
      className="dot"
      style={{
        backgroundColor: fill ? styleColor : "",
        borderColor: styleColor,
        marginBottom: 40,
      }}
    ></StyledDot>
  );
}
