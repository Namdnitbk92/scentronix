import "@mui/material/styles";
import "@mui/material/Button";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    customOutlined: true;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    customColor: Palette;
  }
  interface PaletteOptions {
    customColor?: PaletteOptions;
  }

  interface TypographyVariants {
    customText: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    customText?: React.CSSProperties;
  }
}
