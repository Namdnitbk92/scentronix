"use client";
import { red } from "@mui/material/colors";
import { ThemeOptions, createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: "Brandon Grotesque, Arial, sans-serif",
    customText: {
      fontSize: "0.875rem",
      letterSpacing: "2.512px",
      listStyleType: "none",
      position: "relative",
      textDecoration: "none",
    },
  },
  palette: {
    customColor: {
      background: {
        default: "#f8f5f0",
      },
      action: {
        hover: "#F8F5F0",
      },
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "customOutlined" },
          style: {
            color: "#000000",
            textTransform: "uppercase",
            border: ".063rem solid #da1a32",
            padding: ".625rem 1.25rem",
            gap: "10px",
            letterSpacing: "0.095rem",
            fontSize: "0.75rem",
            lineHeight: "12px",
            maxHeight: "36px",
            borderRadius: "0",
            "&:hover": {
              color: red[500],
              borderColor: "black",
            },
          },
        },
      ],
    },
  },
}) as ThemeOptions;

export default theme;
