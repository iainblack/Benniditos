import {
  Fade,
  Box,
  useTheme,
  useMediaQuery,
  Typography,
  Button,
} from "@mui/material";
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
    <Fade in {...{ timeout: 2000 }}>
      <Box
        id="title-panel-container"
        sx={{
          height: "calc(100vh - 76px)",
          width: "100vw",
        }}
      >
        <Box
          id="image-slide-container"
          sx={{
            position: "relative",
            height: "95%",
            width: "100%",
            mx: "auto",
            mt: 2,
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
    </Fade>
  );
}
