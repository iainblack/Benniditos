import { Box, Typography, Divider } from "@mui/material";
import { BenniditosMenuProps } from "../../utils/utils";

export default function BenniditosCalzones({ data }: BenniditosMenuProps) {
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
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                p: 1,
                mb: data.starters.description ? 0 : 3,
              }}
            >
              <Typography variant="h4" color="primary" fontFamily={"header"}>
                {"CALZONES"}
              </Typography>
            </Box>
          </Box>
          {data.calzones &&
            data.calzones.map((item, index) => {
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
                      sx={{
                        mb: 2,
                        fontFamily: "subheader",
                      }}
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
                          fontFamily: "body",
                        }}
                      >
                        {item.description}
                      </Typography>
                    )}
                    <Typography variant="body2" fontFamily="body">
                      <b>{`${item.price}`}</b>
                    </Typography>
                  </Box>
                  {data.calzones && index !== data.calzones.length - 1 ? (
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
  );
}
