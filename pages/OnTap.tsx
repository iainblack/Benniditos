import { PanelContainer } from "@/src/components/styles";
import theme from "@/Theme";
import { ThemeProvider, CssBaseline, AppBar } from "@mui/material";
import background from "@/public/bg3.jpeg";
import { BenniditosOnTap } from "@/src/components/Panels/OnTapPanel";
import Header from "@/src/components/header";
import { HideOnScroll } from "@/src/utils/utils";
import MenuHeader from "@/src/components/MenuHeader";

export default function BenniditosMenuPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        sx={{
          backgroundColor: theme.palette.primary.main,
          pr: { xs: 2, lg: 6 },
          pl: { xs: 0, lg: 6 },
        }}
      >
        <MenuHeader />
      </AppBar>
      <PanelContainer
        marginTop={"76px"}
        id="menu-container"
        sx={{
          backgroundImage: `url(${background.src})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <BenniditosOnTap transitionIn />
      </PanelContainer>
    </ThemeProvider>
  );
}
