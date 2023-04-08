import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";
import { useKeenSlider } from "keen-slider/react";

const fadeImages = [
  {
    url: "/taps.jpg",
  },
  {
    url: "/ditosMain.jpg",
  },
  {
    url: "/ditosMain.jpg",
  },
];

import { Box, useTheme, useMediaQuery, Slide, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import ImageSlider from "../imageSlider";

export default function SlideShowPanel() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          border: 2,
          backgroundColor: "white",
          width: "100%",
          height: "60vh",
        }}
      >
        <ImageSlider />
      </Box>
    </Box>
  );
}
