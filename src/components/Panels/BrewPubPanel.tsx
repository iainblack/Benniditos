import { BenniditosInfo, BrewPubInfo } from "@/src/utils/utils";
import {
  Box,
  Button,
  Divider,
  Fade,
  Slide,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import ImageSlider from "../imageSlider";

interface BrewPubPanelProps {
  transitionIn: boolean;
}

export function BrewPubPanel(props: BrewPubPanelProps) {
  const router = useRouter();
  const theme = useTheme();
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
      <Slide in={props.transitionIn} timeout={1000} direction="right">
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
                  width: { xs: "100%", xl: "70%" },
                  minHeight: { xs: "50vh", lg: "90vh" },
                  height: { xs: "50vh", xl: "unset" },
                  order: { xs: 2, xl: 1 },
                  display: "flex",
                  boxShadow: 8,
                  padding: { xs: 0, xl: 3 },
                  mt: { xs: 4, xl: 0 },
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
                  <ImageSlider
                    urls={[
                      "/brewpubOutside.jpeg",
                      "/betterbeer.jpeg",
                      "/box 2.jpg",
                    ]}
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
                  order: { xs: 1, xl: 2 },
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
                    Bennidito&apos;s BrewPub
                  </Typography>
                  <Divider
                    sx={{
                      mb: 2,
                      mx: { xs: "15%", sm: "30%", md: "20%" },
                      borderBottomStyle: "dashed",
                    }}
                  />
                  <BrewPubInfo theme={theme} />
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
                        router.push("/BrewPubMenu");
                      }}
                    >
                      View Menu
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
