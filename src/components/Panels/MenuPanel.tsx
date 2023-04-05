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
import { TabPanel } from "../../utils/utils";
import BenniditosBread from "../Products/BenniditosBreadPasta";
import BenniditosSpecialtyPizzaMenu from "../Products/BenniditosSpecialtyPizzaMenu";
import BenniditosToppings from "../Products/BenniditosToppings";
import BenniditosSalads from "../Products/BenniditosSalads";
import BenniditosCalzoneSammies from "../Products/BenniditosCalzoneSammies";
import BenniditosDessertSoda from "../Products/BenniditosDessertSoda";
import { InfoBox } from "../styles";
interface MenuPanelProps {
  transitionIn: boolean;
}

export function BenniditosMenu(props: MenuPanelProps) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
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
            <Box sx={{ backgroundColor: "white" }}>
              <InfoBox>
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
              </InfoBox>
              <Tabs
                value={value}
                onChange={handleChange}
                centered
                variant={isSmallScreen ? "scrollable" : "standard"}
                sx={{ backgroundColor: "white", border: 1, borderBottom: 0 }}
              >
                <Tab
                  label="Specialty Pizzas"
                  sx={{ textTransform: "none", fontFamily: "subheader" }}
                />
                <Tab
                  label="Build Your Own"
                  sx={{ textTransform: "none", fontFamily: "subheader" }}
                />
                <Tab
                  label="Bread & Pasta"
                  sx={{ textTransform: "none", fontFamily: "subheader" }}
                />
                <Tab
                  label="Salads"
                  sx={{ textTransform: "none", fontFamily: "subheader" }}
                />
                <Tab
                  label="Calzones & Sandwiches"
                  sx={{ textTransform: "none", fontFamily: "subheader" }}
                />
                <Tab
                  label="Desserts & Soda"
                  sx={{ textTransform: "none", fontFamily: "subheader" }}
                />
              </Tabs>

              <TabPanel value={value} index={0}>
                <BenniditosSpecialtyPizzaMenu
                  theme={theme}
                  isSmallScreen={isSmallScreen}
                />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <BenniditosToppings
                  theme={theme}
                  isSmallScreen={isSmallScreen}
                />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <BenniditosBread theme={theme} isSmallScreen={isSmallScreen} />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <BenniditosSalads theme={theme} isSmallScreen={isSmallScreen} />
              </TabPanel>
              <TabPanel value={value} index={4}>
                <BenniditosCalzoneSammies
                  theme={theme}
                  isSmallScreen={isSmallScreen}
                />
              </TabPanel>
              <TabPanel value={value} index={5}>
                <BenniditosDessertSoda
                  theme={theme}
                  isSmallScreen={isSmallScreen}
                />
              </TabPanel>
            </Box>
          </Box>
        </Fade>
      </Box>
    </Box>
  );
}
