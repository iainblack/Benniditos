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
        height: "fit-content",
      }}
    >
      <Box ref={containerRef}>
        <Fade in={props.transitionIn} timeout={1000}>
          <Box
            sx={{
              height: "fit-content",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: { xs: "100%", md: "70%" },
                height: { xs: "50vh", md: "100%" },
                order: { xs: 2, md: 1 },
                my: { xs: 4, md: 0 },
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
                ml: { xs: 0, md: 3 },
                my: { xs: 4, md: 0 },
                px: 2,
                py: { xs: 4, md: 8 },
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
                  DELIVERY
                </Typography>
                <Divider
                  sx={{
                    mb: 2,
                    mx: { xs: "15%", sm: "30%", md: "20%" },
                    borderBottomStyle: "dashed",
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    mx: "auto",
                    px: 2,
                    fontFamily: "body",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse ut risus convallis, aliquet felis sit amet,
                  vulputate tellus. Sed mattis quis nunc eu maximus. Ut eget
                  feugiat nisi, nec varius nibh. Proin pharetra scelerisque
                  metus vitae finibus. Aliquam suscipit est vitae ligula iaculis
                  sollicitudin. Vivamus eget convallis turpis. Phasellus sed
                  libero dui. Vestibulum ante ipsum primis in faucibus orci
                  luctus et ultrices posuere cubilia curae; Sed at mauris sit
                  amet odio egestas egestas.
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box sx={{ my: 1 }}>
                  <Button
                    variant="outlined"
                    sx={{ textTransform: "none", fontFamily: "header" }}
                    onClick={() => {
                      window.open(
                        "https://weborder7.microworks.com/benniditos/",
                        "_blank"
                      );
                    }}
                  >
                    Order Online
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Box>
    </Box>
  );
}
