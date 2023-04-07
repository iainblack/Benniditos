import { CssBaseline, Box, ThemeProvider, AppBar } from "@mui/material";
import { PanelContainer } from "@/src/components/styles";
import theme from "@/Theme";
import { useEffect } from "react";
import React from "react";
import Header from "@/src/components/header";
import background from "@/public/ditosMain.jpg";
import { BenniditosHours } from "@/src/components/Panels/HoursLocationsPanel";
import { HideOnScroll } from "@/src/utils/utils";
import { BenniditosDeliveryPanel } from "@/src/components/Panels/DeliveryPanel";
import bg3 from "@/public/bg3.jpeg";
import { BenniditosAboutUs } from "@/src/components/Panels/BenniditosAboutUs";
import SlideShowPanel from "@/src/components/Panels/SlideShowPanel";
import TitlePanel from "@/src/components/Panels/TitlePanel";
import FooterPanel from "@/src/components/Panels/FooterPanel";

interface AppBarState {
  transparent: boolean;
  elevated: boolean;
}

export default function BenniditosHome() {
  const [AppBarState, setAppBarState] = React.useState<AppBarState>({
    transparent: true,
    elevated: false,
  });
  const aboutUsRef = React.useRef<HTMLDivElement>(null);
  const hoursLocationsRef = React.useRef<HTMLDivElement>(null);
  const deliveryRef = React.useRef<HTMLDivElement>(null);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    switch (newValue) {
      case 0:
        aboutUsRef.current &&
          aboutUsRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        break;
      case 1:
        hoursLocationsRef.current &&
          hoursLocationsRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        break;
      case 2:
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
        setAppBarState({ transparent: false, elevated: true });
      } else {
        setAppBarState({ transparent: true, elevated: false });
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
            sx={{
              backgroundColor: AppBarState.transparent
                ? "transparent"
                : theme.palette.primary.main,
              pr: { xs: 2, lg: 6 },
              pl: { xs: 0, lg: 6 },
            }}
            elevation={AppBarState.elevated ? 4 : 0}
          >
            <Header handleTabChange={handleTabChange} />
          </AppBar>
        </HideOnScroll>
        <TitlePanel />
        <PanelContainer id="about-container" ref={aboutUsRef}>
          <BenniditosAboutUs transitionIn />
        </PanelContainer>
        <PanelContainer id="slideshow-container">
          <SlideShowPanel
            handleTabChange={handleTabChange}
            backgroundImage={background}
          />
        </PanelContainer>
        <PanelContainer id="hours-container" ref={hoursLocationsRef}>
          <BenniditosHours transitionIn />
        </PanelContainer>
        <PanelContainer id="delivery-container" ref={deliveryRef}>
          <BenniditosDeliveryPanel transitionIn />
        </PanelContainer>
        <FooterPanel />
      </Box>
    </ThemeProvider>
  );
}
