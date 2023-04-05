import { Fade, Box, useTheme, useMediaQuery, Slide } from "@mui/material";
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
        id="title-panel-container"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "calc(100vh - 76px)",
        }}
      >
        <Box
          id="image-slide-container"
          sx={{
            position: "relative",
            height: "90%",
            width: "100%",
            border: 1,
          }}
        >
          <Image
            src={"/ditosMain.jpg"}
            fill
            alt="ditos"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </Box>
      </Box>
    </Slide>
  );
}
