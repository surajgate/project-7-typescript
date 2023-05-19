import { Box, Button, CardMedia, Container, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { useState } from "react";

import { makeStyles } from "@mui/styles";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import people from "../data/data";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const useStyles = makeStyles({
  image: {},
});

const Review = () => {
  const classes = useStyles();
  const [index, setIndex] = useState<number>(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number: number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) randomNumber = index + 1;

    setIndex(checkNumber(randomNumber));
  };

  return (
    <>
      <Container sx={{ position: "relative" }}>
        <Carousel
          NextIcon={<ArrowForwardIosIcon />}
          PrevIcon={<ArrowBackIosNewIcon />}
          autoPlay
          stopAutoPlayOnHover
          interval={2000}
          next={() => {
            nextPerson();
          }}
          prev={() => {
            prevPerson();
          }}
          
        >
          <Container>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                m: 2,
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                }}
              >
                <CardMedia
                  className={classes.image}
                  component="img"
                  src={image}
                  alt={name}
                  sx={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    position: "relative",
                    display: "block",
                  }}
                />
                <Box
                  component="span"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "2.5rem",
                    height: "2.5rem",
                    display: "grid",
                    placeItems: "center",
                    borderRadius: "50%",
                    transform: "translateY(25%)",
                    background: "lightblue",
                    color: "white",
                  }}
                >
                  <FaQuoteRight />
                </Box>
              </Box>
            </Box>

            <Typography
              sx={{ display: "flex", justifyContent: "center", p: 1 }}
              variant="h4"
            >
              {name}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                display: "flex",
                justifyContent: "center",
                p: 1,
                color: "blueviolet",
              }}
            >
              {job}
            </Typography>
            <Typography
              paragraph
              sx={{
                display: "flex",
                justifyContent: "center",
                p: 1,
                textAlign: "center",
              }}
            >
              {text}{" "}
            </Typography>

            {/* <Box sx={{ display: "flex", justifyContent: "center", m: 2 }}>
              <Button variant="text" onClick={prevPerson}>
                <FaChevronLeft />
              </Button>
              <Button variant="text" onClick={nextPerson}>
                <FaChevronRight />
              </Button>
            </Box> */}
            {/* <Box sx={{ display: "flex", justifyContent: "center", m: 2 }}>
              <Button
                sx={{ display: "flex", justifyContent: "center" }}
                variant="outlined"
                onClick={randomPerson}
              >
                Surprise Me
              </Button>
            </Box> */}
          </Container>
        </Carousel>
      </Container>
    </>
    // <article className="review">
    //   <div className="img-container">
    //     <img src={image} alt={name} className="person-img" />
    //     <span className="quote-icon">
    //       <FaQuoteRight />
    //     </span>
    //   </div>
    //   <h4 className="author">{name}</h4>
    //   <p className="job">{job}</p>
    //   <p className="info">{text}</p>
    //   <div className="button-container">
    //     <button className="prev-btn" onClick={prevPerson}>
    //       <FaChevronLeft />
    //     </button>
    //     <button className="next-btn" onClick={nextPerson}>
    //       <FaChevronRight />
    //     </button>
    //   </div>
    //   <button className="random-btn" onClick={randomPerson}>
    //     Suprise me
    //   </button>
    // </article>
  );
};

export default Review;
