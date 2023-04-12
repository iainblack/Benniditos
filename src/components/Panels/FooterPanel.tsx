import {
  Box,
  Button,
  Divider,
  IconButton,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import bg from "@/public/footer.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function FooterPanel() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        maxHeight: "20vh",
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            px: { xs: 1, md: 3 },
            py: 2,
            height: "100%",
            width: "100%",
          }}
        >
          <LocationContactInfo
            theme={theme}
            title=" Benniditos Pizza"
            address="1426 S Lincoln St, Spokane, WA 99203"
            onAddressClick={() => {
              window.open(
                "http://maps.google.com/?q=1426 S Lincoln St, Spokane, WA 99203",
                "_blank"
              );
            }}
            phone="(509) 455-7411"
            onPhoneClick={() => {
              window.open("tel:+5094557411", "_self");
            }}
          />
          <SocialMediaInfo theme={theme} />
          <LocationContactInfo
            theme={theme}
            title="Benniditos BrewPub"
            address="1909 E Sprague Ave, Spokane, WA 99202"
            onAddressClick={() => {
              window.open(
                "http://maps.google.com/?q=1909 E Sprague Ave, Spokane, WA 99202",
                "_blank"
              );
            }}
            phone="(509) 290-5018"
            onPhoneClick={() => {
              window.open("tel:+5092905018", "_self");
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

function LocationContactInfo(props: {
  theme: Theme;
  title: string;
  address: string;
  phone: string;
  onAddressClick: () => void;
  onPhoneClick: () => void;
}) {
  return (
    <Box>
      <Box>
        <Box sx={{ textAlign: "center" }}>
          <Box>
            <Typography
              sx={{
                color: "white",
                fontFamily: "header",
                fontSize: {
                  xs: props.theme.typography.body1.fontSize,
                  sm: props.theme.typography.h6.fontSize,
                },
                mb: 1,
              }}
            >
              {props.title}
            </Typography>
          </Box>
          <Box>
            <Button
              size="small"
              onClick={props.onAddressClick}
              sx={{
                fontFamily: "body",
                textTransform: "none",
                fontSize: { xs: 12, md: props.theme.typography.body1.fontSize },
              }}
            >
              {props.address}
            </Button>
          </Box>
          <Box>
            <Button
              size="small"
              sx={{
                fontFamily: "body",
                fontSize: { xs: 12, md: props.theme.typography.body1.fontSize },
              }}
              onClick={props.onPhoneClick}
            >
              {props.phone}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function SocialMediaInfo(props: { theme: Theme }) {
  const isSmallScreen = useMediaQuery(props.theme.breakpoints.down("sm"));
  return (
    <>
      <Divider
        orientation="vertical"
        variant="middle"
        sx={{ background: "white", display: { xs: "none", md: "block" } }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box>
          <Typography
            variant="body2"
            fontFamily={"header"}
            sx={{ color: "white", display: { xs: "none", md: "flex" } }}
          >
            Follow us on Instagram
          </Typography>
        </Box>
        <Box>
          <IconButton
            onClick={() => {
              window.open(
                "https://instagram.com/benniditospizza?igshid=Mzc1MmZhNjY=",
                "_blank"
              );
            }}
          >
            <InstagramIcon
              fontSize={isSmallScreen ? "small" : "large"}
              sx={{ color: "white" }}
            />
          </IconButton>
        </Box>
      </Box>
      <Divider
        orientation="vertical"
        variant="middle"
        sx={{ background: "white", display: { xs: "none", md: "block" } }}
      />
    </>
  );
}
