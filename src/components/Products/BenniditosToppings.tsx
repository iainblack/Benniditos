import { Box, Typography, Divider } from "@mui/material";
import { BenniditosMenuProps } from "../../utils/utils";

export default function BenniditosToppings({ data }: BenniditosMenuProps) {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          width: "100%",
          border: "1px solid",
          borderTop: 0,
          height: "fit-content",
          py: 2,
        }}
      >
        <Box sx={{ width: "100%" }}>
          {data.toppings.description && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                width: "100%",
                mt: 2,
                px: 1,
              }}
            >
              <Typography variant="body2" fontFamily="body">
                <i>{data.toppings.description} </i>
              </Typography>
            </Box>
          )}
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                p: 1,
                mb: 3,
              }}
            >
              <Typography variant="h4" color="primary" fontFamily={"header"}>
                {"TOPPINGS"}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "block", md: "flex" },
              justifyContent: "space-evenly",
            }}
          >
            <Box>
              <Box sx={{ textAlign: "center", mb: 3 }}>
                <Box>
                  <Typography
                    variant="h5"
                    sx={{ mb: 1, fontFamily: "subheader" }}
                  >
                    {"Cheeses"}
                  </Typography>
                  <Divider sx={{ mx: { xs: 8, sm: 30, md: 0 }, mb: 1 }} />
                </Box>
                {data.toppings.cheese.map((item) => {
                  return (
                    <Box key={item} sx={{ px: 1 }}>
                      <Box>
                        <Typography
                          variant="body2"
                          sx={{
                            maxWidth: 400,
                            mx: "auto",
                            fontFamily: "body",
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
                  <Typography
                    variant="h5"
                    sx={{ mb: 1, fontFamily: "subheader" }}
                  >
                    {"Meats"}
                  </Typography>
                  <Divider sx={{ mx: { xs: 8, sm: 30, md: 0 }, mb: 1 }} />
                </Box>
                {data.toppings.meats.map((item) => {
                  return (
                    <Box key={item} sx={{ px: 1 }}>
                      <Box>
                        <Typography
                          variant="body2"
                          sx={{
                            maxWidth: 400,
                            mx: "auto",
                            fontFamily: "body",
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
                  <Typography
                    variant="h5"
                    sx={{ mb: 1, fontFamily: "subheader" }}
                  >
                    {"Sauces"}
                  </Typography>
                  <Divider sx={{ mx: { xs: 8, sm: 30, md: 0 }, mb: 1 }} />
                </Box>
                {data.toppings.sauces.map((item) => {
                  return (
                    <Box key={item} sx={{ px: 1 }}>
                      <Box>
                        <Typography
                          variant="body2"
                          sx={{
                            maxWidth: 400,
                            mx: "auto",
                            fontFamily: "body",
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
                  <Typography
                    variant="h5"
                    sx={{ mb: 1, fontFamily: "subheader" }}
                  >
                    {"Veggies"}
                  </Typography>
                  <Divider sx={{ mx: { xs: 8, sm: 30, md: 0 }, mb: 1 }} />
                </Box>
                {data.toppings.veggies.map((item) => {
                  return (
                    <Box key={item} sx={{ px: 1 }}>
                      <Box>
                        <Typography
                          variant="body2"
                          sx={{
                            maxWidth: 400,
                            mx: "auto",
                            fontFamily: "body",
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
                  sx={{
                    mt: 6,
                    display: "flex",
                    justifyContent: "center",
                    fontFamily: "subheader",
                  }}
                >
                  <b>* add .50¢</b>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
