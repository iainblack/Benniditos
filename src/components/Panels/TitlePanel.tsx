import {
  Box,
  useTheme,
  useMediaQuery,
  Slide,
  Button,
  Fade,
  IconButton,
} from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React, { useEffect } from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { SocialMediaInfo } from "@/src/utils/utils";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

interface TitlePanelProps {
  scrollToSouthHill: () => void;
  scrollToBrewPub: () => void;
  scrollToAbout: () => void;
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
        height: "100vh",
        width: "100vw",
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
            justifyContent: { xs: "space-evenly", md: "center" },
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
              {!isSmallScreen && (
                <>
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
                </>
              )}
              {isSmallScreen && (
                <IconButton>
                  <KeyboardDoubleArrowDownIcon
                    className="bounce"
                    sx={{
                      color: "white",
                      fontSize: "2.5rem",
                    }}
                    onClick={props.scrollToAbout}
                  />
                </IconButton>
              )}
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
