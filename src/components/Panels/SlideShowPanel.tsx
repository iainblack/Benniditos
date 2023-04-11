import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "keen-slider/keen-slider.min.css";
import {
  Box,
  useTheme,
  useMediaQuery,
  Slide,
  Typography,
  Link,
  Divider,
} from "@mui/material";
import React, { useEffect } from "react";
import ImageSlider from "../imageSlider";
import { useRouter } from "next/router";

interface SlideShowPanelProps {
  scrollToLocations: () => void;
}

export default function SlideShowPanel(props: SlideShowPanelProps) {
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
        mt: { xs: 2, md: 4 },
      }}
    >
      <Box>
        <Typography
          variant="h3"
          fontFamily={"header"}
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 1,
            textAlign: "center",
            color: "primary.main",
          }}
        >
          ABOUT US
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          my: 3,
          textAlign: "center",
        }}
      >
        <Typography fontFamily={"body"} variant="body1">
          Bennidito&apos;s has been <b>family owned and operated since 1996</b>.
          We have{" "}
          <Link
            onClick={props.scrollToLocations}
            sx={{ textDecoration: "none" }}
          >
            two locations
          </Link>
          , one on the South Hill and the other on East Sprague.
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "white",
          width: "100%",
          my: 6,
          maxHeight: { xs: "40vh", md: "50vh", lg: "60vh" },
        }}
      >
        <ImageSlider />
      </Box>
    </Box>
  );
}
