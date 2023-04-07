import {
  Box,
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
    calzones: {
      name: string;
      description: string;
      price: string;
    }[];
  };
  pasta: {
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
  breads: {
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
