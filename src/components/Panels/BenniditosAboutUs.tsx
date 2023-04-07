import {
  Box,
  Button,
  Divider,
  Fade,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import SectionHeader from "../SectionHeader";

interface AboutUsProps {
  transitionIn: boolean;
}

export function BenniditosAboutUs(props: AboutUsProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box ref={containerRef}>
        <Fade in={props.transitionIn} timeout={1000}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column" },
              justifyContent: "space-evenly",
            }}
          >
            <SectionHeader title="ABOUT US" imagePath={"/ditosMain.jpg"} />
            <Box
              sx={{
                textAlign: "center",
                width: "100%",
                border: "1px solid",
                p: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: "white",
                order: 2,
                minHeight: "30vh",
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
                    p: 2,
                    fontFamily: "body",
                  }}
                  variant="body1"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse ut risus convallis, aliquet felis sit amet,
                  vulputate tellus. Sed mattis quis nunc eu maximus. Ut eget
                  feugiat nisi, nec varius nibh. Proin pharetra scelerisque
                  metus vitae finibus. Aliquam suscipit est vitae ligula iaculis
                  sollicitudin. Vivamus eget convallis turpis. Phasellus sed
                  libero dui. Vestibulum ante ipsum primis in faucibus orci
                  luctus et ultrices posuere cubilia curae; Sed at mauris sit
                  amet odio egestas egestas.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Box>
    </Box>
  );
}
