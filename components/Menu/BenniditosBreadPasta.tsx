import { Box, Typography, Divider } from "@mui/material";
import { BenniditosMenuData, BenniditosMenuProps } from "../utils";

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
                  <Divider sx={{ mx: { xs: 4, md: 8 } }} />
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
                      {item.whole ? (
                        <b>{`${item.half} | ${item.whole}`}</b>
                      ) : (
                        <b>{`${item.half}`}</b>
                      )}
                    </Typography>
                  </Box>
                  {index !== BenniditosMenuData.pasta.sauces.length - 1 ? (
                    <Divider sx={{ mx: { xs: 4, md: 8 } }} />
                  ) : null}
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
