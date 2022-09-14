import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#38235A",
    },
  },
});

if (theme.components) {
  theme.components.MuiPaper = {
    styleOverrides: {
      root: {
        backgroundColor: "#FBFBFB"
      }
    }
  };
}

theme.typography.h3 = {
  fontSize: "1.5rem",
  "@media (min-width:600px)": {
    fontSize: "1.8rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.4rem",
  },
};

theme.typography.h5 = {
  fontSize: "1.8rem",
  "@media (min-width:600px)": {
    fontSize: "1.8rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.4rem",
  },
};

theme.typography.h6 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.8rem",
  },
};

export default theme;
