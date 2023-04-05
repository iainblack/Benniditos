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
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import bg3 from "@/public/bg3.jpeg";

interface HeaderProps {
  tabValue: number | false;
  handleTabChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export default function Header(props: HeaderProps) {
  const theme = useTheme();
  const sections = [
    "Hours & Location",
    "Delivery",
    "Menu",
    "Tap List",
    "About",
  ];
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
    <Box
      role="presentation"
      color={"text.primary"}
      sx={{ width: 250, borderLeft: 1 }}
    >
      <List>
        {sections.map((text, index) => (
          <ListItem key={text} disablePadding alignItems="center">
            <ListItemButton
              sx={{
                border: 1,
                my: 1,
                mx: "10%",
                backgroundColor: "white",
              }}
              onClick={(e) => {
                scrollAfterClose.current = { event: e, index: index };
                setDrawerOpen(false);
              }}
            >
              <ListItemText>
                <Typography
                  sx={{
                    fontFamily: "header",
                    color: "text.primary",
                    textAlign: "center",
                  }}
                >
                  {text}
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              backgroundColor: "white",
              mx: "10%",
              whiteSpace: "nowrap",
              border: 1,
              my: 1,
            }}
            onClick={() => {
              setDrawerOpen(false);
            }}
          >
            <ListItemText
              primary="Order Online"
              primaryTypographyProps={{
                textAlign: "center",
                color: "primary.main",
                fontFamily: "header",
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const containerRef = React.useRef(null);

  return (
    <>
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
            display: { xs: "flex", lg: "none" },
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
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            PaperProps={{
              sx: {
                width: 250,
                backgroundImage: `url(${bg3.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              },
            }}
          >
            {list()}
          </Drawer>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", lg: "flex" },
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
                fontFamily: "subheader",
              }}
            />
            <Tab
              label="Delivery"
              sx={{
                textTransform: "none",
                color: "white",
                fontFamily: "subheader",
              }}
            />
            <Tab
              label="Menu"
              sx={{
                textTransform: "none",
                color: "white",
                fontFamily: "subheader",
              }}
            />
            <Tab
              label="Tap List"
              sx={{
                textTransform: "none",
                color: "white",
                fontFamily: "subheader",
              }}
            />
            <Tab
              label="About"
              sx={{
                textTransform: "none",
                color: "white",
                fontFamily: "subheader",
              }}
            />
          </Tabs>
          <Button
            variant={"outlined"}
            sx={{
              ml: 2,
              fontFamily: "header",
              color: "white",
              borderColor: "white",
              whiteSpace: "nowrap",
              "$:hover": {
                backgroundColor: "primary.main",
                color: "white",
              },
            }}
            onClick={(e) => {}}
          >
            Order Online
          </Button>
        </Box>
      </Toolbar>
    </>
  );
}
