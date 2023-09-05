import { styled } from "@mui/material/styles";
import Draggable from "react-draggable";
import React from "react";

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
  const eventHandler = () => console.log("WOOW");
  return (
    <div>
      <StackedDots>
        <StyledDot
          className="dot"
          style={{
            backgroundColor: fill ? "#00D6F2" : "",
            borderColor: "#00D6F2",
            opacity: 0.33,
            position: "absolute",
            top: 0,
            left: 0,
          }}
        ></StyledDot>
        <Draggable onStart={eventHandler} handle="#handle">
          <StyledDot
            id="handle"
            className="dot"
            style={{
              backgroundColor: fill ? "#00D6F2" : "",
              borderColor: "#00D6F2",
              position: "relative",
              top: 0,
              left: 0,
            }}
          ></StyledDot>
        </Draggable>
      </StackedDots>
      <br />
      <StackedDots>
        <StyledDot
          className="dot"
          style={{
            backgroundColor: fill ? "#90EA00" : "",
            borderColor: "#90EA00",
            opacity: 0.33,
            position: "absolute",
            top: 0,
            left: 0,
          }}
        ></StyledDot>
        <Draggable>
          <StyledDot
            className="dot"
            style={{
              backgroundColor: fill ? "#90EA00" : "",
              borderColor: "#90EA00",
              position: "relative",
              top: 0,
              left: 0,
            }}
          ></StyledDot>
        </Draggable>
      </StackedDots>
      <br />
      <StackedDots>
        <StyledDot
          className="dot"
          style={{
            backgroundColor: fill ? "#FFB100" : "",
            borderColor: "#FFB100",
            opacity: 0.33,
            position: "absolute",
            top: 0,
            left: 0,
          }}
        ></StyledDot>
        <Draggable>
          <StyledDot
            className="dot"
            style={{
              backgroundColor: fill ? "#FFB100" : "",
              borderColor: "#FFB100",
              position: "relative",
              top: 0,
              left: 0,
            }}
          ></StyledDot>
        </Draggable>
      </StackedDots>
      <br />
      <StackedDots>
        <StyledDot
          className="dot"
          style={{
            backgroundColor: fill ? "#EA0090" : "",
            borderColor: "#EA0090",
            opacity: 0.33,
            position: "absolute",
            top: 0,
            left: 0,
          }}
        ></StyledDot>
        <Draggable>
          <StyledDot
            className="dot"
            style={{
              backgroundColor: fill ? "#EA0090" : "",
              borderColor: "#EA0090",
              position: "relative",
              top: 0,
              left: 0,
            }}
          ></StyledDot>
        </Draggable>
      </StackedDots>
    </div>
  );
}
