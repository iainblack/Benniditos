import {
  Box,
  useTheme,
  useMediaQuery,
  Slide,
  Typography,
  Button,
  Fade,
  IconButton,
} from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React, { useEffect } from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

interface TitlePanelProps {
  scrollToSouthHill: () => void;
  scrollToBrewPub: () => void;
}

export default function TitlePanel(props: TitlePanelProps) {
  const [animateLabel, setAnimateLabel] = React.useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setAnimateLabel(true);
    }, 1000);
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        height: { xs: "100vh", md: "100vh" },
        width: "100vw",
        mt: { xs: -10, sm: 0 },
      }}
    >
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <Image
          src="/meat primo 2.jpg"
          fill
          sizes="100%"
          alt="alt"
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center top",
            filter: "brightness(0.7)",
          }}
        />
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            zIndex: 1,
            position: "relative",
          }}
        >
          <Slide
            in
            timeout={1000}
            direction={"up"}
            container={containerRef.current}
          >
            <Box sx={{ mb: { xs: 16, md: 10 } }}>
              <Box
                sx={{
                  mt: 8,
                  display: "flex",
                  justifyContent: "center",
                  height: "25vh",
                  width: { xs: "80vw", md: "35vw" },
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <Image
                  src={"/ditosLogo.png"}
                  alt="Benniditos"
                  fill
                  sizes="100%"
                  priority
                  style={{
                    objectFit: "contain",
                    objectPosition: "center",
                    zIndex: 1,
                  }}
                />
              </Box>
            </Box>
          </Slide>
          <Slide
            in={animateLabel}
            timeout={1000}
            direction={"up"}
            container={containerRef.current}
          >
            <Box>
              <Box>
                <Button
                  endIcon={<KeyboardDoubleArrowRightIcon />}
                  variant="outlined"
                  sx={{
                    color: "white",
                    textTransform: "none",
                    borderRadius: 10,
                    borderColor: "white",
                    minWidth: 200,
                  }}
                  onClick={props.scrollToSouthHill}
                >
                  South Hill Location
                </Button>
              </Box>
              <Box>
                <Button
                  endIcon={<KeyboardDoubleArrowRightIcon />}
                  variant="outlined"
                  sx={{
                    color: "white",
                    textTransform: "none",
                    borderRadius: 10,
                    borderColor: "white",
                    minWidth: 200,
                    mt: 2,
                  }}
                  onClick={props.scrollToBrewPub}
                >
                  Sprague Location
                </Button>
              </Box>
            </Box>
          </Slide>
        </Box>
      </Box>
    </Box>
  );
}
