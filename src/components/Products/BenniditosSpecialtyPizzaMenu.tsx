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
          border: 1,
          borderTop: 0,
          height: "fit-content",
          py: 2,
        }}
      >
        <Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                p: 1,
                mb: 3,
              }}
            >
              <Typography
                variant="h4"
                color="primary"
                sx={{ fontFamily: "header", textAlign: "center" }}
              >
                {"SPECIALTY PIZZAS"}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "block", md: "flex" },
              justifyContent: "space-evenly",
            }}
          >
            <Box id="menu-column-1" sx={{ textAlign: "center" }}>
              {BenniditosMenuData.specialtyPizzas.left.map((item, index) => {
                return (
                  <Box key={item.name} sx={{ mb: 2, px: 1 }}>
                    <Box sx={{ mb: 2 }}>
                      <Typography
                        variant="h5"
                        sx={{ fontFamily: "subheader", mb: 2 }}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        fontSize={12}
                        sx={{
                          maxWidth: 400,
                          mx: "auto",
                          height: { xs: "auto", md: 50 },
                          fontFamily: "body",
                          mb: { xs: 2, md: 0 },
                        }}
                      >
                        {item.description}
                      </Typography>
                      <Typography
                        variant="body2"
                        fontSize={12}
                        fontFamily="body"
                      >
                        <b>{`${item.small} | ${item.medium} | ${item.large}`}</b>
                      </Typography>
                    </Box>
                    {isSmallScreen && (
                      <Divider
                        sx={{
                          mb: 1,
                          mx: { xs: "15%", sm: "30%", md: "20%" },
                        }}
                      />
                    )}
                    {!isSmallScreen &&
                    index !==
                      BenniditosMenuData.specialtyPizzas.left.length - 1 ? (
                      <Divider
                        sx={{
                          mb: 1,
                          mx: { xs: "15%", sm: "30%", md: "20%" },
                        }}
                      />
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
                      <Typography
                        variant="h5"
                        sx={{ fontFamily: "subheader", mb: 2 }}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        fontSize={12}
                        sx={{
                          maxWidth: 400,
                          mx: "auto",
                          height: { xs: "auto", md: 50 },
                          fontFamily: "body",
                          mb: { xs: 2, md: 0 },
                        }}
                      >
                        {item.description}
                      </Typography>
                      <Typography
                        variant="body2"
                        fontSize={12}
                        fontFamily="body"
                      >
                        <b>{`${item.small} | ${item.medium} | ${item.large}`}</b>
                      </Typography>
                    </Box>
                    {isSmallScreen && (
                      <Divider
                        sx={{
                          mb: 1,
                          mx: { xs: "15%", sm: "30%", md: "20%" },
                        }}
                      />
                    )}
                    {!isSmallScreen &&
                    index !==
                      BenniditosMenuData.specialtyPizzas.right.length - 1 ? (
                      <Divider
                        sx={{
                          mb: 1,
                          mx: { xs: "15%", sm: "30%", md: "20%" },
                        }}
                      />
                    ) : null}
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
