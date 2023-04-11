import { Box, Fab } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PanelContainer = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "noPaddingTop" &&
    prop !== "fullWidth" &&
    prop !== "marginTop" &&
    prop !== "contentHeight",
})<{
  noPaddingTop?: boolean;
  fullWidth?: boolean;
  marginTop?: string;
  contentHeight?: boolean;
}>(({ noPaddingTop, theme, fullWidth, marginTop, contentHeight }) => ({
  minHeight: contentHeight ? "fit-content" : "90vh",
  width: "100vw",
  padding: theme.spacing(4),
  paddingTop: noPaddingTop ? 0 : theme.spacing(4),
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  marginTop: marginTop ? marginTop : 0,
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
    paddingTop: noPaddingTop ? 0 : theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    minHeight: contentHeight ? "fit-content" : "80vh",
    maxWidth: "100vw",
    marginTop: marginTop ? marginTop : 0,
  },
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "fit-content",
}));

export const BackgroundWrapper = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "backgroundImage" && prop !== "backgroundColor",
})<{
  backgroundImage?: string;
  backgroundColor?: string;
}>(({ backgroundImage, backgroundColor }) => ({
  width: "100vw",
  height: "100%",
  backgroundColor: backgroundColor ? backgroundColor : "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
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
