import {
  Toolbar,
  Box,
  IconButton,
  Drawer,
  Button,
  Tab,
  Tabs,
  useTheme,
  useMediaQuery,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";
import bg3 from "@/public/bg3.jpeg";
import { OpenInNewOutlined, PhoneOutlined } from "@mui/icons-material";

export default function MenuHeader(props: {
  logo: StaticImageData;
  firstNavName: string;
  firstNavPath: string;
  secondNavName: string;
  secondNavPath: string;
  phoneNum?: string;
}) {
  const router = useRouter();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const list = () => (
    <Box
      role="presentation"
      color={"text.primary"}
      sx={{ width: { xs: 250, sm: 300 }, borderLeft: 1 }}
    >
      <List>
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
              router.push("/");
            }}
          >
            <ListItemText
              primary="Home"
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
              router.push(props.firstNavPath);
            }}
          >
            <ListItemText
              primary={props.firstNavName}
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
              router.push(props.secondNavPath);
            }}
          >
            <ListItemText
              primary={props.secondNavName}
              primaryTypographyProps={{
                textAlign: "center",
                fontFamily: "header",
              }}
            />
          </ListItemButton>
        </ListItem>
        {props.phoneNum && (
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
                setDrawerOpen(false);
                window.open(`tel:${props.phoneNum}`, "_blank");
              }}
            >
              <ListItemText
                primary="Call"
                primaryTypographyProps={{
                  textAlign: "center",
                  fontFamily: "header",
                }}
              />
              <PhoneOutlined fontSize="small" sx={{ height: 14, width: 14 }} />
            </ListItemButton>
          </ListItem>
        )}
        {props.firstNavName === "BrewPub Menu" && (
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
        )}
      </List>
    </Box>
  );

  return (
    <>
      <Toolbar disableGutters>
        <IconButton
          disableRipple={true}
          disableFocusRipple={true}
          onClick={() => {
            router.push("/");
          }}
          sx={{
            p: 0,
          }}
        >
          <Image
            src={props.logo.src}
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
        {!isSmallScreen && (
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              overflow: "hidden",
              justifyContent: "right",
            }}
            id="container"
          >
            <>
              <Tabs>
                <Tab
                  label="Home"
                  onClick={() => {
                    router.push("/");
                  }}
                  sx={{
                    textTransform: "none",
                    color: "white",
                    fontFamily: "subheader",
                    fontSize: theme.typography.body1.fontSize,
                  }}
                />
                {props.firstNavName && (
                  <Tab
                    label={props.firstNavName}
                    onClick={() => {
                      router.push(props.firstNavPath ?? "");
                    }}
                    sx={{
                      textTransform: "none",
                      color: "white",
                      fontFamily: "subheader",
                      fontSize: theme.typography.body1.fontSize,
                    }}
                  />
                )}
                {props.secondNavName && (
                  <Tab
                    label={props.secondNavName}
                    onClick={() => {
                      router.push(props.secondNavPath ?? "");
                    }}
                    sx={{
                      textTransform: "none",
                      color: "white",
                      fontFamily: "subheader",
                      fontSize: theme.typography.body1.fontSize,
                    }}
                  />
                )}
              </Tabs>
              {props.firstNavName === "BrewPub Menu" && (
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
                      color: theme.palette.primary.main,
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
              )}
            </>
          </Box>
        )}
      </Toolbar>
    </>
  );
}
