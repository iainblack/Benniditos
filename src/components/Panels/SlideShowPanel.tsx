import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

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

interface TitlePanelProps {
  handleTabChange: (event: React.SyntheticEvent, newValue: number) => void;
  backgroundImage: StaticImageData;
}

export default function SlideShowPanel(props: TitlePanelProps) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const slideProps = {
    duration: 3000,
    autoplay: true,
    transitionDuration: 500,
    infinite: true,
    easing: "ease",
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        mx: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          border: 3,
          height: "80vh",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "70vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            mx: "auto",
            px: { xs: 2, md: 5 },
          }}
        >
          <Box id="slide-container">
            <Fade ref={null} {...slideProps}>
              {fadeImages.map((fadeImage, index) => (
                <Box
                  key={index}
                  sx={{
                    width: "100%",
                    height: { xs: "75vh", md: "70vh" },
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={fadeImage.url}
                  />
                </Box>
              ))}
            </Fade>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
