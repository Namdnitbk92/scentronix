import React, { FC } from "react";
import Button from "@mui/material/Button";
import { IconButtonProps } from "@/interfaces";

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
const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  children,
  icon,
  iconColor = "inherit",
  buttonStyle,
  variant,
}) => {
  return (
    <Button
      onClick={onClick}
      startIcon={React.cloneElement(icon as React.ReactElement, {
        style: { color: iconColor },
      })}
      sx={buttonStyle}
      variant={variant}
    >
      {children}
    </Button>
  );
};
export default IconButton;
