import { Box, Fade, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import BenniditosTapList from "../Products/BenniditosTapList";
import SectionHeader from "../SectionHeader";
import { BenniditosTapListData } from "@/src/utils/BenniditosTapListData";
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
      }}
    >
      <Box ref={containerRef} sx={{ backgroundColor: "white" }}>
        <Fade in={props.transitionIn} timeout={1000}>
          <Box>
            <Box>
              <SectionHeader title="TAP LIST" imagePath="/taps.jpg" />
              <Box>
                <BenniditosTapList
                  theme={theme}
                  isSmallScreen={isSmallScreen}
                  data={BenniditosTapListData}
                />
              </Box>
            </Box>
          </Box>
        </Fade>
      </Box>
    </Box>
  );
}
