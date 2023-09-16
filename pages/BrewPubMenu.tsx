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
import { MenuPanel } from "@/src/components/Panels/MenuPanel";
import BrewPubMenuData from "@/src/utils/BrewPubMenuData.json";
import brewPub from "@/public/brewpubLogoCropped.png";
import StartFirebase from "@/src/components/firebaseConfig";
import { BenniditosMenuConfig, HideOnScroll } from "@/src/utils/utils";
import { ref, get, child } from "firebase/database";
import React, { useEffect } from "react";
import Head from "next/head";

export default function BrewPubMenuPage() {
  const [menuData, setMenuData] =
    React.useState<BenniditosMenuConfig>(BrewPubMenuData);

  useEffect(() => {
    const database = StartFirebase();
    const dbRef = ref(database);

    get(child(dbRef, "BrewPub"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setMenuData(snapshot.val());
        } else {
          console.log("BrewPub Menu Data not found");
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
        <title>Bennidito&apos;s Pizza</title>
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
        marginTop={"81px"}
        sx={{
          backgroundImage: { xs: `url(${bg3.src})`, sm: `url(${bg4.src})` },
          backgroundColor: "#fefcf9",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        {!menuData && <CircularProgress />}
        {menuData && (
          <MenuPanel transitionIn data={menuData} header="BREWPUB MENU" />
        )}
      </PanelContainer>
    </ThemeProvider>
  );
}
