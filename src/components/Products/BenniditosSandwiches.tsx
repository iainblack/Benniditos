import { Box, Typography, Divider } from "@mui/material";
import { BenniditosMenuConfig, BenniditosMenuProps } from "../../utils/utils";

export default function BenniditosSandwiches({
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
        }}
      >
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
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: data.sandwiches.coldSandwiches
              ? "space-evenly"
              : "center",
          }}
        >
          <Box>
            <HotSandwichesColumn data={data} />
          </Box>
          <Box>
            <ColdSandwichesColumn data={data} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function HotSandwichesColumn(props: { data: BenniditosMenuConfig }) {
  return (
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
          {props.data.sandwiches.hotSandwiches.map((item, index) => {
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
                      }}
                    >
                      {item.description}
                    </Typography>
                  )}
                  <Typography variant="body2" fontSize={12} fontFamily="body">
                    {item.whole ? (
                      <b>{`${item.half} | ${item.whole}`}</b>
                    ) : (
                      <b>{`${item.half}`}</b>
                    )}
                  </Typography>
                </Box>
                {index !== props.data.sandwiches.hotSandwiches.length - 1 ? (
                  <Divider sx={{ mx: { xs: 4, sm: 20, md: 8 } }} />
                ) : null}
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

function ColdSandwichesColumn(props: { data: BenniditosMenuConfig }) {
  return (
    <Box>
      {props.data.sandwiches.coldSandwiches && (
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
            {props.data.sandwiches.coldSandwiches.map((item, index) => {
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
                        }}
                      >
                        {item.description}
                      </Typography>
                    )}
                    <Typography variant="body2" fontSize={12} fontFamily="body">
                      {item.whole ? (
                        <b>{`${item.half} | ${item.whole}`}</b>
                      ) : (
                        <b>{`${item.half}`}</b>
                      )}
                    </Typography>
                  </Box>
                  {props.data.sandwiches.coldSandwiches &&
                  index !== props.data.sandwiches.coldSandwiches.length - 1 ? (
                    <Divider sx={{ mx: { xs: 4, sm: 20, md: 8 } }} />
                  ) : null}
                </Box>
              );
            })}
          </Box>
        </Box>
      )}
    </Box>
  );
}

function CalzonesColumn(props: { data: BenniditosMenuConfig }) {
  return (
    <Box sx={{ textAlign: "center" }}>
      {props.data.calzones && (
        <Box sx={{ textAlign: "center", mb: { xs: 3, md: 0 } }}>
          {props.data.sandwiches.description && (
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
                <i>{props.data.sandwiches.description}</i>
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
          {props.data.calzones.map((item, index) => {
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
                      }}
                    >
                      {item.description}
                    </Typography>
                  )}
                  <Typography variant="body2" fontSize={12} fontFamily="body">
                    <b>{`${item.price}`}</b>
                  </Typography>
                </Box>
                {props.data.calzones &&
                index !== props.data.calzones.length - 1 ? (
                  <Divider sx={{ mx: { xs: 4, sm: 20, md: 8 } }} />
                ) : null}
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
}
