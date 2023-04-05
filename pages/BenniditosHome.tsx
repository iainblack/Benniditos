import {
  CssBaseline,
  Box,
  ThemeProvider,
  Divider,
  Slide,
  useScrollTrigger,
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
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
import { HideOnScroll } from "@/src/utils/utils";
import { BenniditosDeliveryPanel } from "@/src/components/Panels/DeliveryPanel";
import bg3 from "@/public/bg3.jpeg";
import { BenniditosAboutUs } from "@/src/components/Panels/BenniditosAboutUs";

interface ScrollState {
  hoursTransitionIn: boolean;
  deliveryTransitionIn: boolean;
  menuTransitionIn: boolean;
  tapListTransitionIn: boolean;
  tabValue: number | false;
}

export default function BenniditosHome() {
  const [scrollState, setScrollState] = React.useState<ScrollState>({
    hoursTransitionIn: false,
    deliveryTransitionIn: false,
    menuTransitionIn: false,
    tapListTransitionIn: false,
    tabValue: false,
  });

  const hoursRef = React.useRef<HTMLDivElement>(null);
  const deliveryRef = React.useRef<HTMLDivElement>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const tapListRef = React.useRef<HTMLDivElement>(null);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    switch (newValue) {
      case 0:
        hoursRef.current &&
          hoursRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        break;
      case 1:
        deliveryRef.current &&
          deliveryRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        break;
      case 2:
        menuRef.current &&
          menuRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        break;
      case 3:
        tapListRef.current &&
          tapListRef.current.scrollIntoView({
            behavior: "smooth",
          });
        break;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const hoursTop = hoursRef.current?.offsetTop;
      const deliveryTop = deliveryRef.current?.offsetTop;
      const menuTop = menuRef.current?.offsetTop;
      const tapListTop = tapListRef.current?.offsetTop;
      const scrollPosition = window.scrollY;
      if (hoursTop && scrollPosition < hoursTop) {
        setScrollState({
          ...scrollState,
          hoursTransitionIn: true,
        });
      } else if (deliveryTop && scrollPosition < deliveryTop) {
        setScrollState({
          ...scrollState,
          hoursTransitionIn: true,
          deliveryTransitionIn: true,
        });
      } else if (menuTop && scrollPosition < menuTop) {
        setScrollState({
          ...scrollState,
          hoursTransitionIn: true,
          deliveryTransitionIn: true,
          menuTransitionIn: true,
        });
      } else if (tapListTop && scrollPosition < tapListTop) {
        setScrollState({
          ...scrollState,
          hoursTransitionIn: true,
          deliveryTransitionIn: true,
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
        sx={{
          backgroundImage: `url(${bg3.src})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <HideOnScroll>
          <AppBar
            //position="sticky"
            color="transparent"
            sx={{
              backgroundColor: theme.palette.primary.main,
              pr: { xs: 2, lg: 6 },
              pl: { xs: 0, lg: 6 },
            }}
          >
            <Header
              tabValue={scrollState.tabValue}
              handleTabChange={handleTabChange}
            />
          </AppBar>
        </HideOnScroll>
        <PanelContainer id="title-container" noPaddingTop marginTop={"76px"}>
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
        <PanelContainer id="delivery-container" ref={deliveryRef}>
          <BenniditosDeliveryPanel
            transitionIn={scrollState.deliveryTransitionIn}
          />
        </PanelContainer>
        <PanelContainer id="menu-container" ref={menuRef}>
          <BenniditosMenu transitionIn={scrollState.menuTransitionIn} />
        </PanelContainer>
        <PanelContainer id="on-tap-container" ref={tapListRef}>
          <BenniditosOnTap transitionIn={scrollState.tapListTransitionIn} />
        </PanelContainer>
        <PanelContainer id="about-container" ref={null}>
          <BenniditosAboutUs transitionIn={scrollState.deliveryTransitionIn} />
        </PanelContainer>
      </Box>
    </ThemeProvider>
  );
}
