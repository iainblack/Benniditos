import {
  Box,
  useTheme,
  useMediaQuery,
  Slide,
  Button,
  Fade,
} from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React, { useEffect } from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { SocialMediaInfo } from "@/src/utils/utils";

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
          position: "relative",
        }}
      >
        <Image
          src="/meat primo 2.jpg"
          fill
          sizes="100%"
          alt="alt"
          priority={true}
          placeholder="blur"
          blurDataURL="/blur.png"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            filter: "brightness(0.5)",
          }}
        />
        <Box
          ref={containerRef}
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
          <Fade in timeout={1750}>
            <Box>
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
                      priority={true}
                      style={{
                        objectFit: "contain",
                        objectPosition: "center",
                        zIndex: 1,
                      }}
                    />
                  </Box>
                </Box>
              </Slide>
            </Box>
          </Fade>
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
          <Slide
            in={animateLabel}
            timeout={1000}
            direction={"up"}
            container={containerRef.current}
          >
            <Box sx={{ position: "absolute", right: 10, bottom: 0 }}>
              <SocialMediaInfo theme={theme} />
            </Box>
          </Slide>
        </Box>
      </Box>
    </Box>
  );
}
