import {
  Box,
  Button,
  Divider,
  Fade,
  Theme,
  Typography,
  useTheme,
  Slide,
  CircularProgress,
  TextField,
} from "@mui/material";
import Image from "next/image";
import { GoogleMap, useLoadScript, Autocomplete } from "@react-google-maps/api";
import { useRef, useState, useCallback, useEffect, useMemo } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

interface HoursLocationProps {
  transitionIn: boolean;
}

const libraries: (
  | "drawing"
  | "geometry"
  | "localContext"
  | "places"
  | "visualization"
)[] = ["places"];

export function BenniditosDeliveryPanel(props: HoursLocationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const [homeAddress, setHomeAddress] = useState("");
  const [autoComplete, setAutoComplete] = useState<any>(null);
  const [isWithinBounds, setIsWithinBounds] = useState<boolean | null>(null);
  const kmlLayer = useRef<any>(null);
  const markerRef = useRef<any>(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries: libraries,
  });
  const [map, setMap] = useState(null);
  const onLoad = useCallback((map: any) => {
    setMap(map);
  }, []);

  const onAutoCompleteLoad = (autocomplete: any) => {
    setAutoComplete(autocomplete);
  };

  useEffect(() => {
    if (isLoaded && map) {
      kmlLayer.current = new window.google.maps.KmlLayer({
        url: "https://storage.googleapis.com/benniditos-map/ditos.kml",
        map: map,
      });
      new window.google.maps.Geocoder().geocode(
        { address: "1426 S Lincoln St, Spokane, WA 99203" },
        (results, status) => {
          if (status === "OK") {
            const homeLocation = results && results[0].geometry.location;
            new window.google.maps.Marker({
              position: homeLocation,
              map: map,
              icon: {
                url: "/favicon.ico",
                scaledSize: new window.google.maps.Size(30, 30),
              },
            });
          } else {
            console.log(
              "Geocode was not successful for the following reason:",
              status
            );
          }
        }
      );
    }
  }, [map, isLoaded]);

  const addMarker = async (val: string, geocoder: google.maps.Geocoder) => {
    if (val) {
      geocoder.geocode({ address: val }, (results, status) => {
        if (status === "OK") {
          const homeLocation = results && results[0].geometry.location;
          const marker = new window.google.maps.Marker({
            position: homeLocation,
            map: map,
          });
          if (markerRef.current) {
            markerRef.current.setMap(null);
          }
          markerRef.current = marker;
        } else {
          console.log(
            "Geocode was not successful for the following reason:",
            status
          );
        }
      });
    }
  };

  const removeMarker = () => {
    if (markerRef.current) {
      markerRef.current.setMap(null);
    }
  };

  const validateAddress = (address: string) => {
    if (!address) return;
    const geocoder = new window.google.maps.Geocoder();

    geocoder.geocode({ address }, (results, status) => {
      if (status === "OK") {
        const homeLocation = results && results[0].geometry.location;
        const kmlBounds = kmlLayer.current.getDefaultViewport();

        if (kmlBounds && kmlBounds.contains(homeLocation)) {
          setIsWithinBounds(true);
        } else {
          console.log("NOT IN BOUNDS");
          setIsWithinBounds(false);
        }
        addMarker(address, geocoder);
      } else {
        console.log(
          "Geocode was not successful for the following reason:",
          status
        );
      }
    });
  };

  useEffect(() => {
    if (homeAddress === "") {
      setIsWithinBounds(null);
      removeMarker();
    }
  }, [homeAddress]);

  const onPlaceChanged = () => {
    if (autoComplete !== null) {
      const place = autoComplete.getPlace();
      if (place.formatted_address) {
        setHomeAddress(place.formatted_address);
        validateAddress(place.formatted_address);
      }
    } else {
      console.log("Autocomplete is not loaded yet!");
    }
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
                      position: "relative",
                    }}
                  >
                    <CircularProgress />
                  </Box>
                )}
                {isLoaded && (
                  <>
                    <Box
                      sx={{
                        position: "absolute",
                        left: "50%",
                        top: "5%",
                        transform: "translate(-50%)",
                        zIndex: 99,
                      }}
                    >
                      <PlacesAutocomplete
                        setSelected={setHomeAddress}
                        onPlaceChanged={onPlaceChanged}
                        onAutoCompleteLoad={onAutoCompleteLoad}
                        value={homeAddress}
                        setValue={setHomeAddress}
                        isInBounds={isWithinBounds}
                      />
                    </Box>
                    <GoogleMap
                      zoom={11.6}
                      center={{ lng: -117.416, lat: 47.6388 }}
                      mapContainerClassName={"mapContainer"}
                      onLoad={onLoad}
                      options={{
                        mapTypeControl: false,
                        streetViewControl: false,
                      }}
                    ></GoogleMap>
                  </>
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
                <DeliveryInfo theme={theme} />
              </Box>
            </Box>
          </Fade>
        </Box>
      </Slide>
    </Box>
  );
}

function PlacesAutocomplete(props: {
  setSelected: any;
  onPlaceChanged: any;
  onAutoCompleteLoad: any;
  value: string;
  setValue: any;
  isInBounds: boolean | null;
}) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Autocomplete
        onPlaceChanged={props.onPlaceChanged}
        onLoad={props.onAutoCompleteLoad}
        options={{
          componentRestrictions: { country: "us" },
        }}
      >
        <TextField
          sx={{ backgroundColor: "white", minWidth: 250, borderRadius: 1 }}
          placeholder="Search for your address"
          variant="outlined"
          size="small"
          value={props.value}
          onChange={(e) => {
            props.setValue(e.target.value);
          }}
          inputProps={{
            style: {
              fontFamily: "body",
              fontSize: "14px",
            },
          }}
        />
      </Autocomplete>
      {props.isInBounds !== null && props.isInBounds && (
        <CheckCircleIcon sx={{ color: "green", ml: 1 }} />
      )}
      {props.isInBounds !== null && !props.isInBounds && (
        <CancelIcon sx={{ color: "red", ml: 1 }} />
      )}
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
