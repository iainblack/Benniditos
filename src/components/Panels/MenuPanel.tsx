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
import BenniditosSpecialtyPizzaMenu from "../Products/BenniditosPizzaMenu";
import BenniditosToppings from "../Products/BenniditosToppings";
import BenniditosSalads from "../Products/BenniditosSalads";
import BenniditosDessertSoda from "../Products/BenniditosDessertSoda";
import SectionHeader from "../SectionHeader";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import BenniditosPasta from "../Products/BenniditosPasta";
import BenniditosStarters from "../Products/BenniditosStarters";
import BenniditosCalzones from "../Products/BenniditosCalzones";
import BenniditosSandwiches from "../Products/BenniditosSandwiches";

interface MenuPanelProps {
  transitionIn: boolean;
  header: string;
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
        width: "100vw",
      }}
    >
      <Box ref={containerRef}>
        <Fade in={props.transitionIn} timeout={1000}>
          <Box>
            <SectionHeader title={props.header} imagePath={"/ditosMain.jpg"} />
            <Box sx={{ backgroundColor: "white" }}>
              {!isSmallScreen && (
                <MenuTabs
                  data={props.data}
                  value={value}
                  isSmallScreen={isSmallScreen}
                  handleChange={handleChange}
                />
              )}
              {isSmallScreen && (
                <MenuSelect
                  data={props.data}
                  handleChange={handleSelectChange}
                  value={value}
                  isSmallScreen={isSmallScreen}
                />
              )}
            </Box>
            {Object.keys(props.data).map((item, index) => {
              return (
                <TabPanel key={index} value={value} index={index}>
                  {item === "pizza" && (
                    <BenniditosSpecialtyPizzaMenu
                      theme={theme}
                      isSmallScreen={isSmallScreen}
                      data={props.data}
                    />
                  )}
                  {item === "toppings" && (
                    <BenniditosToppings
                      theme={theme}
                      isSmallScreen={isSmallScreen}
                      data={props.data}
                    />
                  )}
                  {item === "starters" && (
                    <BenniditosStarters
                      theme={theme}
                      isSmallScreen={isSmallScreen}
                      data={props.data}
                    />
                  )}
                  {item === "calzones" && (
                    <BenniditosCalzones
                      theme={theme}
                      isSmallScreen={isSmallScreen}
                      data={props.data}
                    />
                  )}
                  {item === "salads" && (
                    <BenniditosSalads
                      theme={theme}
                      isSmallScreen={isSmallScreen}
                      data={props.data}
                    />
                  )}
                  {item === "sandwiches" && (
                    <BenniditosSandwiches
                      theme={theme}
                      isSmallScreen={isSmallScreen}
                      data={props.data}
                    />
                  )}
                  {item === "pasta" && (
                    <BenniditosPasta
                      theme={theme}
                      isSmallScreen={isSmallScreen}
                      data={props.data}
                    />
                  )}
                  {item === "desserts" && (
                    <BenniditosDessertSoda
                      theme={theme}
                      isSmallScreen={isSmallScreen}
                      data={props.data}
                    />
                  )}
                </TabPanel>
              );
            })}
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

function MenuTabs(props: {
  data: BenniditosMenuConfig;
  value: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
  isSmallScreen: boolean;
}) {
  return (
    <Tabs
      value={props.value}
      onChange={props.handleChange}
      centered={props.isSmallScreen ? false : true}
      variant={props.isSmallScreen ? "scrollable" : "standard"}
      sx={{
        backgroundColor: "white",
        border: 1,
        borderBottom: 0,
      }}
    >
      {Object.keys(props.data).map((item, index) => {
        if (item === "soda") {
          return null;
        }
        if (item === "desserts") {
          return (
            <Tab
              key={index}
              label={"desserts & soda"}
              sx={{
                textTransform: "none",
                fontFamily: "subheader",
              }}
            />
          );
        }
        return (
          <Tab
            key={index}
            label={item}
            sx={{
              textTransform: "none",
              fontFamily: "subheader",
            }}
          />
        );
      })}
    </Tabs>
  );
}

function MenuSelect(props: {
  data: BenniditosMenuConfig;
  value: number;
  handleChange: (event: SelectChangeEvent) => void;
  isSmallScreen: boolean;
}) {
  return (
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
          value={props.value.toString()}
          onChange={props.handleChange}
          variant="standard"
          inputProps={{ MenuProps: { disableScrollLock: true } }}
          sx={{ fontFamily: "subheader", minWidth: 120 }}
        >
          {Object.keys(props.data).map((item, index) => {
            if (item === "soda") {
              return null;
            }
            if (item === "desserts") {
              return (
                <MenuItem
                  key={index}
                  value={index}
                  sx={{
                    fontFamily: "subheader",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {"desserts & soda"}
                </MenuItem>
              );
            }
            return (
              <MenuItem
                key={index}
                value={index}
                sx={{
                  fontFamily: "subheader",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
