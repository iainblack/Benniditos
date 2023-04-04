import { Box, Typography, Divider } from "@mui/material";
import { BenniditosMenuProps } from "../../utils/utils";
import { BenniditosMenuData } from "../../utils/BenniditosMenu";

export default function BenniditosBreadPasta({
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
          height: "fit-content",
          py: 2,
          display: { xs: "block", md: "flex" },
          justifyContent: "space-evenly",
        }}
      >
        <Box sx={{ textAlign: "center", mb: { xs: 3, md: 0 } }}>
          <Box
            sx={{
              border: 1,
              p: 1,
              borderColor: theme.palette.primary.main,
              mx: 12,
              mb: 2,
            }}
          >
            <Typography variant="h4" color="primary">
              {"Bread"}
            </Typography>
          </Box>
          {BenniditosMenuData.breadsAndBreadsticks.map((item, index) => {
            return (
              <Box key={item.name} sx={{ mb: 2, px: 1 }}>
                <Box sx={{ mb: 2 }}>
                  <Typography
                    variant="h5"
                    sx={{ mb: item.description ? 0 : 2 }}
                  >
                    {item.name}
                  </Typography>
                  {item.description && (
                    <Typography
                      variant="body2"
                      fontSize={12}
                      sx={{
                        maxWidth: 400,
                        mx: "auto",
                        mb: 2,
                        height: { xs: "auto", md: 30 },
                      }}
                    >
                      {item.description}
                    </Typography>
                  )}
                  <Typography variant="body2" fontSize={12}>
                    <b>{`${item.price}`}</b>
                  </Typography>
                </Box>
                {index !==
                BenniditosMenuData.breadsAndBreadsticks.length - 1 ? (
                  <Divider sx={{ mx: { xs: 4, sm: 20, md: 8 } }} />
                ) : null}
              </Box>
            );
          })}
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Box sx={{ mb: 2 }}>
            <Box
              sx={{
                border: 1,
                p: 1,
                mb: 2,
                borderColor: theme.palette.primary.main,
                mx: 12,
              }}
            >
              <Typography variant="h4" color="primary">
                {"Pasta"}
              </Typography>
            </Box>
            <Box
              sx={{
                maxWidth: 400,
                mx: "auto",
                mb: 1,
                px: { xs: 1, md: 0 },
              }}
            >
              <Typography variant="caption">
                Pair one of our delicious <b>Fettuccine or Spaghetti</b> pastas
                with your choice of signature sauce and a side of our new
                homemade pizza bread
              </Typography>
            </Box>
          </Box>
          <Box>
            {BenniditosMenuData.pasta.sauces.map((item, index) => {
              return (
                <Box key={item.name} sx={{ mb: 2, px: 1 }}>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="h5" sx={{ mb: 1 }}>
                      {item.name}
                    </Typography>
                    {item.description && (
                      <Typography
                        variant="body2"
                        fontSize={12}
                        sx={{
                          maxWidth: 400,
                          mx: "auto",
                          mb: 2,
                          height: { xs: "auto", md: 30 },
                        }}
                      >
                        {item.description}
                      </Typography>
                    )}
                    <Typography variant="body2" fontSize={12}>
                      {item.whole ? (
                        <b>{`${item.half} | ${item.whole}`}</b>
                      ) : (
                        <b>{`${item.half}`}</b>
                      )}
                    </Typography>
                  </Box>
                  {index !== BenniditosMenuData.pasta.sauces.length - 1 ? (
                    <Divider sx={{ mx: { xs: 4, sm: 20, md: 8 } }} />
                  ) : null}
                </Box>
              );
            })}
          </Box>
          <Box
            sx={{
              border: 1,
              p: 1,
              borderColor: theme.palette.primary.main,
              mx: 12,
              mt: 3,
              mb: 2,
            }}
          >
            <Typography variant="h4" color="primary">
              {"Meatballs"}
            </Typography>
          </Box>
          <Typography
            variant="body2"
            fontSize={12}
            sx={{
              maxWidth: 400,
              mx: "auto",
              height: { xs: "auto", md: 30 },
            }}
          >
            <b>2 - 2.50 • 4 - 5.00 • 6 - 7.50</b>
          </Typography>
          <Typography
            variant="body2"
            fontSize={12}
            sx={{
              maxWidth: 400,
              mx: "auto",
              mb: 2,
              height: { xs: "auto", md: 30 },
            }}
          >
            Add marinara, bolognese, or alfredo for 1.00 more
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
