import { createTheme } from "@mui/material/styles";

const mainTheme = createTheme({
  typography: {
    h1: {
      fontSize: "4.5rem",
    },
    h2: {
      "@media (min-width:600px)": {
        fontSize: "5.5rem",
      },
    },
    h4: {
      fontWeight: 800,
    },
    h5: {
      fontWeight: 700,
      fontSize: "1.25rem",
    },
    body1: {
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
    },
    body2: {
      "@media (min-width:600px)": {
        fontSize: "1.25rem",
      },
    },
  },
  palette: {
    primary: {
      main: "#e1a32b",
    },
    text: {
      primary: "#000000",
      secondary: "#878277",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 975,
      lg: 1120,
      xl: 1536,
    },
  },
});

export default mainTheme;
