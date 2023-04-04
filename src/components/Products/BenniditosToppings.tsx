import { Box, Typography, Divider } from "@mui/material";
import { BenniditosMenuProps } from "../../utils/utils";
import { BenniditosMenuData } from "../../utils/BenniditosMenu";

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
            <Box>
              <Typography variant="h5" sx={{ mb: 1 }}>
                {"Cheeses"}
              </Typography>
              <Divider sx={{ mx: { xs: 20, sm: 30, md: 0 }, mb: 1 }} />
            </Box>
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
            <Box>
              <Typography variant="h5" sx={{ mb: 1 }}>
                {"Meats"}
              </Typography>
              <Divider sx={{ mx: { xs: 20, sm: 30, md: 0 }, mb: 1 }} />
            </Box>
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
            <Box>
              <Typography variant="h5" sx={{ mb: 1 }}>
                {"Sauces"}
              </Typography>
              <Divider sx={{ mx: { xs: 20, sm: 30, md: 0 }, mb: 1 }} />
            </Box>
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
            <Box>
              <Typography variant="h5" sx={{ mb: 1 }}>
                {"Veggies"}
              </Typography>
              <Divider sx={{ mx: { xs: 20, sm: 30, md: 0 }, mb: 1 }} />
            </Box>
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
