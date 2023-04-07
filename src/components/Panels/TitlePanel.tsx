import {
  Box,
  useTheme,
  useMediaQuery,
  Slide,
  Typography,
  Button,
  Fade,
} from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import bg from "@/public/ditosTitle2.jpg";
import React from "react";

interface TitlePanelProps {}

export default function TitlePanel(props: TitlePanelProps) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const slideProps = {
    duration: 3000,
    autoplay: true,
    transitionDuration: 500,
    infinite: true,
    easing: "ease",
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        mb: 8,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.7)",
          p: 3,
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Box sx={{ maxWidth: 500, mt: { xs: 12, md: 6 } }}>
            <Fade in timeout={1000}>
              <Typography
                variant={isSmallScreen ? "h4" : "h3"}
                fontFamily="header"
                sx={{ color: "white", mb: 1 }}
              >
                {"Pizza, the right way."}
              </Typography>
            </Fade>
            <Fade in timeout={1500}>
              <Typography fontFamily="body" sx={{ color: "white" }}>
                At Benniditos we have have been feeding Spokane since 19XX
                adipiscing elit. Suspendisse ut risus convallis, aliquet felis
                sit amet, vulputate tellus. Sed mattis quis nunc eu maximus.
              </Typography>
            </Fade>
          </Box>
          <Box sx={{ mt: 6 }}>
            <Fade in timeout={2000}>
              <Box sx={{ mb: 2 }}>
                <Typography sx={{ color: "white", fontFamily: "header" }}>
                  Benniditos Pizza
                </Typography>
                <Typography sx={{ color: "white", fontFamily: "header" }}>
                  South Hill, Spokane, WA
                </Typography>
                <Button
                  sx={{ textTransform: "none", fontFamily: "body" }}
                  onClick={() => {
                    window.open("tel:+5094557411", "_blank");
                  }}
                >
                  509-455-7411
                </Button>
              </Box>
            </Fade>
            <Fade in timeout={2500}>
              <Box>
                <Typography sx={{ color: "white", fontFamily: "header" }}>
                  Benniditos BrewPub
                </Typography>
                <Typography sx={{ color: "white", fontFamily: "header" }}>
                  East on Sprague, Spokane, WA
                </Typography>
                <Button
                  sx={{ textTransform: "none", fontFamily: "body" }}
                  onClick={() => {
                    window.open("tel:+5092905018", "_blank");
                  }}
                >
                  509-290-5018
                </Button>
              </Box>
            </Fade>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
