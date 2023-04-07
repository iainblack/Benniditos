import {
  Box,
  Button,
  Divider,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import bg from "@/public/footer.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function FooterPanel() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        mt: { xs: 4, md: 0 },
        width: "100%",
        height: "20vh",
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
          <Box>
            <Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  sx={{
                    color: "white",
                    fontFamily: "subheader",
                    fontSize: { xs: 10, md: theme.typography.h6.fontSize },
                    mb: 1,
                  }}
                >
                  Benniditos Pizza
                </Typography>
                <Box>
                  <Button
                    size="small"
                    onClick={() => {
                      window.open(
                        "http://maps.google.com/?q=1426 S Lincoln St, Spokane, WA 99203",
                        "_blank"
                      );
                    }}
                    sx={{
                      fontFamily: "header",
                      textTransform: "none",
                      fontSize: { xs: 10, md: theme.typography.body1.fontSize },
                    }}
                  >
                    1426 S Lincoln St, Spokane, WA 99203
                  </Button>
                </Box>
                <Box>
                  <Button
                    size="small"
                    sx={{
                      fontFamily: "header",
                      fontSize: { xs: 10, md: theme.typography.body1.fontSize },
                    }}
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
          <Divider
            orientation="vertical"
            variant="middle"
            sx={{ background: "white", display: { xs: "none", md: "block" } }}
          />
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
          <Divider
            orientation="vertical"
            variant="middle"
            sx={{ background: "white", display: { xs: "none", md: "block" } }}
          />
          <Box>
            <Box sx={{ textAlign: "center" }}>
              <Box>
                <Typography
                  sx={{
                    color: "white",
                    fontFamily: "subheader",
                    fontSize: { xs: 10, md: 12 },
                    mb: 1,
                  }}
                >
                  Benniditos BrewPub
                </Typography>
              </Box>
              <Box>
                <Button
                  size="small"
                  onClick={() => {
                    window.open(
                      "http://maps.google.com/?q=1909 E Sprague Ave, Spokane, WA 99202",
                      "_blank"
                    );
                  }}
                  sx={{
                    fontFamily: "header",
                    textTransform: "none",
                    fontSize: { xs: 10, md: theme.typography.body1.fontSize },
                  }}
                >
                  1909 E Sprague Ave, Spokane, WA 99202
                </Button>
              </Box>
              <Box>
                <Button
                  size="small"
                  sx={{
                    fontFamily: "header",
                    fontSize: { xs: 10, md: theme.typography.body1.fontSize },
                  }}
                  onClick={() => {
                    window.open("tel:+5092905018", "_blank");
                  }}
                >
                  (509) 290-5018
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
