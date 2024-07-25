"use client";

import { isActive } from "@/app/utils";
import { WithCenterLayout } from "@/components/hoc";
import { Typography, useTheme } from "@mui/material";
import Link from "next/link";
import { Fragment } from "react";

/**
+ * Renders a sub navigation bar item with a list of items. Each item is a title and a path.
+ *
+ * @param {Object} props - The props object containing an optional array of items.
+ * @param {Array<{ title: string; path: string }>} props.items - The array of items to render.
+ * @return {JSX.Element} The rendered sub navigation bar item.
+ */
const SubNavBarItem = ({
  items = [],
}: {
  items: { title: string; path: string }[];
}) => {
  const theme = useTheme();
  const hasItems = !!items.length;

  if (!hasItems) return <Fragment></Fragment>;
  return (
    <WithCenterLayout
      bgcolor={theme.palette.customColor.background.default}
      flexDirection="row"
      component="ul"
      width="100%"
      gap="2.375rem"
      p=".6875rem 1.125rem"
      position="absolute"
      mt="116px"
      letterSpacing=".094rem"
    >
      {items?.map((item) => (
        <Link href={item?.path} key={item?.title}>
          <Typography
            component="li"
            fontWeight="semibold"
            // fontWeight={
            //   isActive(window.location.pathname, item?.path)
            //     ? "bold"
            //     : "semibold"
            // }
            fontSize="0.875rem"
            sx={{ listStyleType: "none" }}
          >
            {item?.title}
          </Typography>
        </Link>
      ))}
    </WithCenterLayout>
  );
};

export default SubNavBarItem;
