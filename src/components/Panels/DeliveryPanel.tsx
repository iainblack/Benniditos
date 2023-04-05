import {
  Box,
  Button,
  Divider,
  Fade,
  Typography,
  useTheme,
} from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

interface HoursLocationProps {
  transitionIn: boolean;
}

export function BenniditosDeliveryPanel(props: HoursLocationProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: { xs: "fit-content", md: "100vh" },
      }}
    >
      <Box ref={containerRef}>
        <Fade in={props.transitionIn} timeout={1000}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                position: "relative",
                height: { xs: "50vh", md: "80vh" },
                width: { xs: "100%", md: "70%" },
                order: { xs: 2, md: 1 },
                mb: { xs: 3, md: 0 },
                border: 1,
              }}
            >
              <Image
                src={"/ditosMain.jpg"}
                fill
                alt="ditos"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </Box>
            <Box
              sx={{
                textAlign: "center",
                width: { xs: "100%", md: "30%" },
                border: "1px solid",
                height: { xs: "80vh", md: "80vh" },
                ml: { xs: 0, md: 3 },
                mb: { xs: 4, md: 0 },
                py: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                backgroundColor: "white",
                order: { xs: 1, md: 2 },
              }}
            >
              <Box
                sx={{
                  justifyContent: "center",
                  mb: 6,
                }}
              >
                <Typography
                  sx={{ textAlign: "center", mb: 1, fontFamily: "Header" }}
                  variant="h4"
                >
                  WE DELIVER
                </Typography>
                <Divider sx={{ mb: 1, mx: 3 }} />
                <Typography
                  variant="body1"
                  fontSize={12}
                  sx={{ mb: 1, px: 1, fontFamily: "body" }}
                >
                  Here is some information about our delivery service and where
                  we deliver to. Blah Blah Blah Blah Blah Blah Blah Blah Blah
                  Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah
                </Typography>
              </Box>
              <Box>
                <Button variant="outlined">Order Online</Button>
              </Box>
              <Box>
                <Button variant="outlined">Call the shop</Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Box>
    </Box>
  );
}
