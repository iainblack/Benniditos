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

export function BenniditosHours(props: HoursLocationProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const theme = useTheme();
  return (
    <Box
      ref={containerRef}
      sx={{
        height: { xs: "calc( 140vh - 76px)", md: "calc(90vh - 76px)" },
        width: "100vw",
      }}
    >
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
              height: { xs: "calc(50vh - 76px)", md: "calc(90vh - 76px)" },
              width: { xs: "100%", md: "70%" },
              order: 2,
              mb: { xs: 3, md: 0 },
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
              height: "calc(90vh - 76px)",
              mr: { xs: 0, md: 3 },
              mb: { xs: 8, md: 0 },
              py: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <Box sx={{ justifyContent: "center", mb: 6 }}>
              <Typography sx={{ textAlign: "center", mb: 1 }} variant="h4">
                Hours
              </Typography>
              <Divider sx={{ mb: 1, mx: 3 }} />
              <Typography variant="body1" sx={{ mb: 1 }}>
                <b>Monday - Thursday</b>
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                11:00 AM - 10:00 PM
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <b>Friday</b>
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                11:00 AM - 11:00 PM
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <b>Saturday</b>
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                11:00 AM - 10:00 PM
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <b>Sunday</b>
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                12:00 PM - 9:00 PM
              </Typography>
            </Box>
            <Box sx={{ pb: 2 }}>
              <Box>
                <Box sx={{ alignItems: "center" }}>
                  <Typography sx={{ textAlign: "center", mb: 1 }} variant="h4">
                    Location
                  </Typography>
                  <Divider sx={{ mb: 1, mx: 3 }} />
                  <Button
                    startIcon={<LocationOnIcon />}
                    onClick={() => {
                      window.open(
                        "http://maps.google.com/?q=1426 S Lincoln St, Spokane, WA 99203",
                        "_blank"
                      );
                    }}
                    sx={{ textTransform: "none" }}
                  >
                    1426 S Lincoln St, Spokane, WA 99203
                  </Button>
                </Box>
                <Button
                  startIcon={<LocalPhoneIcon />}
                  onClick={() => {
                    window.open("tel:+5094557411", "_blank");
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
  );
}
