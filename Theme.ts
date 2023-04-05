import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "4.5rem",
    },
    h4: {
      fontWeight: 800,
    },
    h5: {
      fontWeight: 700,
      fontSize: "1.25rem",
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
      md: 930,
      lg: 1120,
      xl: 1536,
    },
  },
});

export default theme;
