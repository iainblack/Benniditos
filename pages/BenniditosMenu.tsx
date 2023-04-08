import { PanelContainer } from "@/src/components/styles";
import theme from "@/Theme";
import { ThemeProvider, CssBaseline, AppBar } from "@mui/material";
import background from "@/public/bg3.jpeg";
import MenuHeader from "@/src/components/MenuHeader";
import { BenniditosMenuData } from "@/src/utils/BenniditosMenuData";
import { MenuPanel } from "@/src/components/Panels/MenuPanel";
import logo from "@/public/ditosLogo.png";

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
        <MenuHeader
          logo={logo}
          firstNavName="BrewPub Menu"
          firstNavPath="/BrewPubMenu"
          secondNavName="Tap List"
          secondNavPath="/OnTap"
          phoneNum={"509-455-7411"}
        />
      </AppBar>
      <PanelContainer
        fullWidth
        marginTop={"76px"}
        sx={{
          backgroundImage: `url(${background.src})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <MenuPanel
          transitionIn
          data={BenniditosMenuData}
          header="SOUTH HILL MENU"
        />
      </PanelContainer>
    </ThemeProvider>
  );
}
