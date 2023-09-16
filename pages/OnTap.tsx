import { PanelContainer } from "@/src/components/styles";
import theme from "@/Theme";
import {
  ThemeProvider,
  CssBaseline,
  AppBar,
  CircularProgress,
} from "@mui/material";
import bg4 from "@/public/bg4.jpeg";
import bg3 from "@/public/bg3.jpeg";
import { BenniditosOnTap } from "@/src/components/Panels/OnTapPanel";
import MenuHeader from "@/src/components/MenuHeader";
import logo from "@/public/ditosLogo.png";
import React, { useEffect } from "react";
import StartFirebase from "@/src/components/firebaseConfig";
import { HideOnScroll, TapListConfig } from "@/src/utils/utils";
import { ref, get, child } from "firebase/database";
import TapList from "@/src/utils/BenniditosTapListData.json";
import Head from "next/head";

export default function BenniditosMenuPage() {
  const [menuData, setMenuData] = React.useState<TapListConfig>(TapList);

  useEffect(() => {
    const database = StartFirebase();
    const dbRef = ref(database);

    get(child(dbRef, "TapList"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setMenuData(snapshot.val());
        } else {
          console.log("Tap List Data not found");
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
        <title>Bennidito&apos;s Pizza & BrewPub</title>
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
            firstNavName="South Hill Menu"
            firstNavPath="/BenniditosMenu"
            secondNavName="BrewPub Menu"
            secondNavPath="/BrewPubMenu"
          />
        </AppBar>
      </HideOnScroll>
      <PanelContainer
        fullWidth
        marginTop={"81px"}
        id="menu-container"
        sx={{
          backgroundImage: { xs: `url(${bg3.src})`, sm: `url(${bg4.src})` },
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        {!menuData && <CircularProgress />}
        {menuData && <BenniditosOnTap transitionIn data={menuData} />}
      </PanelContainer>
    </ThemeProvider>
  );
}
