import "react-slideshow-image/dist/styles.css";
import "keen-slider/keen-slider.min.css";
import { Box, Typography, Link, Slide, Fade } from "@mui/material";
import React from "react";
import ImageSlider from "../imageSlider";
interface SlideShowPanelProps {
  scrollToLocations: () => void;
  transitionIn?: boolean;
}

export default function SlideShowPanel(props: SlideShowPanelProps) {
  const urls = [
    "/slide4.jpg",
    "/slide3.jpg",
    "/slide11.5.jpg",
    "/slide1.jpg",
    "/slide5.jpg",
    "/pasta.jpg",
    "/slide6.jpg",
    "/slide7.jpg",
    "/slide8.jpg",
    "/slide10.jpg",
  ];
  return (
    <Fade in={props.transitionIn} timeout={1500}>
      <Box
        sx={{
          width: "100%",
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#fefcf9",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            my: 3,
            textAlign: "center",
            maxWidth: 700,
            mx: "auto",
          }}
        >
          <Typography fontFamily={"header"} variant="body1" letterSpacing={1}>
            Bennidito&apos;s has been{" "}
            <b>family owned and operated since 1996</b>. We have{" "}
            <Link
              onClick={props.scrollToLocations}
              sx={{ textDecoration: "none" }}
            >
              two locations
            </Link>{" "}
            in Spokane, WA - one on the South Hill and the other on East
            Sprague.
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "white",
            width: "100%",
            my: 6,
            height: { xs: "40vh", md: "50vh" },
            mx: "auto",
          }}
        >
          <ImageSlider urls={urls} loop />
        </Box>
      </Box>
    </Fade>
  );
}
