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
  CircularProgress,
} from "@mui/material";
import Image from "next/image";
import { GoogleMap, useLoadScript, KmlLayer } from "@react-google-maps/api";
import { useRef, useState, useCallback, useEffect } from "react";

interface HoursLocationProps {
  transitionIn: boolean;
}

export function BenniditosDeliveryPanel(props: HoursLocationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const [homeAddress, setHomeAddress] = useState("");
  const [isWithinBounds, setIsWithinBounds] = useState(false);
  let kmlLayer = useRef<any>(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBBGv_pZbvxC0tn-fC7Pt6UJ_W1OXfNKms",
  });
  const [map, setMap] = useState(null);
  const onLoad = useCallback((map: any) => {
    setMap(map);
  }, []);

  useEffect(() => {
    if (isLoaded && map) {
      kmlLayer.current = new window.google.maps.KmlLayer({
        url: "https://storage.googleapis.com/benniditos-map/ditos.kml",
        map: map,
      });
    }
  }, [map, isLoaded]);

  const onMarkerLoad = (marker: any) => {
    const geocoder = new window.google.maps.Geocoder();

    geocoder.geocode({ address: homeAddress }, (results, status) => {
      if (status === "OK") {
        const homeLocation = results && results[0].geometry.location;
        const kmlBounds = kmlLayer.current.getDefaultViewport();

        if (kmlBounds && kmlBounds.contains(homeLocation)) {
          console.log("IN BOUNDS");
          setIsWithinBounds(true);
        } else {
          console.log("NOT IN BOUNDS");
          setIsWithinBounds(false);
        }
      } else {
        console.log(
          "Geocode was not successful for the following reason:",
          status
        );
      }
    });
  };

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
                {!isLoaded && (
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      height: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CircularProgress />
                  </Box>
                )}
                {isLoaded && (
                  <GoogleMap
                    zoom={11.6}
                    center={{ lng: -117.416, lat: 47.6388 }}
                    mapContainerClassName={"mapContainer"}
                    onLoad={onLoad}
                  ></GoogleMap>
                )}
              </Box>
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
                <DeliveryInfo
                  theme={theme}
                  onMarkerLoad={onMarkerLoad}
                  homeAddress={homeAddress}
                  setHomeAddress={setHomeAddress}
                />
              </Box>
            </Box>
          </Fade>
        </Box>
      </Slide>
    </Box>
  );
}

function DeliveryInfo(props: {
  theme: Theme;
  homeAddress: string;
  setHomeAddress: any;
  onMarkerLoad: any;
}) {
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
          Delivery
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
          In addition to dine-in and carry-out, the South Hill location offers{" "}
          <b>delivery</b> and <b>online orders</b>.
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
      <input
        type="text"
        placeholder="Enter your home address"
        value={props.homeAddress}
        onChange={(e) => props.setHomeAddress(e.target.value)}
      />
      <button onClick={props.onMarkerLoad}>Check Address</button>
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
