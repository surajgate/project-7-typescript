import React from "react";
import { Container, Box, Typography, Card } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Review from "./Review";

const useStyles = makeStyles({
  underline: {
    height: "0.25rem",
    background: "lightblue",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

function App() {
  const classes = useStyles();

  return (
    <>
      <Container sx={{ width: "40rem" }}>
        <Card sx={{ m: 2, p: 2 }}>
          <Box>
            <Typography
              variant="h2"
              sx={{ display: "flex", justifyContent: "center", m: 0.5 }}
            >
              Our Reviews
            </Typography>
          </Box>
          <Container
            sx={{ width: "10%" }}
            className={classes.underline}
          ></Container>
          <Box>
            <Review />
          </Box>
        </Card>
      </Container>
    </>
    // <main>
    //   <section className="conatiner">
    //     <div className="title">
    //       <h2>Our Reviews</h2>
    //       <div className="underline"></div>
    //     </div>
    //     <Review />
    //   </section>
    // </main>
  );
}

export default App;
