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
  Tab,
  Tabs,
  useTheme,
  Collapse,
  Popover,
  Slide,
} from "@mui/material";
import React, { useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Image, { StaticImageData } from "next/image";
import bg3 from "@/public/bg3.jpeg";
import { useRouter } from "next/router";
import Link from "next/link";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { OpenInNewOutlined } from "@mui/icons-material";

interface HeaderProps {
  handleTabChange: (event: React.SyntheticEvent, newValue: number) => void;
  logo?: boolean;
}

export default function Header(props: HeaderProps) {
  const [animateTabs, setAnimateTabs] = React.useState(false);
  const router = useRouter();
  const theme = useTheme();
  const sections = ["Hours & Locations", "Delivery"];
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [menusOpen, setMenusOpen] = React.useState(false);
  const scrollAfterClose = React.useRef<Record<string, any> | undefined>(
    undefined
  );

  const handleMenusClick = () => {
    setMenusOpen(!menusOpen);
  };

  useEffect(() => {
    if (scrollAfterClose.current) {
      props.handleTabChange(
        scrollAfterClose.current.event,
        scrollAfterClose.current.index
      );
      scrollAfterClose.current = undefined;
    }
  }, [drawerOpen]);

  useEffect(() => {
    setTimeout(() => {
      setAnimateTabs(true);
    }, 1000);
  }, []);

  const list = () => (
    <Box
      role="presentation"
      color={"text.primary"}
      sx={{ width: { xs: 250, sm: 300 }, borderLeft: 1 }}
    >
      <List>
        {sections.map((text, index) => (
          <ListItem disablePadding key={text}>
            <ListItemButton
              sx={{
                backgroundColor: "white",
                mx: "10%",
                whiteSpace: "nowrap",
                border: 1,
                my: 1,
                "&:hover": {
                  backgroundColor: "white",
                  color: "primary.main",
                },
              }}
              onClick={(e) => {
                scrollAfterClose.current = { event: e, index: index };
                setDrawerOpen(false);
              }}
            >
              <ListItemText
                primary={text}
                primaryTypographyProps={{
                  textAlign: "center",
                  fontFamily: "header",
                }}
              />
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
              "&:hover": {
                backgroundColor: "white",
                color: "primary.main",
              },
            }}
            onClick={() => {
              router.push("/OnTap");
            }}
          >
            <ListItemText
              primary="Tap List"
              primaryTypographyProps={{
                textAlign: "center",
                fontFamily: "header",
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <ListItemButton
            sx={{
              backgroundColor: "white",
              whiteSpace: "nowrap",
              width: "80%",
              border: 1,
              my: 1,
              "&:hover": {
                backgroundColor: "white",
                color: "primary.main",
              },
            }}
            onClick={handleMenusClick}
          >
            <ListItemText
              primary="Menus"
              primaryTypographyProps={{
                textAlign: "center",
                fontFamily: "header",
              }}
            />
            {menusOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={menusOpen} unmountOnExit sx={{ width: "100%" }}>
            <ListItem
              disablePadding
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <ListItemButton
                onClick={() => {
                  router.push("/BenniditosMenu");
                }}
                sx={{
                  textAlign: "center",
                  width: "70%",
                  backgroundColor: "white",
                  whiteSpace: "nowrap",
                  border: 1,
                  my: 1,
                  "&:hover": {
                    backgroundColor: "white",
                    color: "primary.main",
                  },
                }}
              >
                <ListItemText
                  primary="South Hill Menu"
                  primaryTypographyProps={{
                    textAlign: "center",
                    fontFamily: "header",
                    fontSize: theme.typography.body1.fontSize,
                  }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <ListItemButton
                onClick={() => {
                  router.push("/BrewPubMenu");
                }}
                sx={{
                  textAlign: "center",
                  pl: 2,
                  width: "70%",
                  backgroundColor: "white",
                  whiteSpace: "nowrap",
                  border: 1,
                  my: 1,
                  "&:hover": {
                    backgroundColor: "white",
                    color: "primary.main",
                  },
                }}
              >
                <ListItemText
                  primary="BrewPub Menu"
                  primaryTypographyProps={{
                    textAlign: "center",
                    fontFamily: "header",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </Collapse>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              backgroundColor: "white",
              mx: "10%",
              whiteSpace: "nowrap",
              border: 1,
              my: 1,
              "&:hover": {
                backgroundColor: "white",
                color: "primary.main",
              },
            }}
            onClick={() => {
              window.open(
                "https://weborder7.microworks.com/benniditos/",
                "_blank"
              );
            }}
          >
            <ListItemText
              primary="Order Online"
              primaryTypographyProps={{
                textAlign: "center",
                fontFamily: "header",
              }}
            />
            <OpenInNewOutlined
              fontSize="small"
              sx={{ height: 14, width: 14 }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const [anchorEl, setAnchorEl] = React.useState<any | null>(null);
  const containerRef = React.useRef(null);

  const handleMenuTabClick = (event: React.MouseEvent<any>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuTabClose = () => {
    setAnchorEl(null);
  };

  const popoverOpen = Boolean(anchorEl);
  return (
    <>
      <Toolbar disableGutters>
        {props.logo && (
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
              width={230}
              height={70}
              style={{
                marginTop: theme.spacing(1),
                marginBottom: theme.spacing(1),
                objectFit: "contain",
              }}
            />
          </IconButton>
        )}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", md: "none" },
            justifyContent: "right",
          }}
        >
          <IconButton
            size="large"
            aria-haspopup="true"
            onClick={() => setDrawerOpen(true)}
            sx={{ color: "white" }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => {
              setDrawerOpen(false);
              menusOpen && handleMenusClick();
            }}
            PaperProps={{
              sx: {
                width: { xs: 250, sm: 300 },
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
            display: { xs: "none", md: "flex" },
            overflow: "hidden",
            justifyContent: "right",
          }}
          id="container"
          ref={containerRef}
        >
          <Slide
            in={animateTabs}
            direction="up"
            container={containerRef.current}
            timeout={1000}
          >
            <Tabs
              value={false}
              onChange={props.handleTabChange}
              TabIndicatorProps={{
                style: {
                  backgroundColor: "transparent",
                },
              }}
            >
              <Tab
                label="Hours & Locations"
                sx={{
                  textTransform: "none",
                  color: "white",
                  fontFamily: "header",
                  fontSize: 22,
                }}
              />
              <Tab
                label="Delivery"
                sx={{
                  textTransform: "none",
                  color: "white",
                  fontFamily: "header",
                  fontSize: 22,
                }}
              />
              <Tab
                label="Menus"
                onClick={(e) => {
                  handleMenuTabClick(e);
                }}
                sx={{
                  textTransform: "none",
                  color: "white",
                  fontFamily: "header",
                  fontSize: 22,
                }}
              />
              <Popover
                disableScrollLock
                open={popoverOpen}
                anchorEl={anchorEl}
                onClose={handleMenuTabClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                PaperProps={{
                  sx: {
                    borderRadius: 1,
                    border: 1,
                  },
                }}
              >
                <List>
                  <ListItem disablePadding>
                    <ListItemButton
                      sx={{
                        backgroundColor: "white",
                        whiteSpace: "nowrap",
                        "&:hover": {
                          backgroundColor: "white",
                          color: "primary.main",
                          borderColor: "none",
                        },
                      }}
                      onClick={() => {
                        router.push("/BenniditosMenu");
                      }}
                    >
                      <ListItemText
                        primary="South Hill Menu"
                        primaryTypographyProps={{
                          textAlign: "center",
                          fontFamily: "header",
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      sx={{
                        backgroundColor: "white",
                        whiteSpace: "nowrap",
                        "&:hover": {
                          backgroundColor: "white",
                          color: "primary.main",
                          borderColor: "none",
                        },
                      }}
                      onClick={() => {
                        router.push("/BrewPubMenu");
                      }}
                    >
                      <ListItemText
                        primary="BrewPub Menu"
                        primaryTypographyProps={{
                          textAlign: "center",
                          fontFamily: "header",
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Popover>
              <Tab
                label="Tap List"
                onClick={() => {
                  router.push("/OnTap");
                }}
                sx={{
                  textTransform: "none",
                  color: "white",
                  fontFamily: "header",
                  fontSize: 22,
                }}
              />
            </Tabs>
          </Slide>
          <Slide
            in={animateTabs}
            direction="up"
            container={containerRef.current}
            timeout={1000}
          >
            <Button
              variant={"outlined"}
              sx={{
                ml: 2,
                fontFamily: "header",
                color: "white",
                borderColor: "white",
                whiteSpace: "nowrap",
                fontSize: theme.typography.body1.fontSize,
                "&:hover": {
                  backgroundColor: "white",
                  color: "primary.main",
                },
              }}
              onClick={(e) => {
                window.open(
                  "https://weborder7.microworks.com/benniditos/",
                  "_blank"
                );
              }}
            >
              Order Online
            </Button>
          </Slide>
        </Box>
      </Toolbar>
    </>
  );
}
