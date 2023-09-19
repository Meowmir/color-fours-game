import { blueColor, greenColor, orangeColor, pinkColor } from "../constants";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "@mui/material";

const Dot = styled("div")({
  height: 50,
  width: 50,
  borderRadius: "50%",
  borderWidth: 2,
  borderStyle: "solid",
  color: "white",
  fontSize: 40,
  marginRight: 5,
});

export function GameOverText() {
  return (
    <Container style={{ marginTop: 50 }}>
      <Grid container spacing={0}>
        <Grid>
          <Dot
            style={{
              backgroundColor: blueColor,
              borderColor: blueColor,
            }}
          >
            G
          </Dot>
        </Grid>
        <Grid>
          <Dot
            style={{
              backgroundColor: greenColor,
              borderColor: greenColor,
            }}
          >
            A
          </Dot>
        </Grid>
        <Grid>
          <Dot
            style={{
              backgroundColor: orangeColor,
              borderColor: orangeColor,
            }}
          >
            M
          </Dot>
        </Grid>
        <Grid>
          <Dot
            style={{
              backgroundColor: pinkColor,
              borderColor: pinkColor,
            }}
          >
            E
          </Dot>
        </Grid>
        <Grid>
          <Dot
            style={{
              marginLeft: 20,
              color: blueColor,
              borderColor: blueColor,
            }}
          >
            O
          </Dot>
        </Grid>
        <Grid>
          <Dot
            style={{
              color: greenColor,
              borderColor: greenColor,
            }}
          >
            V
          </Dot>
        </Grid>
        <Grid>
          <Dot
            style={{
              color: orangeColor,
              borderColor: orangeColor,
            }}
          >
            E
          </Dot>
        </Grid>
        <Grid>
          <Dot
            style={{
              float: "left",
              color: pinkColor,
              borderColor: pinkColor,
            }}
          >
            R
          </Dot>
        </Grid>
      </Grid>
    </Container>
  );
}
