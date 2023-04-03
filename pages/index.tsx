import {
  CssBaseline,
  Box,
  ThemeProvider,
  Fade,
  Slide,
  Typography,
  Button,
} from "@mui/material";
import theme from "@/Theme";
import React from "react";
import Image from "next/image";
import background1 from "@/public/oven.jpg";
import Link from "next/link";
import LocationIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

interface ScrollState {
  aboutMeTransitionIn: boolean;
  experienceTransitionIn: boolean;
  portfolioTransitionIn: boolean;
  tabValue: number | false;
}

export default function Home() {
  const [animateTopLabel, setAnimateTopLabel] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setAnimateTopLabel(true);
    }, 1000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Fade in {...{ timeout: 2000 }}>
        <Box
          id="background-container"
          sx={{
            height: "100vh",
            width: "100vw",
          }}
        >
          <Box
            id="content-container"
            sx={{ mx: "auto", height: "100%", width: "100%" }}
          >
            {/* <Fade in={animateTopLabel} timeout={1000}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ textAlign: "left" }}>
                  <Typography
                    variant="h5"
                    sx={{ color: theme.palette.text.primary }}
                  >
                    Welcome to Benniditos!
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ color: theme.palette.text.secondary }}
                  >
                    Which location are you looking for?
                  </Typography>
                </Box>
              </Box>
            </Fade> */}
            <Box
              id="logos-container"
              sx={{
                height: "100%",
                width: "100%",
                display: { xs: "box", md: "flex" },
                justifyContent: "space-between",
              }}
            >
              <Slide
                in
                direction="up"
                {...{ timeout: 1000 }}
                easing={{
                  enter: "cubic-bezier(0, 1.5, .8, 1)",
                  exit: "linear",
                }}
              >
                <Box
                  id="benniditos-container"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mx: "auto",
                  }}
                >
                  <Link
                    href="/BenniditosHome"
                    style={{
                      textTransform: "none",
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    <Box
                      id="benniditos-info-container"
                      sx={{
                        textAlign: "center",
                        border: `1px solid white`,
                        borderRadius: "10px",
                        backgroundImage: `url(${background1.src})`,
                        backgroundSize: "cover",
                        overflow: "hidden",
                        backgroundPosition: "center",
                        transition: "all 0.2s ease-in-out",
                        "&:hover": {
                          transform: "scale(1.05)",
                          cursor: "pointer",
                        },
                        mb: { xs: 3, md: 0 },
                        height: "60vh",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          backgroundColor: "rgba(0,0,0,0.7)",
                          p: { xs: 4, md: 6 },
                        }}
                      >
                        <Box
                          id="benniditos-logo-container"
                          sx={{
                            position: "relative",
                            width: "100%",
                            height: "200px",
                          }}
                        >
                          <Image
                            src={"/ditosLogo.png"}
                            alt={"Benniditos"}
                            fill
                            style={{
                              marginBottom: theme.spacing(3),
                              objectFit: "contain",
                            }}
                          />
                        </Box>

                        <Box sx={{ display: "flex", justifyContent: "left" }}>
                          <LocationIcon sx={{ mr: 2 }} fontSize="small" />
                          <Typography
                            variant="body1"
                            sx={{
                              mb: 3,
                            }}
                          >
                            1426 S Lincoln St, Spokane, WA 99203
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "left",
                          }}
                        >
                          <PhoneIcon sx={{ mr: 2 }} fontSize="small" />
                          <Typography variant="body1" sx={{ mb: 3 }}>
                            509-455-7411
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Link>
                </Box>
              </Slide>
              <Slide
                in
                direction="up"
                {...{ timeout: 1000 }}
                easing={{
                  enter: "cubic-bezier(0, 1.5, .8, 1)",
                  exit: "linear",
                }}
              >
                <Box
                  id="brewpub-container"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "40%",
                    height: "100%",
                    mx: "auto",
                  }}
                >
                  <Link
                    href="/BenniditosHome"
                    style={{
                      textTransform: "none",
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    <Box
                      id="brewpub-info-container"
                      sx={{
                        textAlign: "center",
                        border: `1px solid white`,
                        borderRadius: "10px",
                        backgroundImage: `url(${background1.src})`,
                        backgroundSize: "cover",
                        overflow: "hidden",
                        backgroundPosition: "center",
                        transition: "all 0.2s ease-in-out",
                        "&:hover": {
                          transform: "scale(1.05)",
                          cursor: "pointer",
                        },
                        height: "60vh",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          backgroundColor: "rgba(0,0,0,0.7)",
                          p: { xs: 4, md: 6 },
                        }}
                      >
                        <Box
                          id="brewpub-logo-container"
                          sx={{
                            position: "relative",
                            width: "100%",
                            height: "200px",
                          }}
                        >
                          <Image
                            src={"/brewpubLogoCropped.png"}
                            alt={"Brewpub"}
                            fill
                            style={{
                              marginBottom: theme.spacing(3),
                              objectFit: "contain",
                            }}
                          />
                        </Box>

                        <Box sx={{ display: "flex", justifyContent: "left" }}>
                          <LocationIcon sx={{ mr: 2 }} fontSize="small" />
                          <Typography
                            variant="body1"
                            sx={{
                              mb: 3,
                            }}
                          >
                            1426 S Lincoln St, Spokane, WA 99203
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "left",
                          }}
                        >
                          <PhoneIcon sx={{ mr: 2 }} fontSize="small" />
                          <Typography variant="body1" sx={{ mb: 3 }}>
                            509-455-7411
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Link>
                </Box>
              </Slide>
            </Box>
          </Box>
        </Box>
      </Fade>
    </ThemeProvider>
  );
}
