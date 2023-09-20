import { styled } from "@mui/material/styles";
import React from "react";
import { useDrag } from "react-dnd";
import { ItemType } from "../my-types";
import { blueColor, greenColor, orangeColor, pinkColor } from "../constants";

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

export function PlayerChip({
  fill,
  color,
  readOnly,
}: {
  fill?: boolean;
  color: string;
  readOnly?: boolean;
}) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType.Chip,
    item: { color, isP1: !fill },
    canDrag: () => !readOnly,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

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
    <>
      <StyledDot
        ref={drag}
        className="dot"
        style={{
          backgroundColor: fill ? styleColor : "",
          borderColor: styleColor,
          opacity: isDragging ? 0.33 : 1,
          cursor: "move",
          marginBottom: 40,
        }}
      ></StyledDot>
    </>
  );
}
