import { Box } from "@mui/material";
import bg from "@/public/footer.jpg";

export default function FooterPanel() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "20vh",
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          mt: { xs: 4, md: 8 },
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
      ></Box>
    </Box>
  );
}
