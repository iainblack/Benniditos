import "react-slideshow-image/dist/styles.css";
import "keen-slider/keen-slider.min.css";
import { Box, useTheme, Typography, Link, Slide, Fade } from "@mui/material";
import React, { useEffect } from "react";
import ImageSlider from "../imageSlider";
import pizza from "@/public/pizza.png";
import Image from "next/image";
interface SlideShowPanelProps {
  scrollToLocations: () => void;
  transitionIn?: boolean;
}

export default function SlideShowPanel(props: SlideShowPanelProps) {
  return (
    <Fade in={props.transitionIn} timeout={1500}>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "white",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            mb: { xs: 6, md: 10 },
          }}
        >
          <Box
            sx={{
              width: { xs: 35, sm: 55 },
              height: { xs: 35, sm: 55 },
              position: "relative",
            }}
          >
            <Image
              src={pizza.src}
              alt="pizza"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </Box>
        </Box>
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
            height: "50vh",
          }}
        >
          <ImageSlider />
        </Box>
      </Box>
    </Fade>
  );
}
