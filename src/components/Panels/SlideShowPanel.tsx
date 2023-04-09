import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "keen-slider/keen-slider.min.css";
import { Box, useTheme, useMediaQuery, Slide, Typography } from "@mui/material";
import React, { useEffect } from "react";
import ImageSlider from "../imageSlider";

export default function SlideShowPanel() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          border: 2,
          backgroundColor: "white",
          width: "100%",
          height: { xs: "40vh", md: "50vh", lg: "60vh" },
        }}
      >
        <ImageSlider />
      </Box>
    </Box>
  );
}
