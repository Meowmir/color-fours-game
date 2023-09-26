import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Divider } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  backgroundColor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  padding: 4,
};

export default function LinksModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Typography onClick={handleOpen} style={{ cursor: "pointer" }}>
        About
        <HelpOutlineIcon style={{ verticalAlign: "text-top", height: 19 }} />
      </Typography>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Divider textAlign="center" sx={{ mb: 2 }}>
            How to play
          </Divider>
          <Typography>
            Gameplay:
            <ul>
              <li>Each player has their own four colored dots.</li>
              <li>It's randomized which player gets to go first.</li>
              <li>Players can choose to place any of the available colors.</li>
              <li>The placed color will be unavailable next round.</li>
              <li>
                When the last available color has been placed, all colors will
                be available to place again.
              </li>
            </ul>
          </Typography>
          <Typography>
            Winning:
            <ul>
              <li>
                First player to get four colors in a row with their dots win.
              </li>
              <li>Possible to win diagonally, horizontally and vertically.</li>
              <li>
                If no one has placed four in a row when the board is full, it's
                a draw.
              </li>
            </ul>
          </Typography>
          <Divider textAlign="center" sx={{ mb: 2 }}>
            Find me:
          </Divider>
          <Typography mb={2}>
            Created by Nora Disewji:
            <a
              href="https://www.linkedin.com/in/nora-disewji/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon style={{ verticalAlign: "text-top" }} />
            </a>
            <a
              href="https://github.com/Meowmir"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon style={{ verticalAlign: "text-top" }} />
            </a>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
