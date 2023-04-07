import { Box, Typography, Divider } from "@mui/material";
import { BenniditosMenuProps } from "../../utils/utils";
import { BenniditosMenuData } from "../../utils/BenniditosMenuData";

export default function BenniditosCalzoneSammies({
  theme,
  isSmallScreen,
  data,
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
        <Box sx={{ textAlign: "center", mb: { xs: 3, md: 0 } }}>
          {data.sandwiches.description && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 1,
                p: 1,
                textAlign: "center",
              }}
            >
              <Typography fontSize={12} fontFamily="body">
                <i>{data.sandwiches.description}</i>
              </Typography>
            </Box>
          )}
          <Box
            sx={{
              p: 1,
              mb: 3,
            }}
          >
            <Typography variant="h4" color="primary" fontFamily="header">
              {"CALZONES"}
            </Typography>
          </Box>
          {BenniditosMenuData.sandwiches.calzones.map((item, index) => {
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
                      fontSize={12}
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
                  <Typography variant="body2" fontSize={12} fontFamily="body">
                    <b>{`${item.price}`}</b>
                  </Typography>
                </Box>
                {index !== BenniditosMenuData.sandwiches.calzones.length - 1 ? (
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
                p: 1,
                mb: 3,
              }}
            >
              <Typography variant="h4" color="primary" fontFamily="header">
                {"HOT SANDWICHES"}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box>
              {data.sandwiches.hotSandwiches.map((item, index) => {
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
                          fontSize={12}
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
                      <Typography
                        variant="body2"
                        fontSize={12}
                        fontFamily="body"
                      >
                        {item.whole ? (
                          <b>{`${item.half} | ${item.whole}`}</b>
                        ) : (
                          <b>{`${item.half}`}</b>
                        )}
                      </Typography>
                    </Box>
                    {index !== data.sandwiches.hotSandwiches.length - 1 ? (
                      <Divider sx={{ mx: { xs: 4, sm: 20, md: 8 } }} />
                    ) : null}
                  </Box>
                );
              })}
            </Box>
          </Box>
          {data.sandwiches.coldSandwiches && (
            <Box sx={{ textAlign: "center" }}>
              <Box sx={{ mb: 2 }}>
                <Box
                  sx={{
                    p: 1,
                    mb: 3,
                  }}
                >
                  <Typography variant="h4" color="primary" fontFamily="header">
                    {"COLD SANDWICHES"}
                  </Typography>
                </Box>
              </Box>
              <Box>
                {data.sandwiches.coldSandwiches.map((item, index) => {
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
                            fontSize={12}
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
                        <Typography
                          variant="body2"
                          fontSize={12}
                          fontFamily="body"
                        >
                          {item.whole ? (
                            <b>{`${item.half} | ${item.whole}`}</b>
                          ) : (
                            <b>{`${item.half}`}</b>
                          )}
                        </Typography>
                      </Box>
                      {data.sandwiches.coldSandwiches &&
                      index !== data.sandwiches.coldSandwiches.length - 1 ? (
                        <Divider sx={{ mx: { xs: 4, sm: 20, md: 8 } }} />
                      ) : null}
                    </Box>
                  );
                })}
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
