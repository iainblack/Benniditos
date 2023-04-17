import { BenniditosInfo } from "@/src/utils/utils";
import {
  Box,
  Button,
  Divider,
  Fade,
  Slide,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import ImageSlider from "../imageSlider";

interface SouthHillPanelProps {
  transitionIn: boolean;
}

export function SouthHillPanel(props: SouthHillPanelProps) {
  const router = useRouter();
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
      <Slide in={props.transitionIn} timeout={1000} direction="left">
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
              {isLargeScreen && (
                <Box
                  sx={{
                    width: "70%",
                    minHeight: { xs: "50vh", lg: "90vh" },
                    height: { xs: "50vh", xl: "unset" },
                    boxShadow: 8,
                    order: 2,
                    display: "flex",
                    padding: { xs: 0, xl: 3 },
                    mt: { xs: 4, xl: 0 },
                    mb: { xs: 2, xl: 0 },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <ImageSlider
                      urls={[
                        "/ditosOutside.jpg",
                        "/south hill3.jpg",
                        "/chris2.jpg",
                      ]}
                    />
                  </Box>
                </Box>
              )}
              <Box
                sx={{
                  textAlign: "center",
                  width: { xs: "100%", xl: "30%" },
                  mr: { xs: 0, xl: 3 },
                  p: 4,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  backgroundColor: "white",
                  order: 1,
                  minHeight: { xs: "fit-content", xl: "90vh" },
                  boxShadow: 8,
                }}
              >
                <Box
                  sx={{
                    justifyContent: "center",
                    mb: 2,
                  }}
                >
                  <Typography
                    sx={{ textAlign: "center", mb: 1, fontFamily: "Header" }}
                    variant="h4"
                  >
                    Bennidito&apos;s Pizza
                  </Typography>
                  <Divider
                    sx={{
                      mb: 2,
                      mx: { xs: "15%", sm: "30%", md: "20%" },
                      borderBottomStyle: "dashed",
                    }}
                  />
                  <BenniditosInfo theme={theme} />
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
                      }}
                      onClick={() => {
                        router.push("/BenniditosMenu");
                      }}
                    >
                      View Menu
                    </Button>
                  </Box>
                  <Box sx={{ my: 1 }}>
                    <Button
                      variant="outlined"
                      sx={{
                        textTransform: "none",
                        fontFamily: "header",
                        fontSize: theme.typography.body1.fontSize,
                      }}
                      onClick={() => {
                        window.open(
                          "https://weborder7.microworks.com/benniditos/",
                          "_blank"
                        );
                      }}
                    >
                      Order Online
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
