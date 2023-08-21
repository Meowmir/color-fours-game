import { Box, Checkbox, Grid } from "@mui/material";
import React from "react";

export function BoardGrid() {
  return (
    <Box mt={10} mb={60} mr={60} ml={55} sx={{ align: "center" }}>
      <Grid
        container
        spacing={1}
        sx={{
          background: "black",
          borderWidth: "1px",
          borderTop: "solid",
          borderLeft: "solid",
          "& > div": {
            borderBottom: "solid",
            borderRight: "solid",
          },
        }}
      >
        {Array.from(Array(144)).map((_, index) => (
          <Grid sx={{ flexGrow: 1 }} key={index}>
            <Checkbox />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
