import { Box, Typography, Divider } from "@mui/material";
import { BenniditosMenuProps } from "../../utils/utils";

export default function BenniditosPasta({
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
        {data.pasta && (
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  p: 1,
                  mb: 1,
                }}
              >
                <Typography variant="h4" color="primary" fontFamily={"header"}>
                  {"PASTA"}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                maxWidth: 400,
                mx: "auto",
                px: { xs: 1, md: 0 },
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography fontSize={12} fontFamily="body">
                  <i>
                    Pair one of our delicious <b>Fettuccine or Spaghetti</b>{" "}
                    pastas with your choice of signature sauce and a side of our
                    new homemade pizza bread
                  </i>
                </Typography>
              </Box>
            </Box>
            <Box sx={{ mt: 2 }}>
              {data.pasta.sauces.map((item, index) => {
                return (
                  <Box
                    key={item.name}
                    sx={{
                      mb: 2,
                      px: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Box sx={{ mb: 2 }}>
                      <Typography
                        variant="h5"
                        sx={{ mb: 2, fontFamily: "subheader" }}
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
                            fontFamily: "body",
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
                    {data.pasta && index !== data.pasta.sauces.length - 1 ? (
                      <Divider sx={{ mx: { xs: 4, sm: 20, md: 8 } }} />
                    ) : null}
                  </Box>
                );
              })}
            </Box>
            <Box
              sx={{
                p: 1,
                mt: 3,
              }}
            >
              <Typography variant="h4" color="primary" fontFamily="header">
                {"MEATBALLS"}
              </Typography>
            </Box>
            <Typography
              variant="body2"
              fontFamily="body"
              sx={{
                maxWidth: 400,
                mx: "auto",
                mb: 1,
              }}
            >
              <b>2 - 2.50</b>
            </Typography>
            <Typography
              variant="body2"
              fontFamily="body"
              sx={{
                maxWidth: 400,
                mx: "auto",
                my: 1,
              }}
            >
              <b>4 - 5.00</b>
            </Typography>
            <Typography
              variant="body2"
              fontFamily="body"
              sx={{
                maxWidth: 400,
                mx: "auto",
                my: 1,
              }}
            >
              <b>6 - 7.50</b>
            </Typography>
            <Typography
              variant="body2"
              fontSize={12}
              fontFamily="body"
              sx={{
                maxWidth: 400,
                mx: "auto",
                mt: 2,
              }}
            >
              Add marinara, bolognese, or alfredo for 1.00 more
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}
