import { createTheme } from "@mui/material";

const color = {
  primary: {
    main: "#0f0f0f",
  },
  secondary: {
    main: "#FFF",
  },
  success: {
    main: "#00bcd4",
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: color.primary.main,
    },
    secondary: {
      main: color.secondary.main,
    },
    success: {
      main: color.success.main,
    },
  },
  components: {
    // Name of the component
    MuiStepIcon: {
      styleOverrides: {
        // Name of the slot
        root: {
          "&.Mui-active,&.Mui-completed": {
            color: color.success.main,
          },
        },
      },
    },
  },
});
