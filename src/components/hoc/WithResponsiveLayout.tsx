"use client";
import { useMobile } from "@/hooks";
import { Stack, StackProps } from "@mui/material";
import React, { memo } from "react";

type TWithResponsiveLayout = {
  children: React.ReactNode;
};

/**
+ * Renders a responsive layout component that stacks its children vertically on mobile devices and horizontally on larger screens.
+ *
+ * @param {TWithResponsiveLayout & StackProps} props - The properties for the component.
+ * @param {ReactNode} props.children - The children to render inside the layout.
+ * @return {JSX.Element} A Stack component with the children rendered inside.
+ */
const WithResponsiveLayout: React.FC<TWithResponsiveLayout & StackProps> = ({
  children,
  ...rest
}) => {
  const isMobile = useMobile();
  return (
    <Stack flexDirection={isMobile ? "column" : "row"} {...rest}>
      {children}
    </Stack>
  );
};

export default memo(WithResponsiveLayout);
