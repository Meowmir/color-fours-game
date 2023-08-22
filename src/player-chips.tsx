export function Player1Chips() {
  return (
    <>
      <p>
        <div
          className="dot"
          style={{
            borderColor: "#00D6F2",
            borderStyle: "solid",
            borderWidth: 2,
          }}
        ></div>
      </p>
      <p>
        <div
          className="dot"
          style={{
            borderColor: "#90EA00",
            borderStyle: "solid",
            borderWidth: 2,
          }}
        ></div>
      </p>
      <p>
        <div
          className="dot"
          style={{
            borderColor: "#FFB100",
            borderStyle: "solid",
            borderWidth: 2,
          }}
        ></div>
      </p>
      <p>
        <div
          className="dot"
          style={{
            borderColor: "#EA0090",
            borderStyle: "solid",
            borderWidth: 2,
          }}
        ></div>
      </p>
    </>
  );
}

export function Player2Chips() {
  return (
    <>
      <p>
        <div className="dot" style={{ backgroundColor: "#00D6F2" }}></div>
      </p>
      <p>
        <div className="dot" style={{ backgroundColor: "#90EA00" }}></div>
      </p>
      <p>
        <div className="dot" style={{ backgroundColor: "#FFB100" }}></div>
      </p>
      <p>
        <div className="dot" style={{ backgroundColor: "#EA0090" }}></div>
      </p>
    </>
  );
}
