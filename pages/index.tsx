import {
  CssBaseline,
  Box,
  ThemeProvider,
  AppBar,
  Typography,
  Divider,
  Fade,
  useMediaQuery,
  Slide,
} from "@mui/material";
import {
  BackgroundWrapper,
  PanelContainer,
  SectionHeader,
} from "@/src/components/styles";
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
import ImageSlider from "@/src/components/imageSlider";
import Image from "next/image";

interface AppBarState {
  transparent: boolean;
  elevated: boolean;
  logo: boolean;
  display: boolean;
}

interface TransitionState {
  aboutUsTransitionIn: boolean;
  southHillTransitionIn: boolean;
  southHillImageTransitionIn: boolean;
  brewPubTransitionIn: boolean;
  brewPubImageTransitionIn: boolean;
  deliveryTransitionIn: boolean;
  mapTransitionIn: boolean;
  reservationsTransitionIn: boolean;
}

export default function BenniditosHome() {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));
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
      southHillImageTransitionIn: false,
      brewPubTransitionIn: false,
      brewPubImageTransitionIn: false,
      deliveryTransitionIn: false,
      mapTransitionIn: false,
      reservationsTransitionIn: false,
    }
  );

  const aboutUsRef = React.useRef<HTMLDivElement>(null);
  const locationsRef = React.useRef<HTMLDivElement>(null);
  const southHillRef = React.useRef<HTMLDivElement>(null);
  const southHillImageRef = React.useRef<HTMLDivElement>(null);
  const brewPubRef = React.useRef<HTMLDivElement>(null);
  const brewPubImageRef = React.useRef<HTMLDivElement>(null);
  const deliveryRef = React.useRef<HTMLDivElement>(null);
  const mapRef = React.useRef<HTMLDivElement>(null);
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
      const southHillImageTop = southHillImageRef.current?.offsetTop;
      const brewPubTop = brewPubRef.current?.offsetTop;
      const brewPubImageTop = brewPubImageRef.current?.offsetTop;
      const deliveryTop = deliveryRef.current?.offsetTop;
      const mapTop = mapRef.current?.offsetTop;
      const reservationsTop = reservationsRef.current?.offsetTop;

      if (
        aboutUsTop &&
        !transitionState.aboutUsTransitionIn &&
        scrollPosition > aboutUsTop - 500
      ) {
        setTransitionState({
          ...transitionState,
          aboutUsTransitionIn: true,
        });
      }
      if (
        southHillTop &&
        !transitionState.southHillTransitionIn &&
        scrollPosition > southHillTop - 600
      ) {
        setTransitionState({
          ...transitionState,
          southHillTransitionIn: true,
        });
      }
      if (
        southHillImageTop &&
        !transitionState.southHillImageTransitionIn &&
        scrollPosition > southHillImageTop - 600
      ) {
        setTransitionState({
          ...transitionState,
          southHillImageTransitionIn: true,
        });
      }
      if (
        brewPubTop &&
        !transitionState.brewPubTransitionIn &&
        scrollPosition > brewPubTop - 600
      ) {
        setTransitionState({
          ...transitionState,
          brewPubTransitionIn: true,
        });
      }
      if (
        brewPubImageTop &&
        !transitionState.brewPubImageTransitionIn &&
        scrollPosition > brewPubImageTop - 600
      ) {
        setTransitionState({
          ...transitionState,
          brewPubImageTransitionIn: true,
        });
      }
      if (
        deliveryTop &&
        !transitionState.deliveryTransitionIn &&
        scrollPosition > deliveryTop - 600
      ) {
        setTransitionState({
          ...transitionState,
          deliveryTransitionIn: true,
        });
      }
      if (
        mapTop &&
        !transitionState.mapTransitionIn &&
        scrollPosition > mapTop - 600
      ) {
        setTransitionState({
          ...transitionState,
          mapTransitionIn: true,
        });
      }
      if (
        reservationsTop &&
        !transitionState.reservationsTransitionIn &&
        scrollPosition > reservationsTop - 600
      ) {
        setTransitionState({
          ...transitionState,
          reservationsTransitionIn: true,
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [AppBarState, transitionState]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        id="benniditosHome"
        sx={{
          backgroundColor: "#fefcf9",
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
        <Box sx={{ width: "100%", mt: 3 }}>
          <Divider color="black" />
        </Box>
        <BackgroundWrapper backgroundImage={bg.src} ref={aboutUsRef}>
          <SectionHeader isSmallScreen={isSmallScreen}>
            <Typography variant="h3" fontFamily="header" color="primary.main">
              ABOUT US
            </Typography>
          </SectionHeader>
        </BackgroundWrapper>
        <Box sx={{ width: "100%" }}>
          <Divider color="black" />
        </Box>
        <BackgroundWrapper backgroundColor="#fefcf9">
          <PanelContainer id="slideshow-container" contentHeight>
            <SlideShowPanel
              scrollToLocations={scrollToLocations}
              transitionIn={transitionState.aboutUsTransitionIn}
            />
          </PanelContainer>
        </BackgroundWrapper>
        <Box sx={{ width: "100%" }}>
          <Divider color="black" />
        </Box>
        <BackgroundWrapper backgroundImage={bg.src} ref={locationsRef}>
          <SectionHeader>
            <Typography variant="h3" fontFamily="header" color="primary.main">
              OUR LOCATIONS
            </Typography>
          </SectionHeader>
        </BackgroundWrapper>
        <Box sx={{ width: "100%", mb: { xs: 2, md: 4 } }}>
          <Divider color="black" />
        </Box>
        <BackgroundWrapper backgroundColor="#fefcf9" ref={southHillRef}>
          <Fade in={transitionState.southHillTransitionIn} timeout={1000}>
            <PanelContainer
              id="south-hill-container"
              contentHeight
              backgroundColor="#fefcf9"
            >
              <SouthHillPanel
                transitionIn={transitionState.southHillTransitionIn}
              />
              {!isLargeScreen && (
                <Slide
                  in={transitionState.southHillImageTransitionIn}
                  timeout={1000}
                  direction="right"
                >
                  <Box
                    ref={southHillImageRef}
                    sx={{
                      width: "100%",
                      minHeight: "50vh",
                      height: "50vh",
                      boxShadow: 8,
                      order: 2,
                      display: "flex",
                      padding: 0,
                      mt: 4,
                      mb: 2,
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <ImageSlider
                        urls={[
                          "/ditosOutside.jpg",
                          "/south hill3.jpg",
                          "/chris2.jpg",
                        ]}
                      />
                    </Box>
                  </Box>
                </Slide>
              )}
            </PanelContainer>
          </Fade>
        </BackgroundWrapper>
        <BackgroundWrapper backgroundColor="#fefcf9" ref={brewPubRef}>
          <Fade in={transitionState.brewPubTransitionIn} timeout={1000}>
            <PanelContainer id="brewpub-container" contentHeight>
              <BrewPubPanel
                transitionIn={transitionState.brewPubTransitionIn}
              />
              {!isLargeScreen && (
                <Slide
                  in={transitionState.brewPubImageTransitionIn}
                  timeout={1000}
                  direction="right"
                >
                  <Box
                    ref={brewPubImageRef}
                    sx={{
                      position: "relative",
                      width: "100%",
                      minHeight: "50vh",
                      height: "50vh",
                      order: 2,
                      display: "flex",
                      boxShadow: 8,
                      padding: 0,
                      mt: 4,
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                      }}
                    >
                      <ImageSlider
                        urls={[
                          "/brewpubOutside.jpeg",
                          "/betterbeer.jpeg",
                          "/box 2.jpg",
                        ]}
                      />
                    </Box>
                  </Box>
                </Slide>
              )}
            </PanelContainer>
          </Fade>
        </BackgroundWrapper>
        <Box sx={{ width: "100%", mt: 4 }}>
          <Divider color="black" />
        </Box>
        <BackgroundWrapper backgroundImage={bg.src}>
          <SectionHeader>
            <Typography variant="h3" fontFamily="header" color="primary.main">
              OUR SERVICES
            </Typography>
          </SectionHeader>
        </BackgroundWrapper>
        <Box sx={{ width: "100%", mb: 4 }}>
          <Divider color="black" />
        </Box>
        <BackgroundWrapper backgroundColor="#fefcf9" ref={deliveryRef}>
          <Fade in={transitionState.deliveryTransitionIn} timeout={1000}>
            <PanelContainer id="delivery-container">
              <BenniditosDeliveryPanel
                transitionIn={transitionState.deliveryTransitionIn}
              />
            </PanelContainer>
          </Fade>
        </BackgroundWrapper>
        <BackgroundWrapper backgroundColor="#fefcf9" ref={reservationsRef}>
          <Fade in={transitionState.reservationsTransitionIn} timeout={1000}>
            <PanelContainer id="reservations-container" contentHeight>
              <ReservationsPanel
                transitionIn={transitionState.reservationsTransitionIn}
              />
            </PanelContainer>
          </Fade>
        </BackgroundWrapper>
        <BackgroundWrapper ref={contactRef}>
          <FooterPanel />
        </BackgroundWrapper>
      </Box>
    </ThemeProvider>
  );
}
