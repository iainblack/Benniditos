import {
  Toolbar,
  Box,
  IconButton,
  Drawer,
  Button,
  Tab,
  Tabs,
  useTheme,
} from "@mui/material";
import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function MenuHeader() {
  const router = useRouter();
  const theme = useTheme();

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
            display: "flex",
            overflow: "hidden",
            justifyContent: "right",
          }}
          id="container"
        >
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
        </Box>
      </Toolbar>
    </>
  );
}
