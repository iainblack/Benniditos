import {
  CssBaseline,
  Box,
  ThemeProvider,
  AppBar,
  Typography,
  Divider,
  Fade,
} from "@mui/material";
import { BackgroundWrapper, PanelContainer } from "@/src/components/styles";
import theme from "@/Theme";
import { useEffect } from "react";
import React from "react";
import Header from "@/src/components/header";
import { SouthHillPanel } from "@/src/components/Panels/SouthHillPanel";
import { HideOnScroll } from "@/src/utils/utils";
import { BenniditosDeliveryPanel } from "@/src/components/Panels/DeliveryPanel";
import bg from "@/public/bg4.jpeg";
import smallbg from "@/public/bg3.jpeg";
import SlideShowPanel from "@/src/components/Panels/SlideShowPanel";
import TitlePanel from "@/src/components/Panels/TitlePanel";
import FooterPanel from "@/src/components/Panels/FooterPanel";
import { BrewPubPanel } from "@/src/components/Panels/BrewPubPanel";
import { ReservationsPanel } from "@/src/components/Panels/ReservationsPanel";

interface AppBarState {
  transparent: boolean;
  elevated: boolean;
  logo: boolean;
  display: boolean;
}

interface TransitionState {
  aboutUsTransitionIn: boolean;
  southHillTransitionIn: boolean;
  brewPubTransitionIn: boolean;
  deliveryTransitionIn: boolean;
  reservationsTransitionIn: boolean;
}

export default function BenniditosHome() {
  const [AppBarState, setAppBarState] = React.useState<AppBarState>({
    transparent: true,
    elevated: false,
    logo: false,
    display: true,
  });

  const [transitionState, setTransitionState] = React.useState<TransitionState>(
    {
      aboutUsTransitionIn: false,
      southHillTransitionIn: false,
      brewPubTransitionIn: false,
      deliveryTransitionIn: false,
      reservationsTransitionIn: false,
    }
  );

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
      const scrollPosition = window.scrollY;
      if (window.visualViewport?.height && scrollPosition < 5) {
        setAppBarState({
          transparent: true,
          elevated: false,
          logo: false,
          display: true,
        });
      } else if (
        window.visualViewport?.height &&
        scrollPosition > 5 &&
        scrollPosition < window.visualViewport?.height
      ) {
        setAppBarState({
          ...AppBarState,
          display: false,
        });
      } else if (
        window.visualViewport?.height &&
        scrollPosition > window.visualViewport?.height
      ) {
        setAppBarState({
          transparent: false,
          elevated: false,
          logo: true,
          display: true,
        });
      }
      const aboutUsTop = aboutUsRef.current?.offsetTop;
      const southHillTop = southHillRef.current?.offsetTop;
      const brewPubTop = brewPubRef.current?.offsetTop;
      const deliveryTop = deliveryRef.current?.offsetTop;
      const reservationsTop = reservationsRef.current?.offsetTop;
      if (aboutUsTop && scrollPosition < aboutUsTop + 100) {
        setTransitionState({
          ...transitionState,
          aboutUsTransitionIn: true,
        });
      } else if (southHillTop && scrollPosition < southHillTop) {
        setTransitionState({
          ...transitionState,
          aboutUsTransitionIn: true,
          southHillTransitionIn: true,
        });
      } else if (brewPubTop && scrollPosition < brewPubTop) {
        setTransitionState({
          ...transitionState,
          aboutUsTransitionIn: true,
          southHillTransitionIn: true,
          brewPubTransitionIn: true,
        });
      } else if (deliveryTop && scrollPosition < deliveryTop) {
        setTransitionState({
          ...transitionState,
          aboutUsTransitionIn: true,
          southHillTransitionIn: true,
          brewPubTransitionIn: true,
          deliveryTransitionIn: true,
        });
      } else if (reservationsTop && scrollPosition < reservationsTop) {
        setTransitionState({
          ...transitionState,
          aboutUsTransitionIn: true,
          southHillTransitionIn: true,
          brewPubTransitionIn: true,
          deliveryTransitionIn: true,
          reservationsTransitionIn: true,
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
          backgroundImage: { xs: `url(${smallbg.src})`, sm: `url(${bg.src})` },
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
          <PanelContainer
            id="slideshow-container"
            ref={aboutUsRef}
            contentHeight
          >
            <SlideShowPanel
              scrollToLocations={scrollToLocations}
              transitionIn={transitionState.aboutUsTransitionIn}
            />
          </PanelContainer>
        </BackgroundWrapper>
        <Box sx={{ width: "100%" }}>
          <Divider color="black" />
        </Box>
        <BackgroundWrapper>
          <Fade in={transitionState.southHillTransitionIn} timeout={1000}>
            <Box
              ref={locationsRef}
              sx={{
                backgroundColor: "white",
                mb: { xs: 2, md: 4 },
                mt: { xs: 4, md: 8 },
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
          </Fade>
        </BackgroundWrapper>
        <PanelContainer
          id="south-hill-container"
          ref={southHillRef}
          contentHeight
        >
          <SouthHillPanel
            transitionIn={transitionState.southHillTransitionIn}
          />
        </PanelContainer>
        <BackgroundWrapper>
          <PanelContainer id="brewpub-container" ref={brewPubRef} contentHeight>
            <BrewPubPanel transitionIn={transitionState.brewPubTransitionIn} />
          </PanelContainer>
        </BackgroundWrapper>
        <BackgroundWrapper>
          <Fade in={transitionState.deliveryTransitionIn} timeout={1000}>
            <Box
              sx={{
                backgroundColor: "white",
                my: { xs: 2, md: 4 },
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
                OUR SERVICES
              </Typography>
            </Box>
          </Fade>
        </BackgroundWrapper>
        <BackgroundWrapper>
          <PanelContainer id="delivery-container" ref={deliveryRef}>
            <BenniditosDeliveryPanel
              transitionIn={transitionState.deliveryTransitionIn}
            />
          </PanelContainer>
        </BackgroundWrapper>
        <BackgroundWrapper>
          <PanelContainer
            id="reservations-container"
            ref={reservationsRef}
            contentHeight
          >
            <ReservationsPanel
              transitionIn={transitionState.reservationsTransitionIn}
            />
          </PanelContainer>
        </BackgroundWrapper>
        <Box sx={{ width: "100%" }}>
          <Divider color="black" sx={{ mt: { xs: 1, md: 4 } }} />
        </Box>
        <BackgroundWrapper ref={contactRef}>
          <FooterPanel />
        </BackgroundWrapper>
      </Box>
    </ThemeProvider>
  );
}
