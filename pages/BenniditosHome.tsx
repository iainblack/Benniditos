import { CssBaseline, Box, ThemeProvider, Divider } from "@mui/material";
import { PanelContainer } from "@/src/components/styles";
import theme from "@/Theme";
import { useEffect } from "react";
import React from "react";
import Header from "@/src/components/header";
import background from "@/public/ditosMain.jpg";
import { BenniditosHours } from "@/src/components/Panels/HoursLocation";
import TitlePanel from "@/src/components/Panels/TitlePanel";
import { BenniditosMenu } from "@/src/components/Panels/MenuPanel";
import { BenniditosOnTap } from "@/src/components/Panels/OnTapPanel";

interface ScrollState {
  hoursTransitionIn: boolean;
  menuTransitionIn: boolean;
  tapListTransitionIn: boolean;
  tabValue: number | false;
}

export default function BenniditosHome() {
  const [scrollState, setScrollState] = React.useState<ScrollState>({
    hoursTransitionIn: false,
    menuTransitionIn: false,
    tapListTransitionIn: false,
    tabValue: false,
  });

  const hoursRef = React.useRef<HTMLDivElement>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const tapListRef = React.useRef<HTMLDivElement>(null);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    switch (newValue) {
      case 0:
        hoursRef.current &&
          hoursRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start",
          });
        break;
      case 1:
        menuRef.current &&
          menuRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        break;
      case 2:
        tapListRef.current &&
          tapListRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        break;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const hoursTop = hoursRef.current?.offsetTop;
      const menuTop = menuRef.current?.offsetTop;
      const tapListTop = tapListRef.current?.offsetTop;
      const scrollPosition = window.scrollY;
      if (hoursTop && scrollPosition < hoursTop + 50) {
        setScrollState({
          ...scrollState,
          hoursTransitionIn: true,
        });
      } else if (menuTop && scrollPosition < menuTop + 50) {
        setScrollState({
          ...scrollState,
          hoursTransitionIn: true,
          menuTransitionIn: true,
        });
      } else if (tapListTop && scrollPosition < tapListTop + 50) {
        setScrollState({
          ...scrollState,
          hoursTransitionIn: true,
          menuTransitionIn: true,
          tapListTransitionIn: true,
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        id="benniditosHome"
        sx={{ height: "100vh", width: "100vw", backgroundColor: "white" }}
      >
        <Header
          tabValue={scrollState.tabValue}
          handleTabChange={handleTabChange}
        />
        <PanelContainer noPaddingTop marginTop={"76px"}>
          <TitlePanel
            handleTabChange={handleTabChange}
            backgroundImage={background}
            otherLocationName="Go to BrewPub"
            otherLocationPath="/BrewPubHome"
          />
        </PanelContainer>
        <PanelContainer id="hours-container" ref={hoursRef}>
          <BenniditosHours transitionIn={scrollState.hoursTransitionIn} />
        </PanelContainer>
        <PanelContainer id="menu-container" ref={menuRef}>
          <BenniditosMenu transitionIn={scrollState.menuTransitionIn} />
        </PanelContainer>
        <PanelContainer id="on-tap-container" ref={tapListRef}>
          <BenniditosOnTap transitionIn={scrollState.tapListTransitionIn} />
        </PanelContainer>
      </Box>
    </ThemeProvider>
  );
}
