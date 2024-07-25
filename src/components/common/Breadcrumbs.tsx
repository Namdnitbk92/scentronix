"use client";
import { BreadcrumbsProps, Breadcrumbs as MUIBreadcrumbs } from "@mui/material";
import { ReactNode } from "react";

/**
+ * Renders a Breadcrumbs component with the given children and additional props.
+ *
+ * @param {Object} props - The props for the Breadcrumbs component.
+ * @param {ReactNode} props.children - The children to be rendered inside the Breadcrumbs component.
+ * @param {BreadcrumbsProps} props.rest - The additional props to be spread onto the MUIBreadcrumbs component.
+ * @return {JSX.Element} The rendered Breadcrumbs component.
+ */
const Breadcrumbs = ({
  children,
  ...rest
}: { children: ReactNode } & BreadcrumbsProps) => {
  return (
    <MUIBreadcrumbs aria-label="breadcrumb" {...rest}>
      {children}
    </MUIBreadcrumbs>
  );
};

export default Breadcrumbs;
