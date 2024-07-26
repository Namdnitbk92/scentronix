import { IconButtonProps } from "@/interfaces";
import { IconButtonProps as MUIIconButtonProps } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";

/**
+ * Renders an IconButton component.
+ *
+ * @param {IconButtonProps} props - The props for the IconButton.
+ * @param {Function} props.onClick - The click event handler.
+ * @param {ReactNode} props.children - The content of the button.
+ * @param {ReactElement} props.icon - The icon element.
+ * @param {string} [props.iconColor="inherit"] - The color of the icon.
+ * @param {object} props.buttonStyle - The style object for the button.
+ * @param {string} props.variant - The variant of the button.
+ * @return {JSX.Element} The rendered IconButton component.
+ */
const IconButton: React.FC<IconButtonProps & MUIIconButtonProps> = ({
  onClick,
  children,
  icon,
  iconColor = "inherit",
  buttonStyle,
  variant = "outlined",
  ...rest
}) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      startIcon={React.cloneElement(icon as React.ReactElement, {
        style: { color: iconColor },
      })}
      sx={buttonStyle}
      {...rest}
    >
      {children}
    </Button>
  );
};
export default IconButton;
