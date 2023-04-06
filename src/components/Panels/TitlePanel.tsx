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

import { Box, useTheme, useMediaQuery, Slide } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

interface TitlePanelProps {
  handleTabChange: (event: React.SyntheticEvent, newValue: number) => void;
  backgroundImage: StaticImageData;
  otherLocationName: string;
  otherLocationPath: string;
  isBrewPub?: boolean;
}

export default function TitlePanel(props: TitlePanelProps) {
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
    <Slide
      in
      direction="up"
      timeout={1000}
      easing={{
        enter: "cubic-bezier(0, 1.5, .8, 1)",
        exit: "linear",
      }}
    >
      <Box
        sx={{
          height: "calc(100vh - 76px)",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          mx: "auto",
          py: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            border: 3,
            height: "calc(90vh - 76px)",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "calc(90vh - 76px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              mx: "auto",
              p: 2,
            }}
          >
            <Box id="slide-container">
              <Fade ref={null} {...slideProps}>
                {fadeImages.map((fadeImage, index) => (
                  <Box
                    key={index}
                    {...slideProps}
                    sx={{
                      width: "100%",
                      height: {
                        xs: "calc(85vh - 76px)",
                        sm: "calc(80vh - 76px)",
                      },
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
    </Slide>
  );
}
