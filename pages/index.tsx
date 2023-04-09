import { CssBaseline, Box, ThemeProvider, AppBar } from "@mui/material";
import { BackgroundWrapper, PanelContainer } from "@/src/components/styles";
import theme from "@/Theme";
import { useEffect } from "react";
import React from "react";
import Header from "@/src/components/header";
import { BenniditosHours } from "@/src/components/Panels/HoursLocationsPanel";
import { HideOnScroll } from "@/src/utils/utils";
import { BenniditosDeliveryPanel } from "@/src/components/Panels/DeliveryPanel";
import bg3 from "@/public/bg3.jpeg";
import SlideShowPanel from "@/src/components/Panels/SlideShowPanel";
import TitlePanel from "@/src/components/Panels/TitlePanel";
import FooterPanel from "@/src/components/Panels/FooterPanel";

interface AppBarState {
  transparent: boolean;
  elevated: boolean;
  logo: boolean;
}

export default function BenniditosHome() {
  const [AppBarState, setAppBarState] = React.useState<AppBarState>({
    transparent: true,
    elevated: false,
    logo: false,
  });

  const slideShowRef = React.useRef<HTMLDivElement>(null);
  const hoursLocationsRef = React.useRef<HTMLDivElement>(null);
  const deliveryRef = React.useRef<HTMLDivElement>(null);

  const scrollToFirst = () => {
    slideShowRef.current &&
      slideShowRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    switch (newValue) {
      case 0:
        hoursLocationsRef.current &&
          hoursLocationsRef.current.scrollIntoView({
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
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.visualViewport?.height &&
        window.scrollY > window.visualViewport?.height
      ) {
        setAppBarState({ transparent: false, elevated: true, logo: true });
      } else {
        setAppBarState({ transparent: true, elevated: false, logo: false });
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
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HideOnScroll>
          <AppBar
            sx={{
              backgroundColor: AppBarState.transparent
                ? "transparent"
                : theme.palette.primary.main,
              pr: { xs: 2, lg: 6 },
              pl: { xs: 0, lg: 6 },
            }}
            elevation={AppBarState.elevated ? 4 : 0}
          >
            <Header handleTabChange={handleTabChange} logo={AppBarState.logo} />
          </AppBar>
        </HideOnScroll>
        <TitlePanel scrollToFirst={scrollToFirst} />
        {/* <BackgroundWrapper> */}
        <PanelContainer
          id="slideshow-container"
          ref={slideShowRef}
          contentHeight
          backgroundColor="white"
        >
          <SlideShowPanel />
        </PanelContainer>
        {/* </BackgroundWrapper> */}
        {/* <BackgroundWrapper> */}
        <PanelContainer id="hours-container" ref={hoursLocationsRef}>
          <BenniditosHours transitionIn />
        </PanelContainer>
        {/* </BackgroundWrapper> */}
        <PanelContainer id="delivery-container" ref={deliveryRef}>
          <BenniditosDeliveryPanel transitionIn />
        </PanelContainer>
        <FooterPanel />
      </Box>
    </ThemeProvider>
  );
}
