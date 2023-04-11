import { PanelContainer } from "@/src/components/styles";
import theme from "@/Theme";
import {
  ThemeProvider,
  CssBaseline,
  AppBar,
  CircularProgress,
} from "@mui/material";
import background from "@/public/bg3.jpeg";
import MenuHeader from "@/src/components/MenuHeader";
import { MenuPanel } from "@/src/components/Panels/MenuPanel";
import BrewPubMenuData from "@/src/utils/BrewPubMenuData.json";
import brewPub from "@/public/brewpubLogoCropped.png";
import StartFirebase from "@/src/components/firebaseConfig";
import { BenniditosMenuConfig, HideOnScroll } from "@/src/utils/utils";
import { ref, get, child } from "firebase/database";
import React from "react";

export default function BrewPubMenuPage() {
  const [menuData, setMenuData] = React.useState<
    BenniditosMenuConfig | undefined
  >(undefined);

  const database = StartFirebase();
  const dbRef = ref(database);

  get(child(dbRef, "BrewPub"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        setMenuData(snapshot.val());
      } else {
        console.log("BrewPub Menu Data not found");
        setMenuData(BrewPubMenuData);
      }
    })
    .catch((error) => {
      console.error(error);
      setMenuData(BrewPubMenuData);
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HideOnScroll>
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
      </HideOnScroll>
      <PanelContainer
        fullWidth
        marginTop={"76px"}
        sx={{
          backgroundImage: `url(${background.src})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        {!menuData && <CircularProgress />}
        {menuData && (
          <MenuPanel
            transitionIn
            data={BrewPubMenuData}
            header="BREWPUB MENU"
          />
        )}
      </PanelContainer>
    </ThemeProvider>
  );
}
