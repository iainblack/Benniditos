import { BenniditosInfo } from "@/src/utils/utils";
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

interface SouthHillPanelProps {
  transitionIn: boolean;
}

export function SouthHillPanel(props: SouthHillPanelProps) {
  const router = useRouter();
  const theme = useTheme();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
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
                border: 1,
                display: { xs: "none", xl: "flex" },
              }}
            >
              <Image
                src="/ditosOutside.jpg"
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
                border: "1px solid",
                mr: { xs: 0, xl: 3 },
                p: 4,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                backgroundColor: "white",
                order: 1,
                minHeight: { xs: "fit-content", xl: "90vh" },
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
              </Box>
            </Box>
          </Box>
        </Fade>
      </Box>
    </Box>
  );
}
