import { alpha, ButtonClasses } from "@mui/material";
import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@mui/material/styles";
import { OverridesStyleRules } from "@mui/material/styles/overrides";

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

const theme = createMuiTheme({
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
    tertiary: {
      main: color.secondary.main,
    },
  },
});

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    tertiary: Palette["primary"];
  }
  interface PaletteOptions {
    tertiary: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    tertiary: true;
  }
}

declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    tertiary: true;
  }
}

declare module "@mui/material/SvgIcon" {
  interface SvgIconPropsColorOverrides {
    tertiary: true;
  }
}

declare module "@mui/material/TextField" {
  interface TextFieldPropsColorOverrides {
    tertiary: true;
  }
}

declare module "@mui/material/TextField" {
  interface TextFieldPropsColorOverrides {
    tertiary: true;
  }
}

declare module "@mui/material/Checkbox" {
  interface CheckboxPropsColorOverrides {
    tertiary: true;
  }
}

declare module "@mui/material/Radio" {
  interface RadioPropsColorOverrides {
    tertiary: true;
  }
}

declare module "@mui/material/FormLabel" {
  interface FormLabelPropsColorOverrides {
    tertiary: true;
  }
}

declare module "@mui/material/CircularProgress" {
  interface CircularProgressPropsColorOverrides {
    tertiary: true;
  }
}

declare module "@mui/material/Breadcrumbs" {
  interface CircularProgressPropsColorOverrides {
    tertiary: true;
  }
}

theme.components = {
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
  MuiCssBaseline: {
    styleOverrides: {
      "html, body, #__next": {
        width: "100%",
        height: "100%",
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        minWidth: 120,
        minHeight: 40,
        fontSize: 14,
        fontWeight: 400,
        textTransform: "none",
      },
      outlined: {
        backgroundColor: alpha(theme.palette.primary.contrastText, 0.5),
      },
    } as Partial<OverridesStyleRules<keyof ButtonClasses>>,
  },

  MuiPaper: {
    styleOverrides: {
      root: {
        "& .scrollable-table::-webkit-scrollbar": {
          width: "10px",
          height: "10px",
        },
        "& .scrollable-table::-webkit-scrollbar-thumb": {
          background: "#CCCCCC",
        },
        "& .scrollable-table::-webkit-scrollbar-track": {
          background: theme.palette.info.dark,
          borderTop: `1px solid #C4C4C4`,
        },
      },
    },
  },
  MuiTableHead: {
    styleOverrides: {
      root: {
        "& .MuiTableCell-head": {
          background: theme.palette.info.main,
          color: theme.palette.text.primary,
          fontSize: "13px",
          fontWeight: 600,
          height: 50,
          padding: `0 8px`,
          lineHeight: 1.5,
          border: `1px solid #C4C4C4`,
          zIndex: 10,
        },
        "& .MuiTableCell-head:last-child": {
          borderRight: `none`,
        },
        "& .MuiTableCell-head:first-of-type": {
          borderLeft: `none`,
        },
        "& .MuiTableSortLabel-root": {
          width: "auto",
          display: "flex",
          justifyContent: "space-between",
        },
        "& .group-name": {
          justifyContent: "center",
        },
        "& .MuiTableCell-stickyHeader.sticky-column": {
          zIndex: 100,
        },
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        padding: 8,
        fontSize: 14,
        fontWeight: theme.typography.subtitle1.fontWeight,
        "&.sticky-column": {
          position: "sticky",
          borderRight: 0,
          boxShadow: "1px 0 2px #C4C4C4",
          zIndex: 10,
        },
        "&.sticky-column-collapsible-table": {
          position: "sticky",
          top: 0,
          left: 0,
          zIndex: 10,
        },
      },
    },
  },

  MuiFormHelperText: {
    styleOverrides: {
      root: {
        fontSize: theme.typography.body2.fontSize,
        marginLeft: 8,
      },
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      asterisk: {
        color: theme.palette.error.main,
        "&$error": {
          color: theme.palette.error.main,
        },
      },
    },
  },
  MuiToggleButtonGroup: {
    styleOverrides: {
      root: {
        "& .Mui-selected": {
          color: `${theme.palette.primary.main} !important`,
          background: `${alpha(theme.palette.primary.main, 0.1)} !important`,
        },
      },
    },
  },
  MuiTabs: {
    styleOverrides: {
      root: {
        "& .css-ubroh-MuiTabs-indicator": {
          height: 3,
        },
      },
    },
  },
  MuiTooltip: {
    styleOverrides: {
      popper: {
        zIndex: 111111,
      },
    },
  },
};

export { theme };
