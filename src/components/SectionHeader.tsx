import { Box, Typography } from "@mui/material";

interface SectionHeaderProps {
  title: string;
  imagePath: string;
}
export default function SectionHeader({
  title,
  imagePath,
}: SectionHeaderProps) {
  return (
    <Box>
      <Box
        sx={{
          height: "30vh",
          width: "100%",
          border: 1,
          borderBottom: 0,
          backgroundImage: `url('${imagePath}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="h4"
              fontFamily="header"
              sx={{ color: "white" }}
            >
              {title}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
