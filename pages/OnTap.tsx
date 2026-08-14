import { PanelContainer } from "@/src/components/styles";
import theme from "@/Theme";
import {
  ThemeProvider,
  CssBaseline,
  AppBar,
} from "@mui/material";
import bg4 from "@/public/bg4.jpeg";
import bg3 from "@/public/bg3.jpeg";
import { BenniditosOnTap } from "@/src/components/Panels/OnTapPanel";
import MenuHeader from "@/src/components/MenuHeader";
import logo from "@/public/ditosLogo.png";
import { getTapList } from "@/lib/sanity/content";
import { HideOnScroll, TapListConfig } from "@/src/utils/utils";
import Head from "next/head";

export default function OnTapPage({
  menuData,
}: {
  menuData: TapListConfig;
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
        <BenniditosOnTap transitionIn data={menuData} />
      </PanelContainer>
    </ThemeProvider>
  );
}

export async function getStaticProps() {
  const menuData = await getTapList();
  return { props: { menuData }, revalidate: 3600 };
}
