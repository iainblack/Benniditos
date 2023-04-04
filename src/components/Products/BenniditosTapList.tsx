import { Box, Typography, Divider } from "@mui/material";
import { BenniditosMenuProps } from "../../utils/utils";
import { BenniditosMenuData } from "../../utils/BenniditosMenu";
import { BenniditosTapListData } from "@/src/utils/BenniditosTapList";

export default function BenniditosTapList({
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
              mb: 3,
            }}
          >
            <Typography variant="h4" color="primary">
              {"On Tap"}
            </Typography>
          </Box>
          {BenniditosTapListData.beers.map((item, index) => {
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
                </Box>
                {index !== BenniditosTapListData.beers.length - 1 ? (
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
                mb: 3,
                borderColor: theme.palette.primary.main,
                mx: 12,
              }}
            >
              <Typography variant="h4" color="primary" sx={{ px: 4 }}>
                {"Prices"}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "right",
                mb: 1,
                pr: 4,
              }}
            >
              <Typography variant="caption">
                <b>Clocktower*</b>
              </Typography>
            </Box>
            {BenniditosTapListData.prices.map((item) => {
              return (
                <Box>
                  <Box
                    key={item.name}
                    sx={{
                      display: "flex",
                      textAlign: "left",
                      justifyContent: "space-between",
                      px: 2,
                    }}
                  >
                    <Box sx={{ mb: 1 }}>
                      <Typography
                        variant="body2"
                        sx={{
                          width: 100,
                        }}
                      >
                        <b>{item.name}</b>
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: "center" }}>
                      <Typography
                        variant="body2"
                        sx={{
                          width: 100,
                        }}
                      >
                        {item.price}
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: "center" }}>
                      <Typography
                        variant="body2"
                        sx={{
                          width: 100,
                        }}
                      >
                        {`${item.clocktower}*`}
                      </Typography>
                    </Box>
                  </Box>
                  <Divider sx={{ mb: 1, mx: 2 }} />
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
