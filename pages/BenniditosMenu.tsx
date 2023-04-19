import { PanelContainer } from "@/src/components/styles";
import theme from "@/Theme";
import {
  ThemeProvider,
  CssBaseline,
  AppBar,
  CircularProgress,
} from "@mui/material";
import bg3 from "@/public/bg3.jpeg";
import bg4 from "@/public/bg4.jpeg";
import MenuHeader from "@/src/components/MenuHeader";
import BenniditosMenuData from "@/src/utils/BenniditosMenuData.json";
import { MenuPanel } from "@/src/components/Panels/MenuPanel";
import logo from "@/public/ditosLogo.png";
import StartFirebase from "@/src/components/firebaseConfig";
import { ref, get, child } from "firebase/database";
import { BenniditosMenuConfig, HideOnScroll } from "@/src/utils/utils";
import React, { useEffect } from "react";
import Head from "next/head";

export default function BenniditosMenuPage() {
  const [menuData, setMenuData] =
    React.useState<BenniditosMenuConfig>(BenniditosMenuData);

  useEffect(() => {
    const database = StartFirebase();
    const dbRef = ref(database);

    get(child(dbRef, "SouthHill"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setMenuData(snapshot.val());
        } else {
          console.log("Benniditos Menu Data not found");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>Bennidito&apos;s</title>
      </Head>
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
        marginTop={"81px"}
        sx={{
          backgroundImage: { xs: `url(${bg3.src})`, sm: `url(${bg4.src})` },
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
