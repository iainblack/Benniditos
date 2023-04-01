import theme from "@/Theme";
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
} from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import background from "../../public/ditosMain.jpg";
import ListIcon from "@mui/icons-material/List";

interface TitlePanelProps {
  handleTabChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export default function TitlePanel(props: TitlePanelProps) {
  const sections = ["About", "Menu", "Contact"];
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
                  fontFamily: theme.typography.body2.fontFamily,
                  textAlign: "center",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
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
          backgroundImage: `url(${background.src})`,
          backgroundSize: "cover",
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
                size="large"
                aria-haspopup="true"
                onClick={() => setDrawerOpen(true)}
                sx={{ ml: 2, mt: 2 }}
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
                  src={"/ditosLogo.png"}
                  alt={"Benniditos"}
                  width={500}
                  height={200}
                />
              </Box>
            </Slide>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
}
