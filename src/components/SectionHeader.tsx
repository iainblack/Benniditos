import { Box, Typography } from "@mui/material";
import Image from "next/image";

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
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src={imagePath}
          placeholder="blur"
          blurDataURL={imagePath}
          fill
          sizes="100%"
          alt="alt"
          // priority={true}
          style={{
            objectFit: "cover",
            objectPosition: "center",
            filter: "brightness(0.5)",
          }}
        />
        <Box
          sx={{
            textAlign: "center",
            position: "relative",
          }}
        >
          <Typography
            variant="h4"
            fontFamily="header"
            sx={{ color: "white", zIndex: 2 }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
