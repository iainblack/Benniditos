import { Box, Fab } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PanelContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "noPaddingTop" && prop !== "marginTop",
})<{
  noPaddingTop?: boolean;
  marginTop?: string;
}>(({ noPaddingTop, theme, marginTop }) => ({
  paddingLeft: theme.spacing(6),
  paddingRight: theme.spacing(6),
  paddingBottom: theme.spacing(8),
  paddingTop: noPaddingTop ? 0 : theme.spacing(8),
  marginTop: marginTop ? marginTop : 0,
  [theme.breakpoints.down("md")]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(4),
    paddingTop: noPaddingTop ? 0 : theme.spacing(4),
    marginTop: marginTop ? marginTop : 0,
  },
  display: "flex",
  justifyContent: "center",
  height: "fit-content",
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
