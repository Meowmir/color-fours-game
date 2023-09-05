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

const StackedDots = styled("div")({
  display: "inline-block",
  position: "relative",
});

export function PlayerChips({ fill }: { fill?: boolean }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType.Chip,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div>
      <StackedDots>
        <StyledDot
          ref={drag}
          className="dot"
          style={{
            backgroundColor: fill ? "#00D6F2" : "",
            borderColor: "#00D6F2",
            opacity: isDragging ? 0.33 : 1,
            position: "absolute",
            top: 0,
            left: 0,
            cursor: "move",
          }}
        ></StyledDot>
      </StackedDots>
    </div>
  );
}
