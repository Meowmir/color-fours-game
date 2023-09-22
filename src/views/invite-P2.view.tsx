import Grid from "@mui/material/Unstable_Grid2";
import { Chip } from "../components/chip";
import { Box, Button, ButtonProps } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { darkerGreenColor, greenColor } from "../constants";
import { useCopyToClipboard } from "../hooks/use-copy-to-clipboard.hook";

const StyledSpinner = styled("img")(({ theme }) => ({
  animation: "circles@2x infinite 700ms linear",
  transformBox: "fill-box",

  "@keyframes circles@2x": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
}));

const StyledInviteButton = styled(Button)<ButtonProps>((theme) => ({
  color: "black",
  backgroundColor: greenColor,
  "&:hover": {
    backgroundColor: darkerGreenColor,
  },
}));

export function InviteP2View() {
  const [buttonText, setButtonText] = useState("COPY INVITE LINK");
  const currentUrl = window.location.href;
  const copy = useCopyToClipboard();

  return (
    <div style={{ marginTop: 30 }}>
      <Grid container spacing={0}>
        <Grid xs={2}>
          <Chip color="blue" />
          <Chip color="green" />
          <Chip color="orange" />
          <Chip color="pink" />
        </Grid>
        <Grid xs={8}>
          <Box>
            <StyledSpinner
              style={{ width: "20%" }}
              src={"/circles@2x.png"}
              sx={{
                animation: "spin 8s linear infinite",
                "@keyframes spin": {
                  "0%": {
                    transform: "rotate(0deg)",
                  },
                  "100%": {
                    transform: "rotate(360deg)",
                  },
                },
              }}
            />
            <h2>WAITING FOR PLAYER 2</h2>
            <StyledInviteButton
              variant="contained"
              onClick={() => {
                copy(currentUrl);
                setButtonText("LINK COPIED");
              }}
            >
              {buttonText}
            </StyledInviteButton>
          </Box>
        </Grid>
        <Grid xs={2}>
          <Chip fill color="blue" />
          <Chip fill color="green" />
          <Chip fill color="orange" />
          <Chip fill color="pink" />
        </Grid>
      </Grid>
    </div>
  );
}
