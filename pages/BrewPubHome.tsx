import { CssBaseline, Box, ThemeProvider } from "@mui/material";
import { PanelContainer } from "@/src/components/styles";
import theme from "@/Theme";
import { useEffect } from "react";
import React from "react";
import TitlePanel from "@/src/components/Panels/LogoPanel";
import background from "@/public/ditosMain.jpg";
import logo from "@/public/brewpubLogoCropped.png";

interface ScrollState {
  aboutMeTransitionIn: boolean;
  experienceTransitionIn: boolean;
  portfolioTransitionIn: boolean;
  tabValue: number | false;
}

export default function BrewPubHome() {
  const [scrollState, setScrollState] = React.useState<ScrollState>({
    aboutMeTransitionIn: false,
    experienceTransitionIn: false,
    portfolioTransitionIn: false,
    tabValue: false,
  });

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    //switch (newValue) {
    //   case 0:
    //     aboutMeRef.current &&
    //       aboutMeRef.current.scrollIntoView({
    //         behavior: "smooth",
    //         block: "start",
    //       });
    //     break;
    //   case 1:
    //     experienceRef.current &&
    //       experienceRef.current.scrollIntoView({
    //         behavior: "smooth",
    //         block: "start",
    //       });
    //     break;
    //   case 2:
    //     portfolioRef.current &&
    //       portfolioRef.current.scrollIntoView({
    //         behavior: "smooth",
    //         block: "start",
    //       });
    //     break;
    // }
  };

  useEffect(() => {
    const handleScroll = () => {
      // const aboutMeTop = aboutMeRef.current?.offsetTop;
      // const experienceTop = experienceRef.current?.offsetTop;
      // const portfolioTop = portfolioRef.current?.offsetTop;
      // const scrollPosition = window.scrollY;
      // if (aboutMeTop && scrollPosition < aboutMeTop) {
      //   setScrollState({
      //     ...scrollState,
      //     tabValue: 0,
      //     aboutMeTransitionIn: true,
      //   });
      // } else if (experienceTop && scrollPosition < experienceTop + 50) {
      //   setScrollState({
      //     ...scrollState,
      //     tabValue: 1,
      //     aboutMeTransitionIn: true,
      //     experienceTransitionIn: true,
      //   });
      // } else if (portfolioTop && scrollPosition < portfolioTop + 50) {
      //   setScrollState({
      //     ...scrollState,
      //     tabValue: 2,
      //     aboutMeTransitionIn: true,
      //     experienceTransitionIn: true,
      //     portfolioTransitionIn: true,
      //   });
      // }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <TitlePanel
          handleTabChange={handleTabChange}
          backgroundImage={background}
          otherLocationName="Go to Benniditos"
          otherLocationPath="/BenniditosHome"
          logoImage={logo}
          isBrewPub
        />
        <PanelContainer ref={null}></PanelContainer>
        <PanelContainer ref={null}>
          <Box />
        </PanelContainer>
        <PanelContainer ref={null}>
          <Box />
        </PanelContainer>
      </Box>
    </ThemeProvider>
  );
}
