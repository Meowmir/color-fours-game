import {useNavigate} from "react-router-dom";

export function GameTitle() {
  return (
    <>
      <h1>
        <span style={{color: "#00D6F2"}}>C</span>
        <span style={{color: "#90EA00"}}>O</span>
        <span style={{color: "#FFB100"}}>L</span>
        <span style={{color: "#EA0090"}}>O</span>
        <span style={{color: "#00D6F2"}}>R</span>
      </h1>
      <h1>
        <span style={{color: "#90EA00"}}>F</span>
        <span style={{color: "#FFB100"}}>O</span>
        <span style={{color: "#EA0090"}}>U</span>
        <span style={{color: "#00D6F2"}}>R</span>
        <span style={{color: "#90EA00"}}>S</span>
      </h1>
    </>
  );
}

export function SmallGameTitle() {
  const navigate = useNavigate();

  return (
    <>
      <h2>
        <span style={{cursor: "pointer"}} onClick={() => navigate("/")}>
          <span style={{color: "#00D6F2"}}>C</span>
          <span style={{color: "#90EA00"}}>O</span>
          <span style={{color: "#FFB100"}}>L</span>
          <span style={{color: "#EA0090"}}>O</span>
          <span style={{color: "#00D6F2"}}>R</span>
          <span> </span>
          <span style={{color: "#90EA00"}}>F</span>
          <span style={{color: "#FFB100"}}>O</span>
          <span style={{color: "#EA0090"}}>U</span>
          <span style={{color: "#00D6F2"}}>R</span>
          <span style={{color: "#90EA00"}}>S</span>
        </span>
      </h2>
    </>
  );
}
