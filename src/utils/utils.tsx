import {
  Box,
  Button,
  Divider,
  Fade,
  Slide,
  Theme,
  Typography,
  useScrollTrigger,
  useTheme,
} from "@mui/material";

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{ backgroundColor: "white" }}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

export interface BenniditosMenuProps {
  theme: Theme;
  isSmallScreen: boolean;
  data: BenniditosMenuConfig;
}

export interface BenniditosTapListProps {
  theme: Theme;
  isSmallScreen: boolean;
  data: BenniditosTapList;
}

export function HideOnScroll(props: any) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export function ScrollTop(props: any) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

interface BasicOptions {
  name: string;
  description: string;
  small: string;
  medium: string;
  large: string;
}

interface SandwichOptions {
  name: string;
  description: string;
  half: string;
  whole: string;
}

export interface BenniditosTapList {
  prices: {
    name: string;
    price: string;
    clocktower: string;
  }[];
  beers: {
    name: string;
    abv: string;
    description: string;
  }[];
}

export function BenniditosInfo(props: { theme: Theme }) {
  return (
    <Box sx={{ p: { xs: 0, md: 2 } }}>
      <Box>
        <Box sx={{ mb: { xs: 3, md: 3 } }}>
          <Box sx={{ alignItems: "center" }}>
            <Button
              size="large"
              onClick={() => {
                window.open(
                  "http://maps.google.com/?q=1426 S Lincoln St, Spokane, WA 99203",
                  "_blank"
                );
              }}
              sx={{
                fontFamily: "header",
                textTransform: "none",
                fontSize: props.theme.typography.body1.fontSize,
              }}
            >
              1426 S Lincoln St, Spokane, WA 99203
            </Button>
          </Box>
          <Button
            size="large"
            sx={{
              fontFamily: "header",
              fontSize: props.theme.typography.body1.fontSize,
            }}
            onClick={() => {
              window.open("tel:+5094557411", "_self");
            }}
          >
            (509) 455-7411
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          justifyContent: "center",
        }}
      >
        <Typography variant="body1" fontFamily="subheader" sx={{ mb: 1 }}>
          <b>Monday - Thursday</b>
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          11:00 AM - 10:00 PM
        </Typography>
        <Typography variant="body1" fontFamily="subheader" sx={{ mb: 1 }}>
          <b>Friday</b>
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          11:00 AM - 11:00 PM
        </Typography>
        <Typography variant="body1" fontFamily="subheader" sx={{ mb: 1 }}>
          <b>Saturday</b>
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          11:00 AM - 10:00 PM
        </Typography>
        <Typography variant="body1" fontFamily="subheader" sx={{ mb: 1 }}>
          <b>Sunday</b>
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          12:00 PM - 9:00 PM
        </Typography>
      </Box>
    </Box>
  );
}

export function BrewPubInfo(props: { theme: Theme }) {
  return (
    <Box sx={{ p: { xs: 0, md: 4 } }}>
      <Box sx={{ mb: { xs: 3, md: 6 } }}>
        <Box sx={{ alignItems: "center" }}>
          <Button
            size="large"
            onClick={() => {
              window.open(
                "http://maps.google.com/?q=1909 E Sprague Ave, Spokane, WA 99202",
                "_blank"
              );
            }}
            sx={{
              fontFamily: "header",
              textTransform: "none",
              fontSize: props.theme.typography.body1.fontSize,
            }}
          >
            1909 E Sprague Ave, Spokane, WA 99202
          </Button>
        </Box>
        <Button
          size="large"
          sx={{
            fontFamily: "header",
            fontSize: props.theme.typography.body1.fontSize,
          }}
          onClick={() => {
            window.open("tel:+5092905018", "_self");
          }}
        >
          (509) 290-5018
        </Button>
      </Box>
      <Box
        sx={{
          justifyContent: "center",
        }}
      >
        <Typography variant="body1" fontFamily="subheader" sx={{ mb: 1 }}>
          <b>Monday - Wednesday</b>
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          11:00 AM - 8:00 PM
        </Typography>
        <Typography variant="body1" fontFamily="subheader" sx={{ mb: 1 }}>
          <b>Thursday - Saturday</b>
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          11:00 AM - 9:00 PM
        </Typography>
        <Typography variant="body1" fontFamily="subheader" sx={{ mb: 1 }}>
          <b>Sunday</b>
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Closed
        </Typography>
      </Box>
      <Box></Box>
    </Box>
  );
}

export interface BenniditosMenuConfig {
  pizza: {
    description1?: string;
    description2?: string;
    column1: BasicOptions[];
    column2: BasicOptions[];
    bySlice?: {
      description1?: string;
      description2?: string;
      comboOptions: {
        name: string;
        subtitle: string;
        options: {
          topping: string;
          price: string;
        }[];
      }[];
      soup?: {
        name: string;
        cup: string;
        bowl: string;
      };
    };
  };
  toppings: {
    description?: string;
    cheese: string[];
    meats: string[];
    veggies: string[];
    sauces: string[];
  };
  salads: {
    description?: string;
    options: BasicOptions[];
  };
  sandwiches: {
    description?: string;
    hotSandwiches: SandwichOptions[];
    coldSandwiches?: SandwichOptions[];
  };
  calzones?: {
    name: string;
    description: string;
    price: string;
  }[];
  pasta?: {
    description: string;
    pastas: string[];
    sauces: {
      name: string;
      description?: string;
      half: string;
      whole?: string;
    }[];
  };
  desserts: {
    description?: string;
    options: {
      name: string;
      description?: string;
      small: string;
      medium?: string;
      large?: string;
    }[];
  };
  starters: {
    description?: string;
    options: {
      name: string;
      description?: string;
      price: string;
    }[];
  };
  soda: {
    price: string;
    options: string[];
  };
}
