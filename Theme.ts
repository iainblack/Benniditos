import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h1: {
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
      fontWeight: 700,
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
    primary: {
      main: "#e1a32b",
    },
    secondary: {
      main: "#98c855",
    },
    text: {
      primary: "#000000",
      secondary: "#878277",
    },
    background: {
      default: "FBF4E6",
      paper: "#534C3D",
    },
    info: {
      main: "#FFC86F",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 930,
      lg: 1015,
      xl: 1536,
    },
  },
});

export default theme;
