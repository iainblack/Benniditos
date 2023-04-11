import { BenniditosInfo, BrewPubInfo } from "@/src/utils/utils";
import {
  Box,
  Button,
  Divider,
  Fade,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";

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
                minHeight: "90vh",
                order: 2,
                display: { xs: "none", xl: "flex" },
              }}
            >
              <Image
                src="/brewpubOutside.jpeg"
                alt="Outside"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </Box>
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
                order: { xs: 1, xl: 1 },
                minHeight: { xs: "fit-content", xl: "90vh" },
                border: 1,
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
    </Box>
  );
}
