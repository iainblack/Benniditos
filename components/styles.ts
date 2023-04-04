import { Box, Fab } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PanelContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "noPaddingTop" && prop !== "marginTop",
})<{
  noPaddingTop?: boolean;
  marginTop?: string;
}>(({ noPaddingTop, marginTop, theme }) => ({
  marginTop: marginTop ? marginTop : theme.spacing(0),
  paddingLeft: theme.spacing(6),
  paddingRight: theme.spacing(6),
  paddingTop: noPaddingTop ? 0 : theme.spacing(8),
  paddingBottom: theme.spacing(8),
  [theme.breakpoints.down("sm")]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: noPaddingTop ? 0 : theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  display: "flex",
  justifyContent: "center",
}));

export const InfoBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "backgroundColor",
})<{
  backgroundColor?: string;
}>(({ backgroundColor, theme }) => ({
  backgroundColor: backgroundColor
    ? backgroundColor
    : theme.palette.background.default,
  padding: theme.spacing(2),
  margin: theme.spacing(2),
  borderRadius: "12px",
  border: `1px solid ${theme.palette.divider}`,
}));

export const ThemeButton = styled(Fab, {
  shouldForwardProp: (prop) => prop !== "shouldPulse",
})<{
  shouldPulse: boolean;
}>(({ shouldPulse, theme }) => ({
  margin: 0,
  top: "auto",
  right: 25,
  bottom: 25,
  left: "auto",
  position: "fixed",

  boxShadow: `0 0 0 0 rgba(102,179,255, 1)`,
  transform: "scale(1)",
  animation: shouldPulse ? "pulse 2s infinite" : "none",

  "@keyframes pulse": {
    "0%": {
      transform: "scale(0.95)",
      boxShadow: `0 0 0 0 rgba(102,179,255, 0.7)`,
    },
    "70%": {
      transform: "scale(1.05)",
      boxShadow: `0 0 0 10px rgba(102,179,255, 0)`,
    },
    "100%": {
      transform: "scale(0.95)",
      boxShadow: `0 0 0 0 rgba(102,179,255, 0)`,
    },
  },
}));
