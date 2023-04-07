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
      sx={{ width: 250, borderLeft: 1 }}
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
              primary="HOME"
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
              primary={props.firstNavName?.toLocaleUpperCase()}
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
              primary={props.secondNavName.toLocaleUpperCase()}
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
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => {
              setDrawerOpen(false);
            }}
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
                    }}
                  />
                )}
              </Tabs>
              <Button
                variant={"outlined"}
                sx={{
                  ml: 2,
                  fontFamily: "header",
                  color: "white",
                  borderColor: "white",
                  whiteSpace: "nowrap",
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
            </>
          </Box>
        )}
      </Toolbar>
    </>
  );
}
