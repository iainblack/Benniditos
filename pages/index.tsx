import {
  CssBaseline,
  Box,
  ThemeProvider,
  AppBar,
  Typography,
  Divider,
} from "@mui/material";
import { BackgroundWrapper, PanelContainer } from "@/src/components/styles";
import theme from "@/Theme";
import { useEffect } from "react";
import React from "react";
import Header from "@/src/components/header";
import { SouthHillPanel } from "@/src/components/Panels/SouthHillPanel";
import { HideOnScroll } from "@/src/utils/utils";
import { BenniditosDeliveryPanel } from "@/src/components/Panels/DeliveryPanel";
import bg3 from "@/public/bg3.jpeg";
import SlideShowPanel from "@/src/components/Panels/SlideShowPanel";
import TitlePanel from "@/src/components/Panels/TitlePanel";
import FooterPanel from "@/src/components/Panels/FooterPanel";
import SectionHeader from "@/src/components/SectionHeader";
import { BrewPubPanel } from "@/src/components/Panels/BrewPubPanel";
import { ReservationsPanel } from "@/src/components/Panels/ReservationsPanel";

interface AppBarState {
  transparent: boolean;
  elevated: boolean;
  logo: boolean;
  display: boolean;
}

export default function BenniditosHome() {
  const [AppBarState, setAppBarState] = React.useState<AppBarState>({
    transparent: true,
    elevated: false,
    logo: false,
    display: true,
  });

  const aboutUsRef = React.useRef<HTMLDivElement>(null);
  const locationsRef = React.useRef<HTMLDivElement>(null);
  const southHillRef = React.useRef<HTMLDivElement>(null);
  const brewPubRef = React.useRef<HTMLDivElement>(null);
  const deliveryRef = React.useRef<HTMLDivElement>(null);
  const reservationsRef = React.useRef<HTMLDivElement>(null);
  const contactRef = React.useRef<HTMLDivElement>(null);

  const scrollToLocations = () => {
    locationsRef.current &&
      locationsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  const scrollToSouthHill = () => {
    southHillRef.current &&
      southHillRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  const scrollToBrewPub = () => {
    brewPubRef.current &&
      brewPubRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

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
        locationsRef.current &&
          locationsRef.current.scrollIntoView({
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
      case 3:
        reservationsRef.current &&
          reservationsRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        break;
      case 4:
        contactRef.current &&
          contactRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        break;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.visualViewport?.height && window.scrollY < 5) {
        setAppBarState({
          transparent: true,
          elevated: false,
          logo: false,
          display: true,
        });
      }
      if (
        window.visualViewport?.height &&
        window.scrollY > 5 &&
        window.scrollY < window.visualViewport?.height
      ) {
        setAppBarState({
          ...AppBarState,
          display: false,
        });
      }
      if (
        window.visualViewport?.height &&
        window.scrollY > window.visualViewport?.height
      ) {
        setAppBarState({
          transparent: false,
          elevated: false,
          logo: true,
          display: true,
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
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HideOnScroll>
          <AppBar
            sx={{
              display: AppBarState.display ? "flex" : "none",
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
        <BackgroundWrapper backgroundColor="black">
          <TitlePanel
            scrollToSouthHill={scrollToSouthHill}
            scrollToBrewPub={scrollToBrewPub}
          />
        </BackgroundWrapper>
        <Box sx={{ width: "100%" }}>
          <Divider color="black" />
        </Box>
        <BackgroundWrapper backgroundColor="white">
          <PanelContainer id="slideshow-container" ref={aboutUsRef}>
            <SlideShowPanel scrollToLocations={scrollToLocations} />
          </PanelContainer>
        </BackgroundWrapper>
        <Box sx={{ width: "100%" }}>
          <Divider color="black" />
        </Box>
        <BackgroundWrapper>
          <Box
            ref={locationsRef}
            sx={{
              backgroundColor: "white",
              mt: 5,
              mb: 3,
              mx: { xs: 2, sm: 0 },
              p: 2,
              pb: 1,
              border: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Typography variant="h3" fontFamily="header" color="primary.main">
              OUR LOCATIONS
            </Typography>
          </Box>
        </BackgroundWrapper>
        <PanelContainer id="south-hill-container" ref={southHillRef}>
          <SouthHillPanel transitionIn />
        </PanelContainer>
        <BackgroundWrapper>
          <PanelContainer id="delivery-container" ref={deliveryRef}>
            <BenniditosDeliveryPanel transitionIn />
          </PanelContainer>
        </BackgroundWrapper>
        <BackgroundWrapper>
          <PanelContainer id="brewpub-container" ref={brewPubRef}>
            <BrewPubPanel transitionIn />
          </PanelContainer>
        </BackgroundWrapper>
        <BackgroundWrapper>
          <PanelContainer
            id="reservations-container"
            ref={reservationsRef}
            contentHeight
          >
            <ReservationsPanel transitionIn />
          </PanelContainer>
        </BackgroundWrapper>
        <Box sx={{ width: "100%" }}>
          <Divider color="black" />
        </Box>
        <BackgroundWrapper ref={contactRef}>
          <FooterPanel />
        </BackgroundWrapper>
      </Box>
    </ThemeProvider>
  );
}
