import {
  Box,
  Fab,
  Fade,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Tab,
  Tabs,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { BenniditosMenuConfig, ScrollTop, TabPanel } from "../../utils/utils";
import BenniditosBread from "../Products/BenniditosBreadPasta";
import BenniditosSpecialtyPizzaMenu from "../Products/BenniditosPizzaMenu";
import BenniditosToppings from "../Products/BenniditosToppings";
import BenniditosSalads from "../Products/BenniditosSalads";
import BenniditosCalzoneSammies from "../Products/BenniditosCalzoneSammies";
import BenniditosDessertSoda from "../Products/BenniditosDessertSoda";
import SectionHeader from "../SectionHeader";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

interface MenuPanelProps {
  transitionIn: boolean;
  data: BenniditosMenuConfig;
}

export function MenuPanel(props: MenuPanelProps) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeSreen = useMediaQuery(theme.breakpoints.up("md"));
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const handleSelectChange = (event: SelectChangeEvent) => {
    setValue(parseInt(event.target.value));
  };

  const containerRef = React.useRef<HTMLDivElement>(null);
  return (
    <Box
      id="back-to-top-anchor"
      sx={{
        height: "fit-content",
        width: "100%",
      }}
    >
      <Box ref={containerRef}>
        <Fade in={props.transitionIn} timeout={1000}>
          <Box>
            <SectionHeader title="MENU" imagePath={"/ditosMain.jpg"} />
            <Box sx={{ backgroundColor: "white" }}>
              {!isSmallScreen && (
                <Tabs
                  value={value}
                  onChange={handleChange}
                  centered={isSmallScreen ? false : true}
                  variant={isSmallScreen ? "scrollable" : "standard"}
                  sx={{ backgroundColor: "white", border: 1, borderBottom: 0 }}
                >
                  <Tab
                    label="Pizzas"
                    sx={{ textTransform: "none", fontFamily: "subheader" }}
                  />
                  <Tab
                    label="Toppings"
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
              )}
              {isSmallScreen && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    minWidth: 120,
                    border: 1,
                    borderBottom: 0,
                    backgroundColor: "white",
                    pt: 2,
                  }}
                >
                  <FormControl sx={{ textAlign: "center" }}>
                    <Select
                      value={value.toString()}
                      onChange={handleSelectChange}
                      variant="standard"
                      inputProps={{ MenuProps: { disableScrollLock: true } }}
                      sx={{ fontFamily: "subheader", minWidth: 120 }}
                    >
                      <MenuItem
                        value={0}
                        sx={{
                          fontFamily: "subheader",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        Pizzas
                      </MenuItem>
                      <MenuItem
                        value={1}
                        sx={{
                          fontFamily: "subheader",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        Toppings
                      </MenuItem>
                      <MenuItem
                        value={2}
                        sx={{
                          fontFamily: "subheader",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        Bread & Pasta
                      </MenuItem>
                      <MenuItem
                        value={3}
                        sx={{
                          fontFamily: "subheader",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        Salads
                      </MenuItem>
                      <MenuItem
                        value={4}
                        sx={{
                          fontFamily: "subheader",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        Calzones & Sandwiches
                      </MenuItem>
                      <MenuItem
                        value={5}
                        sx={{
                          fontFamily: "subheader",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        Desserts & Soda
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              )}

              <TabPanel value={value} index={0}>
                <BenniditosSpecialtyPizzaMenu
                  theme={theme}
                  isSmallScreen={isSmallScreen}
                  data={props.data}
                />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <BenniditosToppings
                  theme={theme}
                  isSmallScreen={isSmallScreen}
                  data={props.data}
                />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <BenniditosBread
                  theme={theme}
                  isSmallScreen={isSmallScreen}
                  data={props.data}
                />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <BenniditosSalads
                  theme={theme}
                  isSmallScreen={isSmallScreen}
                  data={props.data}
                />
              </TabPanel>
              <TabPanel value={value} index={4}>
                <BenniditosCalzoneSammies
                  theme={theme}
                  isSmallScreen={isSmallScreen}
                  data={props.data}
                />
              </TabPanel>
              <TabPanel value={value} index={5}>
                <BenniditosDessertSoda
                  theme={theme}
                  isSmallScreen={isSmallScreen}
                  data={props.data}
                />
              </TabPanel>
            </Box>
          </Box>
        </Fade>
        <ScrollTop>
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </Box>
    </Box>
  );
}
