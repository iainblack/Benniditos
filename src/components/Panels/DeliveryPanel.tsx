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
              flexDirection: { xs: "column", xl: "row" },
              justifyContent: "space-between",
            }}
          >
            <Box
              id="map-container"
              sx={{
                position: "relative",
                width: { xs: "100%", xl: "70%" },
                height: { xs: "50vh", xl: "80vh" },
                order: { xs: 2, xl: 1 },
                border: 1,
                borderTop: { xs: 0, xl: 1 },
              }}
            >
              {/* <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDYtw6jLiRYtOFLkrDEoV0aR2J4U-Gd7b4&q=Bennidito's+Pizza+Spokane,+WA+99203&zoom=13"
              ></iframe> */}
              <Image
                src="/deliveryMap.png"
                alt="map"
                fill
                style={{ objectFit: "fill", objectPosition: "center" }}
              />
            </Box>
            <Box
              sx={{
                textAlign: "center",
                width: { xs: "100%", xl: "30%" },
                border: "1px solid",
                ml: { xs: 0, xl: 3 },
                px: 2,
                py: { xs: 2, xl: 8 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                backgroundColor: "white",
                order: { xs: 1, xl: 2 },
                minHeight: { xs: "fit-content", xl: "80vh" },
              }}
            >
              <Box
                sx={{
                  justifyContent: "center",
                  mb: 2,
                }}
              >
                <Typography
                  sx={{ textAlign: "center", mb: 1, fontFamily: "Header" }}
                  variant="h5"
                >
                  Delivery/Carry-Out
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
                  The South Hill location offers both carryout and delivery.
                  Call the store or order online.
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  sx={{ fontFamily: "body", mx: "auto", px: 2, mb: 6 }}
                >
                  Please reference image for our <b>delivery area</b>. If
                  ordering site claims you are out of range when you are not,
                  please call the store to place your order.
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
                    sx={{
                      textTransform: "none",
                      fontFamily: "header",
                      fontSize: theme.typography.body1.fontSize,
                    }}
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
                <Box sx={{ my: 1 }}>
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      fontFamily: "header",
                      fontSize: theme.typography.body1.fontSize,
                    }}
                    onClick={() => {
                      window.open("tel:+5094557411", "_self");
                    }}
                  >
                    (509) 455-7411
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
