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
      fontSize: "1.5rem",
      "@media (min-width:600px)": {
        fontSize: "3rem",
      },
    },
    h5: {
      fontWeight: 800,
      fontSize: "1.15rem",
      "@media (min-width:600px)": {
        fontSize: "1.75rem",
      },
    },
    body1: {
      fontSize: "1rem",
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
    },
    body2: {
      fontSize: "0.9rem",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
    },
  },
  palette: {
    mode: "light",
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
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1015,
      lg: 1300,
      xl: 1536,
    },
  },
});

export default mainTheme;
