"use client";
import Image from "next/image";
import { useMemo, useState } from "react";

import { HAMBURGER_ICON_PATH, NAVBAR_ITEMS } from "@/constants/navbar";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { MenuItem } from "@/interfaces";
import Link from "next/link";

/**
+ * Renders the navigation bar items for mobile devices.
+ *
+ * @return {JSX.Element} The rendered navigation bar items.
+ */
const NavBarMobileItems = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = useMemo(
    () => (
      <Box
        sx={{ width: "80vw" }}
        role="presentation"
        onClick={toggleDrawer(false)}
      >
        <List>
          {NAVBAR_ITEMS.map((item: MenuItem, index: number) => (
            <ListItem
              key={item?.title}
              disablePadding
              sx={{ borderBottom: "1px solid #f2f2f2" }}
            >
              <ListItemButton>
                <Link href={`${item?.path}`}>
                  <ListItemText
                    primary={
                      <Typography
                        variant="customText"
                        p="20px"
                        component="li"
                        fontWeight="normal"
                      >
                        {item?.title}
                      </Typography>
                    }
                  />
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    ),
    []
  );

  return (
    <div>
      <Box width={21} height={21} onClick={toggleDrawer(true)}>
        <Image
          src={HAMBURGER_ICON_PATH}
          width={21}
          height={21}
          alt="hamburger"
        />
      </Box>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default NavBarMobileItems;
