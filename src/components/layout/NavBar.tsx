"use client";

import { LOGO_MOBILE_PATH, LOGO_PATH, NAVBAR_ITEMS } from "@/constants/navbar";
import { useHover, useHoverOut, useMobile } from "@/hooks";
import { MenuItem } from "@/interfaces";
import { Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import { WithCenterLayout } from "../hoc";
import NavBarMobileItems from "./NavBarMobileItems";
import SubNavBarItem from "./SubNavBarItem";

const NavBarOnMobile = () => {
  return (
    <WithCenterLayout
      gap="0"
      width="100%"
      flexDirection="row"
      p="20px"
      component="header"
      justifyContent="space-between"
      position="relative"
      zIndex={50}
    >
      <Box minWidth={70} overflow="hidden">
        <Link href="/">
          <Image
            alt="logo"
            layout="responsive"
            width={70}
            height={50}
            src={LOGO_MOBILE_PATH}
          />
        </Link>
      </Box>

      <NavBarMobileItems />
    </WithCenterLayout>
  );
};

/**
+ * Renders the navigation bar component.
+ *
+ * @return {JSX.Element} The rendered navigation bar component.
+ */
const NavBar = () => {
  const { hoveredIdx, events } = useHover();
  const [ref, isHovered] = useHoverOut();
  const isMobile = useMobile();

  if (isMobile) {
    return <NavBarOnMobile />;
  }

  // useEffect(() => {
  //   if (!isHovered) {
  //     return events.onMouseLeave();
  //   }
  // }, [isHovered]);

  return (
    <Stack gap="0" width="100%" position="relative">
      {/** BIGGER SCREEN **/}
      <Stack
        ref={ref}
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        gap="63px"
        component="header"
        width="100%"
        p="25px"
        position="relative"
        sx={{
          borderBottom: "1px solid #f2f2f2",
        }}
      >
        <Box
          zIndex={10}
          position="absolute"
          top="0"
          width="max-content"
          sx={{
            left: {
              lg: "25%",
              md: "15%",
              sm: 0,
            },
          }}
        >
          <Link href="/">
            <Image alt="logo" width={100} height={100} src={LOGO_PATH} />
          </Link>
        </Box>

        {NAVBAR_ITEMS.map((navbar: MenuItem) => (
          <Link
            href={navbar.path}
            key={navbar?.title}
            onMouseEnter={() => events.onMouseEnter(navbar.title)}
          >
            <Typography
              variant="customText"
              component="li"
              fontWeight="normal"
              sx={{
                "&::after": {
                  content: '""',
                  position: "absolute",
                  width: "100%",
                  transform: "scaleX(0)",
                  height: "3px",
                  bottom: "-5px",
                  left: 0,
                  backgroundColor: "#da1a32",
                  transformOrigin: "bottom right",
                  transition: "transform 0.25s ease-out",
                },
                "&:hover": {
                  fontWeight: "bold",
                },
                "&:hover::after": {
                  transform: "scaleX(1)",
                  transformOrigin: "bottom left",
                },
              }}
            >
              {navbar?.title}
            </Typography>
          </Link>
        ))}

        {isHovered && hoveredIdx && (
          <SubNavBarItem
            items={
              NAVBAR_ITEMS.find((i: MenuItem) => i.title === hoveredIdx)
                ?.subItems ?? []
            }
          />
        )}
      </Stack>
    </Stack>
  );
};

export default NavBar;
