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
import { deliveryAreaPath } from "../../assets/deliveryArea";
import { ErrorBoundary } from "../ErrorBoundary";

interface HoursLocationProps {
  transitionIn: boolean;
}

const libraries: (
  | "drawing"
  | "geometry"
  | "localContext"
  | "places"
  | "visualization"
)[] = ["places", "geometry"];

export function BenniditosDeliveryPanel(props: HoursLocationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
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
                  minHeight: { xs: "50vh", xl: "80vh" },
                  height: { xs: "50vh", xl: "unset" },
                  order: 2,
                  boxShadow: 8,
                  padding: { xs: 0, xl: 3 },
                  backgroundColor: "white",
                  borderRadius: 1,
                }}
              >
                <ErrorBoundary fallback={<MapUnavailable />}>
                  <DeliveryMap />
                </ErrorBoundary>
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
                  borderRadius: 1,
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

function MapUnavailable() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        p: 4,
      }}
    >
      <Typography variant="body1" sx={{ fontFamily: "body" }}>
        The delivery map is unavailable right now. Please call the store to
        check whether we deliver to your address.
      </Typography>
    </Box>
  );
}

function logGeocodeFailure(status: google.maps.GeocoderStatus) {
  console.log("Geocode was not successful for the following reason:", status);
}

function DeliveryMap() {
  const [homeAddress, setHomeAddress] = useState("");
  const [autoComplete, setAutoComplete] = useState<any>(null);
  const [isWithinBounds, setIsWithinBounds] = useState<boolean | null>(null);
  const deliveryArea = useRef<google.maps.Polygon | null>(null);
  const markerRef = useRef<any>(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries: libraries,
    // The quarterly channel changes less often than the default weekly one,
    // giving more notice before Google removes features we rely on.
    version: "quarterly",
  });
  const [map, setMap] = useState(null);
  const onLoad = useCallback((map: any) => {
    setMap(map);
  }, []);

  const onAutoCompleteLoad = (autocomplete: any) => {
    setAutoComplete(autocomplete);
  };

  useEffect(() => {
    if (!isLoaded || !map) return;
    let cancelled = false;
    let storeMarker: google.maps.Marker | null = null;
    // KmlLayer was removed from the Maps JS API in v3.66, so draw the
    // delivery area from src/assets/ditos.kml as a native polygon instead.
    deliveryArea.current = new window.google.maps.Polygon({
      paths: deliveryAreaPath,
      map: map,
      strokeColor: "#FF0000",
      strokeWeight: 3,
      fillOpacity: 0,
      clickable: false,
    });
    const bounds = new window.google.maps.LatLngBounds();
    deliveryAreaPath.forEach((point) => bounds.extend(point));
    (map as google.maps.Map).fitBounds(bounds);
    new window.google.maps.Geocoder().geocode(
      { address: "1426 S Lincoln St, Spokane, WA 99203" },
      (results, status) => {
        if (cancelled) return;
        try {
          if (status === "OK" && results?.length) {
            storeMarker = new window.google.maps.Marker({
              position: results[0].geometry.location,
              map: map,
              icon: {
                url: "/favicon.ico",
                scaledSize: new window.google.maps.Size(30, 30),
              },
            });
          } else {
            logGeocodeFailure(status);
          }
        } catch (error) {
          console.error("Failed to add store marker:", error);
        }
      }
    );
    return () => {
      cancelled = true;
      deliveryArea.current?.setMap(null);
      deliveryArea.current = null;
      storeMarker?.setMap(null);
    };
  }, [map, isLoaded]);

  const removeMarker = () => {
    if (markerRef.current) {
      markerRef.current.setMap(null);
      markerRef.current = null;
    }
  };

  // Callbacks from the Maps API run outside React rendering, so an error
  // boundary can't catch them; guard them here instead.
  const validateAddress = (address: string) => {
    if (!address) return;
    try {
      new window.google.maps.Geocoder().geocode(
        { address },
        (results, status) => {
          try {
            if (status === "OK" && results?.length) {
              const homeLocation = results[0].geometry.location;
              const area = deliveryArea.current;
              // Leave the indicator blank if the area hasn't been drawn yet
              // rather than wrongly reporting "out of range".
              setIsWithinBounds(
                area
                  ? window.google.maps.geometry.poly.containsLocation(
                      homeLocation,
                      area
                    )
                  : null
              );

              removeMarker();
              markerRef.current = new window.google.maps.Marker({
                position: homeLocation,
                map: map,
              });
            } else {
              logGeocodeFailure(status);
            }
          } catch (error) {
            console.error("Failed to validate address:", error);
          }
        }
      );
    } catch (error) {
      console.error("Failed to validate address:", error);
    }
  };

  useEffect(() => {
    if (homeAddress === "") {
      setIsWithinBounds(null);
      removeMarker();
    }
  }, [homeAddress]);

  const onPlaceChanged = () => {
    try {
      if (autoComplete !== null) {
        const place = autoComplete.getPlace();
        if (place?.formatted_address) {
          setHomeAddress(place.formatted_address);
          validateAddress(place.formatted_address);
        }
      } else {
        console.log("Autocomplete is not loaded yet!");
      }
    } catch (error) {
      console.error("Failed to handle selected place:", error);
    }
  };

  if (loadError) {
    console.error("Failed to load Google Maps:", loadError);
    return <MapUnavailable />;
  }

  if (!isLoaded) {
    return (
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
    );
  }

  return (
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
        center={{ lng: -117.416, lat: 47.6388 }}
        mapContainerClassName={"mapContainer"}
        onLoad={onLoad}
        options={{
          mapTypeControl: false,
          streetViewControl: false,
        }}
      ></GoogleMap>
    </>
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
          sx={{
            backgroundColor: "white",
            minWidth: { xs: 300, md: 350 },
            borderRadius: 1,
          }}
          placeholder="Search address or location..."
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
          Online Orders & Delivery
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
          Please reference the map for our <b>area of delivery</b>. If our
          online ordering site claims you are out of range when you are not,
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
              fontSize: props.theme.typography.body1.fontSize,
            }}
            onClick={() => {
              window.open(
                "https://benniditos.weborder.net/",
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
