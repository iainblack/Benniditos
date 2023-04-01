import { createTheme } from "@mui/material/styles";

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
      "@media (max-width:600px)": {
        fontSize: "1.25rem",
      },
    },
    h6: {
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
      main: "#006CE5",
      contrastText: "#BFC5CA",
    },
    secondary: {
      main: "#3293FF",
    },
    text: {
      primary: "#BFC5CA",
      secondary: "#697782",
    },
    background: {
      default: "#192734",
      paper: "#0F1A25",
    },
    info: {
      main: "#65AEFF",
    },
  },
});

export default theme;
