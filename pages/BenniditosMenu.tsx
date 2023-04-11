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
import BenniditosMenuData from "@/src/utils/BenniditosMenuData.json";
import { MenuPanel } from "@/src/components/Panels/MenuPanel";
import logo from "@/public/ditosLogo.png";
import StartFirebase from "@/src/components/firebaseConfig";
import { ref, get, child } from "firebase/database";
import { BenniditosMenuConfig, HideOnScroll } from "@/src/utils/utils";
import React from "react";

export default function BenniditosMenuPage() {
  const [menuData, setMenuData] = React.useState<
    BenniditosMenuConfig | undefined
  >(undefined);

  const database = StartFirebase();
  const dbRef = ref(database);

  get(child(dbRef, "SouthHill"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        setMenuData(snapshot.val());
      } else {
        console.log("Benniditos Menu Data not found");
        setMenuData(BenniditosMenuData);
      }
    })
    .catch((error) => {
      console.error(error);
      setMenuData(BenniditosMenuData);
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
            logo={logo}
            firstNavName="BrewPub Menu"
            firstNavPath="/BrewPubMenu"
            secondNavName="Tap List"
            secondNavPath="/OnTap"
            phoneNum={"509-455-7411"}
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
          <MenuPanel transitionIn data={menuData} header="SOUTH HILL MENU" />
        )}
      </PanelContainer>
    </ThemeProvider>
  );
}
