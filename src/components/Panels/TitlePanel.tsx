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
import chris from "@/public/chris2.jpg";
import React, { useEffect } from "react";

interface TitlePanelProps {
  scrollToFirst: () => void;
}

export default function TitlePanel(props: TitlePanelProps) {
  const [animateLabel, setAnimateLabel] = React.useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    setTimeout(() => {
      setAnimateLabel(true);
    }, 1000);
  }, []);

  return (
    <Box
      className="ripBottom"
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${chris.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.7)",
          p: 3,
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: { xs: "flex-start", md: "space-around" },
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Box sx={{ mt: 6 }}>
            <Slide in timeout={1000} direction={"down"}>
              <Box
                sx={{
                  mt: 8,
                  display: "flex",
                  justifyContent: "center",
                  height: "25vh",
                  width: { xs: "80vw", md: "35vw" },
                  position: "relative",
                }}
              >
                <Image
                  src={"/ditosLogo.png"}
                  alt="Benniditos"
                  fill
                  sizes="100%"
                  priority
                  style={{ objectFit: "contain", objectPosition: "center" }}
                />
              </Box>
            </Slide>
          </Box>
          {!isSmallScreen && (
            <Slide in={animateLabel} direction="up" timeout={1000}>
              <Box
                sx={{
                  mt: 6,
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-around",
                }}
              >
                <Box>
                  <Box sx={{ mb: 2 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "white",
                        fontFamily: "header",
                        mb: 1,
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
                          color: theme.palette.primary.main,
                          "&:hover": {
                            backgroundColor: "transparent",
                            color: "white",
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
                        color: theme.palette.primary.main,
                        "&:hover": {
                          backgroundColor: "transparent",
                          color: "white",
                        },
                      }}
                      onClick={() => {
                        window.open("tel:+5094557411", "_blank");
                      }}
                    >
                      509-455-7411
                    </Button>
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{ color: "white", fontFamily: "body" }}
                      >
                        Delivery. Online Orders. Great Pizza.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "white",
                      fontFamily: "header",
                      mb: 1,
                    }}
                  >
                    Benniditos BrewPub
                  </Typography>
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
                      color: theme.palette.primary.main,
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "white",
                      },
                    }}
                  >
                    1909 E Sprague Ave, Spokane, WA 99202
                  </Button>
                  <Box>
                    <Button
                      size="large"
                      sx={{
                        textTransform: "none",
                        fontFamily: "body",
                        fontSize: theme.typography.body1.fontSize,
                        color: "theme.palette.primary.main",
                        "&:hover": {
                          backgroundColor: "transparent",
                          color: "white",
                        },
                      }}
                      onClick={() => {
                        window.open("tel:+5092905018", "_blank");
                      }}
                    >
                      509-290-5018
                    </Button>
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{ color: "white", fontFamily: "body" }}
                      >
                        Huge Tap Selection. Carry-Out. Still great Pizza.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Slide>
          )}
        </Box>
      </Box>
    </Box>
  );
}
