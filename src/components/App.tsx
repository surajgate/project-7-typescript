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
      <Container>
        <Box sx={{ m: 4 }}>
          <Typography
          fontSize={40}
          letterSpacing={2}
            color={"#324d67"}
            variant="h2"
            sx={{ display: "flex", justifyContent: "center", m: 0.5 }}
          >
            Reviews
          </Typography>
        </Box>
        {/* <Card sx={{ m: 2, p: 2 }}> */}
        {/* <Container
            sx={{ width: "10%" }}
            className={classes.underline}
          ></Container> */}
        <Box>
          <Review />
        </Box>
        {/* </Card> */}
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
