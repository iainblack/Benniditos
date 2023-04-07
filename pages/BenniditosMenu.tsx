import { BenniditosMenuPanel } from "@/src/components/Panels/BenniditosMenuPanel";
import { PanelContainer } from "@/src/components/styles";
import theme from "@/Theme";
import { ThemeProvider, CssBaseline, AppBar } from "@mui/material";
import background from "@/public/bg3.jpeg";
import MenuHeader from "@/src/components/MenuHeader";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";

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
        <MenuHeader />
      </AppBar>
      <PanelContainer
        marginTop={"76px"}
        sx={{
          backgroundImage: `url(${background.src})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <BenniditosMenuPanel transitionIn />
      </PanelContainer>
    </ThemeProvider>
  );
}
