import {
  Box,
  useTheme,
  useMediaQuery,
  Slide,
  Typography,
  Button,
  Fade,
  IconButton,
} from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import bg from "@/public/ditosTitle2.jpg";
import React, { useEffect } from "react";

interface TitlePanelProps {}

export default function TitlePanel(props: TitlePanelProps) {
  const [animateLabel, setAnimateLabel] = React.useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const slideProps = {
    duration: 3000,
    autoplay: true,
    transitionDuration: 500,
    infinite: true,
    easing: "ease",
  };

  useEffect(() => {
    setTimeout(() => {
      setAnimateLabel(true);
    }, 1000);
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        mb: { xs: 4, md: 8 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.8)",
          p: 3,
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Box sx={{ mt: 6 }}>
            <Slide in timeout={1000}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  height: "30vh",
                  width: { xs: "70vw", md: "40vw" },
                  position: "relative",
                }}
              >
                <Image
                  src={"/ditosLogo.png"}
                  alt="Benniditos"
                  fill
                  sizes="100%"
                  style={{ objectFit: "contain", objectPosition: "center" }}
                />
              </Box>
            </Slide>
          </Box>
          <Slide in={animateLabel} direction="up" timeout={1000}>
            <Box sx={{ mt: 6 }}>
              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: theme.palette.primary.main,
                    fontFamily: "subheader",
                  }}
                >
                  Benniditos Pizza
                </Typography>
                <Box>
                  <Button
                    size="large"
                    onClick={() => {
                      window.open(
                        "http://maps.google.com/?q=1426 S Lincoln St, Spokane, WA 99203",
                        "_blank"
                      );
                    }}
                    sx={{
                      fontFamily: "body",
                      textTransform: "none",
                      fontSize: theme.typography.body1.fontSize,
                      color: "white",
                      "&:hover": {
                        color: theme.palette.primary.main,
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    1426 S Lincoln St, Spokane, WA 99203
                  </Button>
                </Box>
                <Button
                  size="large"
                  sx={{
                    textTransform: "none",
                    fontFamily: "body",
                    fontSize: theme.typography.body1.fontSize,
                    color: "white",
                    "&:hover": {
                      color: theme.palette.primary.main,
                      backgroundColor: "transparent",
                    },
                  }}
                  onClick={() => {
                    window.open("tel:+5094557411", "_blank");
                  }}
                >
                  509-455-7411
                </Button>
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: theme.palette.secondary.main,
                    fontFamily: "subheader",
                  }}
                >
                  Benniditos BrewPub
                </Typography>
                <Box>
                  <Button
                    size="large"
                    onClick={() => {
                      window.open(
                        "http://maps.google.com/?q=1909 E Sprague Ave, Spokane, WA 99202",
                        "_blank"
                      );
                    }}
                    sx={{
                      textTransform: "none",
                      fontFamily: "body",
                      fontSize: theme.typography.body1.fontSize,
                      color: "white",
                      "&:hover": {
                        color: theme.palette.secondary.main,
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    1909 E Sprague Ave, Spokane, WA 99202
                  </Button>
                </Box>
                <Button
                  size="large"
                  sx={{
                    textTransform: "none",
                    fontFamily: "body",
                    fontSize: theme.typography.body1.fontSize,
                    color: "white",
                    "&:hover": {
                      color: theme.palette.secondary.main,
                      backgroundColor: "transparent",
                    },
                  }}
                  onClick={() => {
                    window.open("tel:+5092905018", "_blank");
                  }}
                >
                  509-290-5018
                </Button>
              </Box>
            </Box>
          </Slide>
        </Box>
      </Box>
    </Box>
  );
}
