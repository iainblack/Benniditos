import {
  Box,
  Button,
  Divider,
  Fade,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { TabPanel, BenniditosMenuData } from "../utils";
import BenniditosBread from "../Menu/BenniditosBreadPasta";
import BenniditosSpecialtyPizzaMenu from "../Menu/BenniditosSpecialtyPizzaMenu";
import BenniditosToppings from "../Menu/BenniditosToppings";
import BenniditosSalads from "../Menu/BenniditosSalads";
interface MenuPanelProps {
  transitionIn: boolean;
}

export function BenniditosMenu(props: MenuPanelProps) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
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
                Menu
              </Typography>
              <Box sx={{ textAlign: "center", mb: 2 }}>
                <Box sx={{ mr: { xs: 0, md: 1 } }}>
                  <Typography
                    variant="caption"
                    sx={{
                      color: theme.palette.text.secondary,
                      fontSize: 12,
                    }}
                  >
                    Crust is available in Traditional Hand Tossed <i>or</i>{" "}
                    Detroit Style (10”x14”).
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="caption"
                    sx={{
                      color: theme.palette.text.secondary,
                      fontSize: 12,
                    }}
                  >
                    GF dough available for $3 extra.
                  </Typography>
                </Box>
              </Box>
              <Tabs
                value={value}
                onChange={handleChange}
                centered
                variant={isSmallScreen ? "scrollable" : "standard"}
              >
                <Tab label="Specialty Pizzas" sx={{ textTransform: "none" }} />
                <Tab label="Build Your Own" sx={{ textTransform: "none" }} />
                <Tab label="Bread & Pasta" sx={{ textTransform: "none" }} />
                <Tab label="Salads" sx={{ textTransform: "none" }} />
                <Tab
                  label="Calzones & Sandwiches"
                  sx={{ textTransform: "none" }}
                />
                <Tab label="Etc." sx={{ textTransform: "none" }} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <BenniditosSpecialtyPizzaMenu
                theme={theme}
                isSmallScreen={isSmallScreen}
              />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <BenniditosToppings theme={theme} isSmallScreen={isSmallScreen} />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <BenniditosBread theme={theme} isSmallScreen={isSmallScreen} />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <BenniditosSalads theme={theme} isSmallScreen={isSmallScreen} />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <Box
                sx={{
                  textAlign: "center",
                  width: "100%",
                  border: "1px solid",
                  height: "calc(170vh - 76px)",
                  py: 2,
                  position: "relative",
                }}
              ></Box>
            </TabPanel>
            <TabPanel value={value} index={5}>
              <Box
                sx={{
                  textAlign: "center",
                  width: "100%",
                  border: "1px solid",
                  height: "calc(170vh - 76px)",
                  py: 2,
                  position: "relative",
                }}
              ></Box>
            </TabPanel>
          </Box>
        </Box>
      </Fade>
    </Box>
  );
}