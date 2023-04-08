import { Box, Typography, Divider } from "@mui/material";
import { BenniditosMenuProps } from "../../utils/utils";

export default function BenniditosPizzaMenu({
  theme,
  isSmallScreen,
  data,
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
                mb: data.pizza.description1 || data.pizza.description2 ? 0 : 3,
              }}
            >
              <Typography
                variant="h4"
                color="primary"
                sx={{ fontFamily: "header", textAlign: "center" }}
              >
                {"PIZZA"}
              </Typography>
            </Box>
          </Box>
          {(data.pizza.description1 || data.pizza.description2) && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                mb: 2,
                px: 1,
              }}
            >
              {data.pizza.description1 && (
                <Typography fontSize={14} fontFamily="body">
                  <i>{data.pizza.description1} </i>
                </Typography>
              )}

              {data.pizza.description2 && (
                <Typography fontSize={12} fontFamily="body">
                  <i>{data.pizza.description2} </i>
                </Typography>
              )}
            </Box>
          )}
          <Box
            sx={{
              display: { xs: "block", md: "flex" },
              justifyContent: "space-evenly",
            }}
          >
            <Box id="menu-column-1" sx={{ textAlign: "center" }}>
              {data.pizza.column1.map((item, index) => {
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
                          height: { xs: "auto", md: 100 },
                          display: "flex",
                          alignItems: "center",
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
                    index !== data.pizza.column1.length - 1 ? (
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
            <Box>
              <Box id="menu-column-2" sx={{ textAlign: "center" }}>
                {data.pizza.column2.map((item, index) => {
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
                            height: { xs: "auto", md: 100 },
                            display: "flex",
                            alignItems: "center",
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
                      {index !== data.pizza.column2.length - 1 ? (
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
              {data.pizza.bySlice && (
                <>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Box
                      sx={{
                        p: 1,
                        my: 2,
                      }}
                    >
                      <Typography
                        variant="h4"
                        color="primary"
                        sx={{ fontFamily: "header", textAlign: "center" }}
                      >
                        {"BY THE SLICE"}
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      mb: 2,
                      px: 1,
                    }}
                  >
                    {data.pizza.bySlice.description1 && (
                      <Typography fontSize={14} fontFamily="body">
                        <i>{data.pizza.description1} </i>
                      </Typography>
                    )}

                    {data.pizza.bySlice.description2 && (
                      <Typography fontSize={12} fontFamily="body">
                        <i>{data.pizza.description2} </i>
                      </Typography>
                    )}
                  </Box>
                  <Box id="by-slice" sx={{ textAlign: "center" }}>
                    {data.pizza.bySlice.comboOptions &&
                      data.pizza.bySlice.comboOptions.map((item, index1) => {
                        return (
                          <Box key={item.name} sx={{ mb: 2, px: 1 }}>
                            <Box sx={{ mb: 1 }}>
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
                                  mb: 3,
                                  fontFamily: "body",
                                  textAlign: "center",
                                }}
                              >
                                {item.subtitle}
                              </Typography>
                              {item.options.map((option, index2) => {
                                return (
                                  <Typography
                                    variant="body2"
                                    fontSize={12}
                                    fontFamily="body"
                                    key={index2}
                                    textAlign="center"
                                  >
                                    {option.topping} - <b>{option.price}</b>
                                  </Typography>
                                );
                              })}
                            </Box>
                            {data.pizza.bySlice?.comboOptions &&
                            index1 !==
                              data.pizza.bySlice?.comboOptions.length - 1 ? (
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
                </>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
