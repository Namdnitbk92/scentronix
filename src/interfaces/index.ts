import { SxProps, Theme } from "@mui/material/styles";
import { FC, ReactNode } from "react";

export interface MenuItem {
  title: string;
  path: string;
  subItems?: MenuItem[];
}

export interface ImageItem {
  src: string;
  category: string;
}

export interface RecipeTimingProps {
  bakeTime: string;
  prepTime: string;
  totalTime: string;
}

export interface YieldProps {
  yieldValue: string;
}

export interface IconButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  iconColor?: string;
  buttonStyle?: SxProps<Theme>;
  icon: React.ReactNode | FC<{}>;
  variant?: "contained" | "outlined" | "text"; // Added variant prop
}

export interface IMenu {
  title: string;
  description?: string;
  optional?: string;
  price: number | string;
  icon: ReactNode;
}
