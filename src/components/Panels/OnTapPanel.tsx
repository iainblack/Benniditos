import { Box, Fade, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Image, { StaticImageData } from "next/image";
import BenniditosTapList from "../Products/BenniditosTapList";
interface MenuPanelProps {
  transitionIn: boolean;
}

export function BenniditosOnTap(props: MenuPanelProps) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const containerRef = React.useRef<HTMLDivElement>(null);
  return (
    <Box
      sx={{
        height: "fit-content",
        width: "100%",
        py: 3,
      }}
    >
      <Box ref={containerRef}>
        <Fade in={props.transitionIn} timeout={1000}>
          <Box>
            <Box>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Typography sx={{ textAlign: "center", mb: 3 }} variant="h4">
                  Tap List
                </Typography>
              </Box>
              <Box>
                <BenniditosTapList
                  theme={theme}
                  isSmallScreen={isSmallScreen}
                />
              </Box>
            </Box>
          </Box>
        </Fade>
      </Box>
    </Box>
  );
}
