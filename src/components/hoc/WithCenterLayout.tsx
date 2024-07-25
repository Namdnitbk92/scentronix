import React, { FunctionComponent, ReactNode, memo } from "react";

import { Stack, StackOwnProps, StackProps } from "@mui/material";

type WithCenterLayoutProps = {
  children: ReactNode;
  _component?: FunctionComponent<StackOwnProps>;
} & StackProps;

/**
+ * Renders a layout component that centers its children both vertically and horizontally.
+ *
+ * @param {WithCenterLayoutProps} props - The properties for the component.
+ * @param {React.ComponentType} props._component - The component to use for the layout (default: Stack).
+ * @param {React.ReactNode} props.children - The children to render inside the layout.
+ * @param {StackProps} props.rest - The rest of the properties to pass to the layout component.
+ * @return {JSX.Element} A component with its children centered both vertically and horizontally.
+ */
const WithCenterLayout = ({
  _component: Component = Stack,
  children,
  ...rest
}: WithCenterLayoutProps) => (
  <Component justifyContent="center" alignItems="center" {...rest}>
    {children}
  </Component>
);

export default memo(WithCenterLayout);
