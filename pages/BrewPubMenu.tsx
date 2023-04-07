import { PanelContainer } from "@/src/components/styles";
import theme from "@/Theme";
import { ThemeProvider, CssBaseline, AppBar } from "@mui/material";
import background from "@/public/bg3.jpeg";
import MenuHeader from "@/src/components/MenuHeader";
import { MenuPanel } from "@/src/components/Panels/MenuPanel";
import { BrewPubMenuData } from "@/src/utils/BrewPubMenuData";
import brewPub from "@/public/brewpubLogoCropped.png";

export default function BrewPubMenuPage() {
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
        <MenuHeader
          logo={brewPub}
          firstNavName="South Hill Menu"
          firstNavPath="/BenniditosMenu"
          secondNavName="Tap List"
          secondNavPath="/OnTap"
          phoneNum={"509-290-5018"}
        />
      </AppBar>
      <PanelContainer
        marginTop={"76px"}
        sx={{
          backgroundImage: `url(${background.src})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <MenuPanel transitionIn data={BrewPubMenuData} />
      </PanelContainer>
    </ThemeProvider>
  );
}
