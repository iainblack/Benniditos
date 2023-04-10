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
import React, { useEffect } from "react";

interface TitlePanelProps {
  scrollToFirst?: () => void;
}

export default function TitlePanel(props: TitlePanelProps) {
  const [animateLabel, setAnimateLabel] = React.useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setAnimateLabel(true);
    }, 1000);
  }, []);

  return (
    <Box
      ref={containerRef}
      // className={isSmallScreen ? "ripTitleSmall" : "ripTitleLarge"}
      sx={{
        height: { xs: "100vh", md: "100vh" },
        width: "100vw",
        mt: { xs: -10, sm: 0 },
      }}
    >
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <Image
          src="/chris2.jpg"
          fill
          sizes="100%"
          alt="alt"
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center top",
            filter: "brightness(0.7)",
          }}
        />
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: { xs: "flex-start", md: "space-around" },
            alignItems: "center",
            textAlign: "center",
            zIndex: 1,
            position: "relative",
          }}
        >
          <Box sx={{ mt: { xs: 16, md: 10 } }}>
            <Slide
              in
              timeout={1000}
              direction={"up"}
              container={containerRef.current}
            >
              <Box
                sx={{
                  mt: 8,
                  display: "flex",
                  justifyContent: "center",
                  height: "25vh",
                  width: { xs: "80vw", md: "35vw" },
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <Image
                  src={"/ditosLogo.png"}
                  alt="Benniditos"
                  fill
                  sizes="100%"
                  priority
                  style={{
                    objectFit: "contain",
                    objectPosition: "center",
                    zIndex: 1,
                  }}
                />
              </Box>
            </Slide>
          </Box>
          {!isSmallScreen && (
            <Slide
              in={animateLabel}
              direction="up"
              timeout={1000}
              container={containerRef.current}
            >
              <Box
                sx={{
                  mt: 6,
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-evenly",
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
                        fontWeight="bold"
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
                        fontWeight="bold"
                        sx={{ color: "white", fontFamily: "body" }}
                      >
                        Reservations. Carry-Out. Same great Pizza.
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
