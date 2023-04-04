import { Box, Typography, Divider } from "@mui/material";
import { BenniditosMenuProps, BenniditosMenuData } from "../utils";

export default function BenniditosToppings({
  theme,
  isSmallScreen,
}: BenniditosMenuProps) {
  return (
    <Box>
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
        <Box>
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Typography variant="h5" sx={{ mb: 1 }}>
              {"Cheeses"}
            </Typography>
            {isSmallScreen ? (
              <Divider sx={{ mx: 4, mb: 2 }} />
            ) : (
              <Divider sx={{ mb: 1 }} />
            )}
            {BenniditosMenuData.toppings.cheese.map((item) => {
              return (
                <Box key={item} sx={{ px: 1 }}>
                  <Box>
                    <Typography
                      variant="body2"
                      fontSize={12}
                      sx={{
                        maxWidth: 400,
                        mx: "auto",
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Typography variant="h5" sx={{ mb: 1 }}>
              {"Meats"}
            </Typography>
            {isSmallScreen ? (
              <Divider sx={{ mx: 4, mb: 2 }} />
            ) : (
              <Divider sx={{ mb: 1 }} />
            )}
            {BenniditosMenuData.toppings.meats.map((item) => {
              return (
                <Box key={item} sx={{ px: 1 }}>
                  <Box>
                    <Typography
                      variant="body2"
                      fontSize={12}
                      sx={{
                        maxWidth: 400,
                        mx: "auto",
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Typography variant="h5" sx={{ mb: 1 }}>
              {"Sauces"}
            </Typography>
            {isSmallScreen ? (
              <Divider sx={{ mx: 4, mb: 2 }} />
            ) : (
              <Divider sx={{ mb: 1 }} />
            )}
            {BenniditosMenuData.toppings.sauces.map((item) => {
              return (
                <Box key={item} sx={{ px: 1 }}>
                  <Box>
                    <Typography
                      variant="body2"
                      fontSize={12}
                      sx={{
                        maxWidth: 400,
                        mx: "auto",
                      }}
                    >
                      {item}
                    </Typography>
                    {item === "Pesto Sauce" || item === "Alfredo Sauce" ? (
                      <Typography
                        variant="body2"
                        fontSize={10}
                        sx={{
                          maxWidth: 400,
                          mx: "auto",
                        }}
                      >
                        <b>(2.00 | 2.65 | 3.00)</b>
                      </Typography>
                    ) : null}
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box>
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Typography variant="h5" sx={{ mb: 1 }}>
              {"Veggies"}
            </Typography>
            {isSmallScreen ? (
              <Divider sx={{ mx: 4, mb: 2 }} />
            ) : (
              <Divider sx={{ mb: 1 }} />
            )}
            {BenniditosMenuData.toppings.veggies.map((item) => {
              return (
                <Box key={item} sx={{ px: 1 }}>
                  <Box>
                    <Typography
                      variant="body2"
                      fontSize={12}
                      sx={{
                        maxWidth: 400,
                        mx: "auto",
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
            <Typography
              variant="caption"
              sx={{ mt: 6, display: "flex", justifyContent: "center" }}
            >
              <b>* add .50¢</b>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
