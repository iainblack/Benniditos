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
} from "@mui/material";
import React, { useEffect } from "react";
import ImageSlider from "../imageSlider";
import { useRouter } from "next/router";

interface SlideShowPanelProps {
  scrollToLocations: () => void;
}

export default function SlideShowPanel(props: SlideShowPanelProps) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();

  return (
    <Box
      className={isSmallScreen ? "ripBottomSmall" : "ripBottomLarge"}
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "white",
        mb: 1,
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
          <b>Family owned and operated since 1996</b>, Bennidito&apos;s has been
          serving Spokane, WA for over 25 years. Both of our{" "}
          <Link
            onClick={props.scrollToLocations}
            sx={{ textDecoration: "none" }}
          >
            two locations
          </Link>{" "}
          use only the freshest ingredients in our delicious pizzas, salads,
          sandwiches, and pasta. We are also known for our high quality{" "}
          <Link
            onClick={() => {
              router.push("/OnTap");
            }}
            sx={{ textDecoration: "none" }}
          >
            beers
          </Link>{" "}
          that are brewed in-house. We promote a relaxed and friendly
          atmosphere, making Bennidito&apos;s Pizza the perfect spot to enjoy a
          meal with friends and family, or catch the game while sipping on one
          of our tasty brews.
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "white",
          width: "100%",
          my: 2,
          height: { xs: "40vh", md: "50vh", lg: "60vh" },
        }}
      >
        <ImageSlider />
      </Box>
    </Box>
  );
}
