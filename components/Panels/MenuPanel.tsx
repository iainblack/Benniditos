import {
  Box,
  Button,
  Fade,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { TabPanel } from "../utils";

interface MenuPanelProps {
  transitionIn: boolean;
}

export function BenniditosMenu(props: MenuPanelProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const containerRef = React.useRef<HTMLDivElement>(null);
  const theme = useTheme();
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
              <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Box
                sx={{
                  textAlign: "center",
                  width: "100%",
                  border: "1px solid",
                  height: "calc(170vh - 76px)",
                  py: 2,
                  position: "relative",
                }}
              >
                {/* <Box sx={{ justifyContent: "center", mb: 6 }}>
                  <Typography sx={{ textAlign: "center", mb: 3 }} variant="h4">
                    Hours
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    <b>Monday - Thursday</b>
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    11:00 AM - 10:00 PM
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    <b>Friday</b>
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    11:00 AM - 11:00 PM
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    <b>Saturday</b>
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    11:00 AM - 10:00 PM
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    <b>Sunday</b>
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    12:00 PM - 9:00 PM
                  </Typography>
                </Box> */}
                {/* <iframe
                  src="/pizzaMenu1.pdf#zoom=90"
                  style={{
                    height: "100%",
                    width: "100%",
                    border: "none",
                  }}
                /> */}
              </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
          </Box>
        </Box>
      </Fade>
    </Box>
  );
}
