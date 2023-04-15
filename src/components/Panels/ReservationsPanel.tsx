import {
  Box,
  Button,
  Divider,
  Fade,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
  Slide,
} from "@mui/material";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";

interface ReservationsPanelProps {
  transitionIn: boolean;
}

export function ReservationsPanel(props: ReservationsPanelProps) {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));
  const containerRef = React.useRef<HTMLDivElement>(null);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Slide
        in={props.transitionIn}
        timeout={1000}
        direction={isLargeScreen ? "right" : "left"}
      >
        <Box ref={containerRef}>
          <Fade in={props.transitionIn} timeout={1000}>
            <Box
              sx={{
                height: "fit-content",
                display: "flex",
                flexDirection: { xs: "column", xl: "row" },
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "70%",
                  minHeight: { xs: "fit-content", xl: "80vh" },
                  order: 1,
                  display: { xs: "none", xl: "flex" },
                  boxShadow: 8,
                  padding: 3,
                  backgroundColor: "white",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/reservations.jpeg"
                    alt="Outside"
                    fill
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  textAlign: "center",
                  width: { xs: "100%", xl: "30%" },
                  ml: { xs: 0, xl: 3 },
                  p: 4,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  backgroundColor: "white",
                  order: 2,
                  minHeight: { md: "fit-content", xl: "80vh" },
                  boxShadow: 8,
                }}
              >
                <Box
                  sx={{
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      mb: 1,
                      fontFamily: "Header",
                    }}
                    variant="h4"
                  >
                    Reservations & Carry-Out
                  </Typography>
                  <Divider
                    sx={{
                      mb: 2,
                      mx: { xs: "15%", sm: "30%", md: "20%" },
                      borderBottomStyle: "dashed",
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      mx: "auto",
                      px: 2,
                      fontFamily: "body",
                    }}
                  >
                    The BrewPub offers carry-out orders and reservations placed
                    over the phone.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box sx={{ my: 1 }}>
                    <Button
                      variant="outlined"
                      sx={{
                        textTransform: "none",
                        fontFamily: "header",
                        fontSize: theme.typography.body1.fontSize,
                        mt: { xs: 5, xl: 0 },
                      }}
                      onClick={() => {
                        window.open("tel:+5092905018", "_self");
                      }}
                    >
                      (509) 290-5018
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Fade>
        </Box>
      </Slide>
    </Box>
  );
}
