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
      ref={containerRef}
      sx={{
        height: { xs: "calc( 140vh - 76px)", md: "calc(90vh - 76px)" },
        width: "100vw",
      }}
    >
      <Fade in={props.transitionIn} timeout={1000}>
        <Box>
          <Box>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Typography sx={{ textAlign: "center", mb: 3 }} variant="h4">
                Tap List
              </Typography>
            </Box>
            <Box>
              <BenniditosTapList theme={theme} isSmallScreen={isSmallScreen} />
            </Box>
          </Box>
        </Box>
      </Fade>
    </Box>
  );
}
