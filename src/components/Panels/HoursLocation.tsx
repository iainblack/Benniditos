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
              justifyContent: "space-evenly",
            }}
          >
            <Box
              sx={{
                position: "relative",
                height: { xs: "50vh", md: "80vh" },
                width: { xs: "100%", md: "70%" },
                order: 2,
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
                height: { xs: "85vh", md: "80vh" },
                mr: { xs: 0, md: 3 },
                mb: { xs: 4, md: 0 },
                py: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                backgroundColor: "white",
              }}
            >
              <Box
                sx={{
                  justifyContent: "center",
                  mb: 6,
                }}
              >
                <Typography
                  sx={{
                    textAlign: "center",
                    mb: 1,
                    fontFamily: "Header",
                  }}
                  variant="h4"
                >
                  HOURS
                </Typography>
                <Divider
                  sx={{
                    mb: 1,
                    mx: { xs: "15%", sm: "30%", md: "20%" },
                    borderBottomStyle: "dashed",
                  }}
                />
                <Typography
                  variant="body1"
                  fontFamily="subheader"
                  sx={{ mb: 1 }}
                >
                  <b>Monday - Thursday</b>
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  11:00 AM - 10:00 PM
                </Typography>
                <Typography
                  variant="body1"
                  fontFamily="subheader"
                  sx={{ mb: 1 }}
                >
                  <b>Friday</b>
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  11:00 AM - 11:00 PM
                </Typography>
                <Typography
                  variant="body1"
                  fontFamily="subheader"
                  sx={{ mb: 1 }}
                >
                  <b>Saturday</b>
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  11:00 AM - 10:00 PM
                </Typography>
                <Typography
                  variant="body1"
                  fontFamily="subheader"
                  sx={{ mb: 1 }}
                >
                  <b>Sunday</b>
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  12:00 PM - 9:00 PM
                </Typography>
              </Box>
              <Box>
                <Box>
                  <Box sx={{ alignItems: "center" }}>
                    <Typography
                      sx={{
                        textAlign: "center",
                        mb: 1,
                        fontFamily: "header",
                      }}
                      variant="h4"
                    >
                      LOCATION
                    </Typography>
                    <Divider
                      sx={{
                        mb: 1,
                        mx: { xs: "15%", sm: "30%", md: "20%" },
                        borderBottomStyle: "dashed",
                      }}
                    />
                    <Button
                      onClick={() => {
                        window.open(
                          "http://maps.google.com/?q=1426 S Lincoln St, Spokane, WA 99203",
                          "_blank"
                        );
                      }}
                      sx={{
                        fontFamily: "header",
                        textTransform: "none",
                      }}
                    >
                      1426 S Lincoln St, Spokane, WA 99203
                    </Button>
                  </Box>
                  <Button
                    sx={{ fontFamily: "header" }}
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
    </Box>
  );
}
