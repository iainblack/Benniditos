import { PanelContainer } from "@/src/components/styles";
import theme from "@/Theme";
import {
  ThemeProvider,
  CssBaseline,
  AppBar,
  CircularProgress,
} from "@mui/material";
import background from "@/public/bg3.jpeg";
import { BenniditosOnTap } from "@/src/components/Panels/OnTapPanel";
import MenuHeader from "@/src/components/MenuHeader";
import logo from "@/public/ditosLogo.png";
import React from "react";
import StartFirebase from "@/src/components/firebaseConfig";
import { BenniditosMenuConfig, TapListConfig } from "@/src/utils/utils";
import { ref, get, child } from "firebase/database";
import TapList from "@/src/utils/BenniditosTapListData.json";

export default function BenniditosMenuPage() {
  const [menuData, setMenuData] = React.useState<TapListConfig | undefined>(
    undefined
  );

  const database = StartFirebase();
  const dbRef = ref(database);

  get(child(dbRef, "TapList"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        setMenuData(snapshot.val());
      } else {
        console.log("Tap List Data not found");
        setMenuData(TapList);
      }
    })
    .catch((error) => {
      console.error(error);
      setMenuData(TapList);
    });
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
          firstNavName="South Hill Menu"
          firstNavPath="/BenniditosMenu"
          secondNavName="BrewPub Menu"
          secondNavPath="/BrewPubMenu"
        />
      </AppBar>
      <PanelContainer
        fullWidth
        marginTop={"76px"}
        id="menu-container"
        sx={{
          backgroundImage: `url(${background.src})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        {!menuData && <CircularProgress />}
        {menuData && <BenniditosOnTap transitionIn />}
      </PanelContainer>
    </ThemeProvider>
  );
}
