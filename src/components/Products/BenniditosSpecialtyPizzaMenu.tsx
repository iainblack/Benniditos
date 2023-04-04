import { Box, Typography, Divider } from "@mui/material";
import { BenniditosMenuProps } from "../../utils/utils";
import { BenniditosMenuData } from "../../utils/BenniditosMenu";

export default function BenniditosSpecialtyPizzaMenu({
  theme,
  isSmallScreen,
}: BenniditosMenuProps) {
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          border: "1px solid",
          height: "fit-content",
          py: 2,
          display: { xs: "block", md: "flex" },
          justifyContent: "space-evenly",
        }}
      >
        <Box id="menu-column-1" sx={{ textAlign: "center" }}>
          {BenniditosMenuData.specialtyPizzas.left.map((item, index) => {
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
                      height: { xs: "auto", md: 50 },
                    }}
                  >
                    {item.description}
                  </Typography>
                  <Typography variant="body2" fontSize={12}>
                    <b>{`${item.small} | ${item.medium} | ${item.large}`}</b>
                  </Typography>
                </Box>
                {index !==
                BenniditosMenuData.specialtyPizzas.left.length - 1 ? (
                  <Divider sx={{ mx: { xs: 4, sm: 20, md: 8 } }} />
                ) : null}
              </Box>
            );
          })}
        </Box>
        <Box id="menu-column-2" sx={{ textAlign: "center" }}>
          {BenniditosMenuData.specialtyPizzas.right.map((item, index) => {
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
                      height: { xs: "auto", md: 50 },
                    }}
                  >
                    {item.description}
                  </Typography>
                  <Typography variant="body2" fontSize={12}>
                    <b>{`${item.small} | ${item.medium} | ${item.large}`}</b>
                  </Typography>
                </Box>
                {index !==
                BenniditosMenuData.specialtyPizzas.right.length - 1 ? (
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
