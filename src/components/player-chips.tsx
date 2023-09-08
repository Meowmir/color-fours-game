import { styled } from "@mui/material/styles";
import React from "react";
import { useDrag } from "react-dnd";
import { ItemType } from "../my-types";

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

export function PlayerChip({ fill, color }: { fill?: boolean; color: string }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType.Chip,
    item: { color, backgroundColor: fill },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <>
      <StyledDot
        ref={drag}
        className="dot"
        style={{
          backgroundColor: fill ? color : "",
          borderColor: color,
          color: "",
          opacity: isDragging ? 0.33 : 1,
          cursor: "move",
        }}
      ></StyledDot>
    </>
  );
}
