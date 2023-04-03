import {
  Fade,
  Box,
  IconButton,
  Drawer,
  Slide,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  Divider,
} from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React, { useEffect } from "react";
import ListIcon from "@mui/icons-material/List";
import Link from "next/link";

interface LogoPanelProps {
  handleTabChange: (event: React.SyntheticEvent, newValue: number) => void;
  backgroundImage: StaticImageData;
  logoImage: StaticImageData;
  otherLocationName: string;
  otherLocationPath: string;
  isBrewPub?: boolean;
}

export default function LogoPanel(props: LogoPanelProps) {
  const theme = useTheme();
  const sections = ["Contact Info / Hours", "Menu", "Order Online"];
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const scrollAfterClose = React.useRef<Record<string, any> | undefined>(
    undefined
  );

  useEffect(() => {
    if (scrollAfterClose.current) {
      props.handleTabChange(
        scrollAfterClose.current.event,
        scrollAfterClose.current.index
      );
      scrollAfterClose.current = undefined;
    }
  }, [drawerOpen]);

  const list = () => (
    <Box role="presentation" sx={{ width: 250 }}>
      <List>
        {sections.map((text, index) => (
          <ListItem key={text} disablePadding alignItems="center">
            <ListItemButton
              onClick={(e) => {
                scrollAfterClose.current = { event: e, index: index };
                setDrawerOpen(false);
              }}
            >
              <ListItemText
                primary={text}
                primaryTypographyProps={{
                  textAlign: "center",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider />
        <ListItem
          key={props.otherLocationName}
          disablePadding
          alignItems="center"
        >
          <ListItemButton>
            <Link href={props.otherLocationPath}>
              <ListItemText
                primary={props.otherLocationName}
                primaryTypographyProps={{
                  fontFamily: theme.typography.body2.fontFamily,
                }}
              />
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Fade in {...{ timeout: 2000 }}>
      <Box
        id="title"
        sx={{
          height: "calc(100vh + 50px)",
          width: "100vw",
          backgroundImage: `url(${props.backgroundImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
        }}
      >
        <Box
          id="tint-overlay"
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <Box id="title-contents-container" sx={{ height: "100%" }}>
            <Box>
              <IconButton
                disableRipple
                disableFocusRipple
                size="medium"
                aria-haspopup="true"
                onClick={() => setDrawerOpen(true)}
                sx={{
                  ml: 2,
                  mt: 2,
                  margin: 0,
                  top: 12,
                  right: "auto",
                  bottom: "auto",
                  left: 12,
                  position: "fixed",
                }}
              >
                <ListIcon sx={{ height: 45, width: 45 }} />
              </IconButton>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              >
                {list()}
              </Drawer>
            </Box>
            <Slide in direction="up" {...{ timeout: 1000 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "60%",
                }}
              >
                <Image
                  src={props.logoImage.src}
                  alt={"Logo"}
                  width={props.isBrewPub ? 425 : 450}
                  height={190}
                  //objectFit="cover"
                  // shrink to fit mobile size
                  //style={{ width: "100%" }}
                />
              </Box>
            </Slide>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
}
