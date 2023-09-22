import { Alert, Snackbar } from "@mui/material";
import React from "react";

export function EmptyNameAlert({
  player1,
  player2,
  noAlerts,
}: {
  player1?: string;
  player2?: string;
  noAlerts: boolean;
}) {
  const [openAlertEmptyName, setOpenAlertEmptyName] = React.useState(false);

  if (player1 === "" || player2 === "") {
    setOpenAlertEmptyName(true);
    setTimeout(() => {
      setOpenAlertEmptyName(false);
    }, 3000);
  } else {
    noAlerts = true;
  }

  return (
    <Snackbar
      open={openAlertEmptyName}
      onClose={() => setOpenAlertEmptyName(false)}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert severity="error" sx={{ width: "100%" }}>
        Player name can't be empty.
      </Alert>
    </Snackbar>
  );
}

export function ShortNameAlert({
  player1,
  player2,
  noAlerts,
}: {
  player1?: string;
  player2?: string;
  noAlerts: boolean;
}) {
  const [openAlertShortName, setOpenAlertShortName] = React.useState(false);

  if (
    (player1 !== "" && player1!.length < 3) ||
    (player2 !== "" && player2!.length < 3)
  ) {
    setOpenAlertShortName(true);
    setTimeout(() => {
      setOpenAlertShortName(false);
    }, 3000);
  } else {
    noAlerts = true;
  }

  return (
    <Snackbar
      open={openAlertShortName}
      onClose={() => setOpenAlertShortName(false)}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert severity="error" sx={{ width: "100%" }}>
        Player name can't be less than 3 characters.
      </Alert>
    </Snackbar>
  );
}

export function LongNameAlert({
  player1,
  player2,
  noAlerts,
}: {
  player1?: string;
  player2?: string;
  noAlerts: boolean;
}) {
  const [openAlertLongName, setOpenAlertLongName] = React.useState(false);

  if (
    (player1 !== "" && player1!.length > 10) ||
    (player2 !== "" && player2!.length > 10)
  ) {
    setOpenAlertLongName(true);
    setTimeout(() => {
      setOpenAlertLongName(false);
    }, 3000);
  } else {
    noAlerts = true;
  }

  return (
    <Snackbar
      open={openAlertLongName}
      onClose={() => setOpenAlertLongName(false)}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert severity="error" sx={{ width: "100%" }}>
        Player name can't be more than 10 characters.
      </Alert>
    </Snackbar>
  );
}
