import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#38235A",
    },
  },
});

theme.typography.h3 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.4rem",
  },
};

export default theme;
