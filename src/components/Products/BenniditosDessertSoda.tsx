import { Box, Typography, Divider } from "@mui/material";
import { BenniditosMenuProps } from "../../utils/utils";

export default function BenniditosDessertSoda({ data }: BenniditosMenuProps) {
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
        <Box sx={{ textAlign: "center", mb: { xs: 3, md: 0 } }}>
          <Box
            sx={{
              p: 1,
              mb: 3,
            }}
          >
            {data.desserts.description && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mb: 2,
                  p: 1,
                  textAlign: "center",
                }}
              >
                <Typography variant="body2" fontFamily="body">
                  <i>{data.desserts.description} </i>
                </Typography>
              </Box>
            )}
            <Typography variant="h4" color="primary" fontFamily="header">
              {"DESSERTS"}
            </Typography>
          </Box>
          {data.desserts.options.map((item, index) => {
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
                      fontFamily="body"
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
                  <Typography variant="body2" fontFamily="body">
                    {item.medium && item.large ? (
                      <b>{`${item.small} | ${item.medium} | ${item.large}`}</b>
                    ) : (
                      <b>{`${item.small}`}</b>
                    )}
                  </Typography>
                </Box>
                {index !== data.desserts.options.length - 1 ? (
                  <Divider
                    sx={{
                      mx: { xs: "15%", sm: "30%", md: "20%" },
                    }}
                  />
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
                mt: data.desserts.description ? 5 : 0,
              }}
            >
              <Typography
                variant="h4"
                color="primary"
                sx={{ px: 4 }}
                fontFamily="header"
              >
                {"SODA"}
              </Typography>
            </Box>
          </Box>
          <Typography variant="body2" sx={{ mb: 1 }} fontFamily="body">
            <b>2.99</b>
          </Typography>
          <Divider
            sx={{
              mx: { xs: "15%", sm: "30%", md: "20%" },
              mb: { xs: 2, md: 1 },
            }}
          />
          <Box>
            {data.soda.options.map((item) => {
              return (
                <Box key={item} sx={{ px: 1 }}>
                  <Box>
                    <Typography
                      variant="body2"
                      fontFamily="body"
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
        </Box>
      </Box>
    </Box>
  );
}
