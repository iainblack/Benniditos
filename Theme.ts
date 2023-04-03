import { createTheme } from "@mui/material/styles";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"] });
const font = [quicksand.style.fontFamily, "sans-serif"].join(",");
const headerFont = [
  "Calibre",
  "Inter",
  "San Francisco",
  "SF Pro Text",
  "-apple-system,system-ui,sans-serif",
].join(",");

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: headerFont,
      fontSize: "4.5rem",
      "@media (max-width:600px)": {
        fontSize: "3rem",
      },
    },
    h4: {
      fontWeight: 800,
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
    },
    h5: {
      fontFamily: headerFont,
      fontWeight: 700,
      "@media (max-width:600px)": {
        fontSize: "1.25rem",
      },
    },
    h6: {
      fontFamily: font,
      "@media (max-width:600px)": {
        fontSize: "1rem",
      },
    },
    body1: {
      "@media (max-width:600px)": {
        fontSize: "1rem",
      },
    },
    body2: {
      "@media (max-width:600px)": {
        fontSize: "1rem",
      },
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#e1a32b",
    },
    secondary: {
      main: "#98c855",
    },
    text: {
      primary: "#EAEAE8",
      secondary: "#878277",
    },
    background: {
      default: "#29241A",
      paper: "#534C3D",
    },
    info: {
      main: "#FFC86F",
    },
  },
});

export default theme;
