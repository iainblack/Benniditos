import {
  Toolbar,
  Box,
  IconButton,
  Drawer,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  AppBar,
  Tab,
  Tabs,
  Slide,
  useTheme,
} from "@mui/material";
import React, { useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";

interface HeaderProps {
  tabValue: number | false;
  handleTabChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export default function Header(props: HeaderProps) {
  const theme = useTheme();
  const sections = ["About", "Locations & Hours", "Menu"];
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
    <Box role="presentation" color={"text.primary"}>
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
                  fontFamily: theme.typography.body2.fontFamily,
                  textAlign: "center",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding alignItems="center">
          <ListItemButton
            onClick={() => {
              setDrawerOpen(false);
            }}
          >
            <ListItemText
              primary="Get In Touch"
              primaryTypographyProps={{
                fontFamily: theme.typography.body2.fontFamily,
                textAlign: "center",
                color: theme.palette.info.main,
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const containerRef = React.useRef(null);

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      color="transparent"
      sx={{
        backdropFilter: "blur(5px)",
        backgroundColor: theme.palette.primary.main,
        opacity: 0.95,
        px: { xs: 4, sm: 4, md: 12 },
      }}
    >
      <Toolbar disableGutters>
        <IconButton
          disableRipple={true}
          disableFocusRipple={true}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          sx={{
            p: 0,
          }}
        >
          <Image
            src="/ditosLogo.png"
            alt="logo"
            width={200}
            height={60}
            priority
            style={{
              marginTop: theme.spacing(1),
              marginBottom: theme.spacing(1),
              objectFit: "contain",
            }}
          />
        </IconButton>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", sm: "flex", md: "none" },
            justifyContent: "right",
          }}
        >
          <IconButton
            size="large"
            aria-haspopup="true"
            onClick={() => setDrawerOpen(true)}
            sx={{ color: "white" }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="top"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
          >
            {list()}
          </Drawer>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", sm: "none", md: "flex" },
            overflow: "hidden",
            justifyContent: "right",
          }}
          id="container"
          ref={containerRef}
        >
          <Tabs
            value={props.tabValue}
            onChange={props.handleTabChange}
            TabIndicatorProps={{
              style: {
                backgroundColor: "transparent",
              },
            }}
          >
            <Tab
              label="Hours & Location"
              sx={{
                textTransform: "none",
                color: "white",
                fontFamily: theme.typography.body2.fontFamily,
              }}
            />
            <Tab
              label="Menu"
              sx={{
                textTransform: "none",
                color: "white",
                fontFamily: theme.typography.body2.fontFamily,
              }}
            />
            <Tab
              label="Delivery"
              sx={{
                textTransform: "none",
                color: "white",
                fontFamily: theme.typography.body2.fontFamily,
              }}
            />
            <Tab
              label="About"
              sx={{
                textTransform: "none",
                color: "white",
                fontFamily: theme.typography.body2.fontFamily,
              }}
            />
            <Tab
              label="Contact Us"
              sx={{
                textTransform: "none",
                color: "white",
                fontFamily: theme.typography.body2.fontFamily,
              }}
            />
          </Tabs>
          <Button
            variant={"outlined"}
            sx={{
              ml: 2,
              textTransform: "none",
              fontFamily: theme.typography.body2.fontFamily,
              color: "white",
              borderColor: "white",
            }}
            onClick={(e) => {}}
          >
            BrewPub
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
