import { Box, Typography, Divider } from "@mui/material";
import { BenniditosMenuData, BenniditosMenuProps } from "../utils";

export default function BenniditosSalads({
  theme,
  isSmallScreen,
}: BenniditosMenuProps) {
  return (
    <Box>
      <Box
        sx={{
          textAlign: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      ></Box>
      <Box
        id="menu-columns"
        sx={{
          width: "100%",
          border: "1px solid",
          height: "fit-content",
          py: 2,
          display: { xs: "block", md: "flex" },
          justifyContent: "space-evenly",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          {BenniditosMenuData.salads.map((item, index) => {
            return (
              <Box key={item.name} sx={{ mb: 2, px: 1 }}>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h5">{item.name}</Typography>
                  <Typography
                    variant="body2"
                    fontSize={12}
                    sx={{
                      maxWidth: 400,
                      mx: "auto",
                    }}
                  >
                    {item.description}
                  </Typography>
                  <Typography variant="body2" fontSize={12}>
                    <b>{`${item.small} | ${item.medium} | ${item.large}`}</b>
                  </Typography>
                </Box>
                {index !== BenniditosMenuData.salads.length - 1 ? (
                  <Divider sx={{ mx: { xs: 4, md: 8 } }} />
                ) : null}
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
