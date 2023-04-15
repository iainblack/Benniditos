import {
  Box,
  Button,
  Divider,
  Fade,
  Theme,
  Typography,
  useTheme,
  Slide,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import React from "react";

interface HoursLocationProps {
  transitionIn: boolean;
}

export function BenniditosDeliveryPanel(props: HoursLocationProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));
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
      <Slide in={props.transitionIn} timeout={1000} direction="left">
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
              {isLargeScreen && (
                <Box
                  id="map-container"
                  sx={{
                    mt: { xs: 4, xl: 0 },
                    position: "relative",
                    width: { xs: "100%", xl: "70%" },
                    height: { xs: "50vh", xl: "80vh" },
                    order: 2,
                    boxShadow: 8,
                    padding: { xs: 0, xl: 3 },
                    backgroundColor: "white",
                  }}
                >
                  {/* Placeholder for google maps api implementation/}
              {/* <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDYtw6jLiRYtOFLkrDEoV0aR2J4U-Gd7b4&q=Bennidito's+Pizza+Spokane,+WA+99203&zoom=13"
              ></iframe> */}
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src="/deliveryMap.png"
                      alt="map"
                      fill
                      style={{ objectFit: "fill", objectPosition: "center" }}
                    />
                  </Box>
                </Box>
              )}
              <Box
                sx={{
                  textAlign: "center",
                  width: { xs: "100%", xl: "30%" },
                  boxShadow: 8,
                  mr: { xs: 0, xl: 3 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  backgroundColor: "white",
                  order: 1,
                  p: 4,
                  minHeight: { xs: "fit-content", xl: "80vh" },
                }}
              >
                <DeliveryInfo theme={theme} />
              </Box>
            </Box>
          </Fade>
        </Box>
      </Slide>
    </Box>
  );
}

function DeliveryInfo(props: { theme: Theme }) {
  return (
    <>
      <Box
        sx={{
          justifyContent: "center",
          mb: 2,
        }}
      >
        <Typography
          sx={{ textAlign: "center", mb: 1, fontFamily: "Header" }}
          variant="h4"
        >
          Delivery & Carry-Out
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
          The South Hill location offers both carryout and delivery. Call the
          store or order online.
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="body1"
          sx={{ fontFamily: "body", mx: "auto", px: 2, mb: 6 }}
        >
          Please reference the map for our <b>area of delivery</b>. If the
          ordering site claims you are out of range when you are not, please
          call the store to place your order.
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
              fontSize: props.theme.typography.body1.fontSize,
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
              fontSize: props.theme.typography.body1.fontSize,
            }}
            onClick={() => {
              window.open("tel:+5094557411", "_self");
            }}
          >
            (509) 455-7411
          </Button>
        </Box>
      </Box>
    </>
  );
}
