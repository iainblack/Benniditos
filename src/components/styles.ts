import { Box, Fab } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PanelContainer = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "noPaddingTop" &&
    prop !== "fullWidth" &&
    prop !== "marginTop" &&
    prop !== "contentHeight" &&
    prop !== "backgroundColor",
})<{
  noPaddingTop?: boolean;
  fullWidth?: boolean;
  marginTop?: string;
  contentHeight?: boolean;
  backgroundColor?: string;
}>(
  ({
    noPaddingTop,
    theme,
    fullWidth,
    marginTop,
    contentHeight,
    backgroundColor,
  }) => ({
    backgroundColor: backgroundColor ? backgroundColor : "none",
    minHeight: contentHeight ? "fit-content" : "90vh",
    width: "100vw",
    padding: theme.spacing(4),
    paddingTop: noPaddingTop ? 0 : theme.spacing(4),
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
  })
);

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

export const SectionHeader = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isSmallScreen",
})<{
  isSmallScreen?: boolean;
}>(({ theme, isSmallScreen }) => ({
  backgroundColor: "white",
  marginBottom: isSmallScreen ? theme.spacing(2) : theme.spacing(4),
  marginTop: isSmallScreen ? theme.spacing(2) : theme.spacing(4),
  marginRight: isSmallScreen ? theme.spacing(2) : theme.spacing(0),
  marginLeft: isSmallScreen ? theme.spacing(2) : theme.spacing(0),
  padding: theme.spacing(2),
  paddingBottom: theme.spacing(1),
  border: "1px solid",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
}));
