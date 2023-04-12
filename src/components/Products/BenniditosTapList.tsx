import { Box, Typography, Divider } from "@mui/material";
import { BenniditosTapListProps } from "../../utils/utils";

export default function BenniditosTapList({ data }: BenniditosTapListProps) {
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
              p: 1,
              mb: 3,
            }}
          >
            <Typography variant="h4" color="primary" fontFamily="header">
              {"ALWAYS ON TAP"}
            </Typography>
          </Box>
          {data.beers.map((item, index) => {
            return (
              <Box key={item.name} sx={{ mb: 2, px: 1 }}>
                <Box sx={{ mb: 2 }}>
                  <Typography
                    variant="h5"
                    fontFamily="subheader"
                    sx={{ mb: 2 }}
                  >
                    {item.name}
                  </Typography>
                  {item.description && (
                    <Typography
                      variant="body2"
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
                  <Typography variant="body2" fontFamily="header">
                    <b>{`${item.abv}`}</b>
                  </Typography>
                </Box>
                {index !== data.beers.length - 1 ? (
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
                p: 1,
                mb: 3,
              }}
            >
              <Typography variant="h4" color="primary" fontFamily="header">
                {"PRICES"}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ px: { xs: 6, md: 0 } }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "right",
                mb: 1,
                pr: 2,
              }}
            >
              <Typography
                variant="caption"
                fontFamily="body"
                sx={{ textDecoration: "underline" }}
              >
                <b>Clocktower</b>
              </Typography>
            </Box>
            {data.prices.map((item) => {
              return (
                <Box key={item.name}>
                  <Box
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
                        fontFamily="body"
                        sx={{
                          width: { xs: 50, sm: 100 },
                        }}
                      >
                        <b>{item.name}</b>
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: "center" }}>
                      <Typography
                        variant="body2"
                        fontFamily="body"
                        sx={{
                          width: { xs: "fit-content", md: 100 },
                        }}
                      >
                        {item.price}
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: "right" }}>
                      <Typography
                        variant="body2"
                        fontFamily="body"
                        sx={{
                          width: { xs: "fit-content", md: 100 },
                        }}
                      >
                        {`${item.clocktower}`}
                      </Typography>
                    </Box>
                  </Box>
                  <Divider sx={{ mb: 1, mx: 2, borderBottomStyle: "dashed" }} />
                </Box>
              );
            })}
            {data.rotation && (
              <Box
                sx={{
                  p: 1,
                  mt: 6,
                  mb: 3,
                }}
              >
                <Typography variant="h4" color="primary" fontFamily="header">
                  {"ON ROTATION"}
                </Typography>
              </Box>
            )}
            {data.rotation &&
              data.rotation.map((item, index) => {
                return (
                  <Box key={item.name} sx={{ mb: 2, px: 1 }}>
                    <Box sx={{ mb: 2 }}>
                      <Typography
                        variant="h5"
                        fontFamily="subheader"
                        sx={{ mb: 2 }}
                      >
                        {item.name}
                      </Typography>
                      {item.description && (
                        <Typography
                          variant="body2"
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
                      <Typography variant="body2" fontFamily="header">
                        <b>{`${item.abv}`}</b>
                      </Typography>
                    </Box>
                    {data.rotation && index !== data.rotation.length - 1 ? (
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
