import {
  Box,
  Button,
  Divider,
  Fade,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import SectionHeader from "../SectionHeader";

interface HoursLocationProps {
  transitionIn: boolean;
}

export function BenniditosHours(props: HoursLocationProps) {
  const theme = useTheme();
  const containerRef = React.useRef<HTMLDivElement>(null);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        //minWidth: { xs: "fit-content", lg: "100vw" },
      }}
    >
      <Box ref={containerRef}>
        <SectionHeader title="HOURS & LOCATIONS" imagePath="/ditosMain.jpg" />
        <Fade in={props.transitionIn} timeout={1000}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                textAlign: "center",
                width: "100%",
                border: "1px solid",
                p: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "white",
                order: 1,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  justifyContent: "space-around",
                  my: 1,
                }}
              >
                <BenniditosInfo theme={theme} />
                <BrewPubInfo theme={theme} />
              </Box>
            </Box>
          </Box>
        </Fade>
      </Box>
    </Box>
  );
}

function BenniditosInfo(props: { theme: Theme }) {
  return (
    <Box sx={{ mb: { xs: 6, md: 0 }, p: { xs: 0, md: 4 } }}>
      <Box>
        <Box sx={{ mb: { xs: 3, md: 6 } }}>
          <Box sx={{ alignItems: "center" }}>
            <Typography
              sx={{
                textAlign: "center",
                mb: 1,
                fontFamily: "header",
              }}
              variant="h4"
            >
              Bennidito&apos;s Pizza
            </Typography>
            <Divider
              sx={{
                mb: 1,
                mx: { xs: "15%", sm: "30%", md: "20%" },
                borderBottomStyle: "dashed",
              }}
            />
            <Button
              size="large"
              onClick={() => {
                window.open(
                  "http://maps.google.com/?q=1426 S Lincoln St, Spokane, WA 99203",
                  "_blank"
                );
              }}
              sx={{
                fontFamily: "header",
                textTransform: "none",
                fontSize: props.theme.typography.body1.fontSize,
              }}
            >
              1426 S Lincoln St, Spokane, WA 99203
            </Button>
          </Box>
          <Button
            size="large"
            sx={{
              fontFamily: "header",
              fontSize: props.theme.typography.body1.fontSize,
            }}
            onClick={() => {
              window.open("tel:+5094557411", "_blank");
            }}
          >
            (509) 455-7411
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          justifyContent: "center",
        }}
      >
        <Typography variant="body1" fontFamily="subheader" sx={{ mb: 1 }}>
          <b>Monday - Thursday</b>
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          11:00 AM - 10:00 PM
        </Typography>
        <Typography variant="body1" fontFamily="subheader" sx={{ mb: 1 }}>
          <b>Friday</b>
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          11:00 AM - 11:00 PM
        </Typography>
        <Typography variant="body1" fontFamily="subheader" sx={{ mb: 1 }}>
          <b>Saturday</b>
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          11:00 AM - 10:00 PM
        </Typography>
        <Typography variant="body1" fontFamily="subheader" sx={{ mb: 1 }}>
          <b>Sunday</b>
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          12:00 PM - 9:00 PM
        </Typography>
      </Box>
    </Box>
  );
}

function BrewPubInfo(props: { theme: Theme }) {
  return (
    <Box sx={{ p: { xs: 0, md: 4 } }}>
      <Box sx={{ mb: { xs: 3, md: 6 } }}>
        <Box sx={{ alignItems: "center" }}>
          <Typography
            sx={{
              textAlign: "center",
              mb: 1,
              fontFamily: "header",
            }}
            variant="h4"
          >
            Bennidito&apos;s BrewPub
          </Typography>
          <Divider
            sx={{
              mb: 1,
              mx: { xs: "15%", sm: "30%", md: "20%" },
              borderBottomStyle: "dashed",
            }}
          />
          <Button
            size="large"
            onClick={() => {
              window.open(
                "http://maps.google.com/?q=1909 E Sprague Ave, Spokane, WA 99202",
                "_blank"
              );
            }}
            sx={{
              fontFamily: "header",
              textTransform: "none",
              fontSize: props.theme.typography.body1.fontSize,
            }}
          >
            1909 E Sprague Ave, Spokane, WA 99202
          </Button>
        </Box>
        <Button
          size="large"
          sx={{
            fontFamily: "header",
            fontSize: props.theme.typography.body1.fontSize,
          }}
          onClick={() => {
            window.open("tel:+5092905018", "_blank");
          }}
        >
          (509) 290-5018
        </Button>
      </Box>
      <Box
        sx={{
          justifyContent: "center",
        }}
      >
        <Typography variant="body1" fontFamily="subheader" sx={{ mb: 1 }}>
          <b>Monday - Wednesday</b>
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          11:00 AM - 8:00 PM
        </Typography>
        <Typography variant="body1" fontFamily="subheader" sx={{ mb: 1 }}>
          <b>Thursday - Saturday</b>
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          11:00 AM - 9:00 PM
        </Typography>
        <Typography variant="body1" fontFamily="subheader" sx={{ mb: 1 }}>
          <b>Sunday</b>
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Closed
        </Typography>
      </Box>
      <Box></Box>
    </Box>
  );
}
