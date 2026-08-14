import { PanelContainer } from "@/src/components/styles";
import theme from "@/Theme";
import {
  ThemeProvider,
  CssBaseline,
  AppBar,
} from "@mui/material";
import bg3 from "@/public/bg3.jpeg";
import bg4 from "@/public/bg4.jpeg";
import MenuHeader from "@/src/components/MenuHeader";
import { MenuPanel } from "@/src/components/Panels/MenuPanel";
import logo from "@/public/ditosLogo.png";
import { getSouthHillMenu } from "@/lib/sanity/content";
import { BenniditosMenuConfig, HideOnScroll } from "@/src/utils/utils";
import Head from "next/head";

export default function BenniditosMenuPage({
  menuData,
}: {
  menuData: BenniditosMenuConfig;
}) {
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
        <MenuPanel transitionIn data={menuData} header="SOUTH HILL MENU" />
      </PanelContainer>
    </ThemeProvider>
  );
}

export async function getStaticProps() {
  const menuData = await getSouthHillMenu();
  return { props: { menuData }, revalidate: 3600 };
}
