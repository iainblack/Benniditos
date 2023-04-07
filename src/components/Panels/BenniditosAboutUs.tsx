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
import SectionHeader from "../SectionHeader";

interface AboutUsProps {
  transitionIn: boolean;
}

export function BenniditosAboutUs(props: AboutUsProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box ref={containerRef}>
        <Fade in={props.transitionIn} timeout={1000}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column" },
              justifyContent: "space-evenly",
            }}
          >
            <SectionHeader title="ABOUT US" imagePath={"/ditosMain.jpg"} />
            <Box
              sx={{
                textAlign: "center",
                width: "100%",
                border: "1px solid",
                mb: { xs: 4, md: 0 },
                p: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                backgroundColor: "white",
                order: 2,
              }}
            >
              <Box
                sx={{
                  justifyContent: "center",
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
                  Lorem ipsum
                </Typography>
                <Divider
                  sx={{
                    mb: 1,
                    mx: { xs: "15%", sm: "30%" },
                    borderBottomStyle: "dashed",
                  }}
                />
                <Typography
                  sx={{
                    textAlign: "center",
                    p: 4,
                    fontFamily: "body",
                  }}
                  variant="body1"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse ut risus convallis, aliquet felis sit amet,
                  vulputate tellus. Sed mattis quis nunc eu maximus. Ut eget
                  feugiat nisi, nec varius nibh. Proin pharetra scelerisque
                  metus vitae finibus. Aliquam suscipit est vitae ligula iaculis
                  sollicitudin. Vivamus eget convallis turpis. Phasellus sed
                  libero dui. Vestibulum ante ipsum primis in faucibus orci
                  luctus et ultrices posuere cubilia curae; Sed at mauris sit
                  amet odio egestas egestas. Mauris ullamcorper leo vel
                  efficitur ullamcorper. Suspendisse vehicula dolor arcu,
                  hendrerit lobortis eros consequat eget. Praesent venenatis est
                  a augue eleifend consectetur. Phasellus porttitor id lectus
                  non congue. Nullam faucibus quis tortor sed accumsan. Nulla
                  sapien lectus, mattis non turpis vitae, tempus mollis neque.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Box>
    </Box>
  );
}
