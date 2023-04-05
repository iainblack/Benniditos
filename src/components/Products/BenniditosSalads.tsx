import { Box, Typography, Divider } from "@mui/material";
import { BenniditosMenuProps } from "../../utils/utils";
import { BenniditosMenuData } from "../../utils/BenniditosMenu";

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
        sx={{
          width: "100%",
          border: "1px solid",
          borderTop: 0,
          height: "fit-content",
          py: 2,
          display: { xs: "block", md: "flex" },
          justifyContent: "space-evenly",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Box
            sx={{
              p: 1,
              mb: 3,
              borderColor: theme.palette.primary.main,
            }}
          >
            <Typography variant="h4" color="primary" fontFamily="header">
              {"SALADS"}
            </Typography>
          </Box>
          {BenniditosMenuData.salads.map((item, index) => {
            return (
              <Box key={item.name} sx={{ mb: 2, px: 1 }}>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h5" sx={{ mb: 1 }}>
                    {item.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    fontSize={12}
                    fontFamily="body"
                    sx={{
                      maxWidth: 400,
                      mx: "auto",
                      mb: 2,
                    }}
                  >
                    {item.description}
                  </Typography>
                  <Typography variant="body2" fontSize={12} fontFamily="body">
                    <b>{`${item.small} | ${item.medium} | ${item.large}`}</b>
                  </Typography>
                </Box>
                {index !== BenniditosMenuData.salads.length - 1 ? (
                  <Divider sx={{ mx: { xs: 4, sm: 20, md: 8 } }} />
                ) : null}
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
