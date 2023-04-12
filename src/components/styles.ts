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
