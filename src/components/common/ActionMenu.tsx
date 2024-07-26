"use client";
import { IMenu } from "@/interfaces";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import {
  Box,
  Button,
  Chip,
  Collapse,
  Fab,
  Stack,
  Typography,
} from "@mui/material";
import { WithCenterLayout, WithResponsiveLayout } from "../hoc";
import React, { ReactNode, cloneElement, useState } from "react";
import ReactNode from "react";

const items: IMenu[] = [
  {
    title: "50ml",
    price: "$50",
    icon: <></>,
  },
  {
    title: "50ml",
    price: "$50",

    icon: <></>,
  },
  {
    title: "50ml",
    price: "$50",
    description: "3 x 5ml $40.00",
    optional: "2 x 5ml $20.00",
    icon: <></>,
  },
  { title: "150ml", price: "$20", description: "1 x 5ml $60.00", icon: <></> },
  {
    title: "250ml",
    price: "$30",
    description: "2 x 5ml $20.00",
    optional: "2 x 5ml $20.00",
    icon: <></>,
  },
];

const MenuItemHeader = ({
  title,
  price,
}: {
  title: string;
  price: string | number;
}) => {
  return (
    <WithResponsiveLayout
      flexDirection="row"
      gap="5px"
      width="100%"
      justifyContent="space-between"
    >
      <WithCenterLayout
        flexDirection="row"
        gap="8px"
        width="max-content"
        lineHeight={1}
      >
        <ShoppingBasketIcon
          fontSize="small"
          sx={{
            width: "0.875em",
            height: "0.875em",
            position: "relative",
            top: "-1px",
          }}
        />
        <Typography fontSize="0.875rem" color="#1D1D1D" fontWeight="semibold">
          {title}
        </Typography>
      </WithCenterLayout>
      <Typography fontSize="0.875rem" color="#1D1D1D" fontWeight="semibold">
        {price}
      </Typography>
    </WithResponsiveLayout>
  );
};

const MenuItemWrapper = ({
  children,
}: {
  children: (props: IMenu) => ReactNode;
}) => {
  return (
    <>
      {items?.map(({ title, price, description, optional }, index) => {
        return (
          <Stack
            flexDirection="column"
            gap="8px"
            width={{
              sm: "260px",
              xs: "100%",
            }}
            bgcolor="white"
            borderRadius={1}
            boxShadow={3}
            key={`${title}-${price}-${index}`}
          >
            <Stack
              flexDirection="column"
              gap="8px"
              width="100%"
              p="15px 24px"
              alignItems="start"
            >
              {children({ title, price, description, optional } as IMenu)}
            </Stack>
          </Stack>
        );
      })}
    </>
  );
};

const MenuItems = () => {
  return (
    <Box
      width="100%"
      position="absolute"
      left="0"
      bottom="0"
      sx={{
        transform: {
          sm: "translate(calc(0%), -5vh)",
          xs: "translate(calc(0%), -5vh)",
          //   sm: "translate(calc(-100%  + 10vw), -5vh)",
        },
      }}
    >
      <Stack component="section" flexDirection="column" gap="8px">
        <MenuItemWrapper>
          {({ title, price, description, optional }: IMenu) => {
            return (
              <>
                <MenuItemHeader title={title} price={price} />
                {description && (
                  <Typography
                    fontSize="0.75rem"
                    color="#5f5e5e"
                    fontWeight={500}
                    letterSpacing="0.034rem"
                  >
                    {description}
                  </Typography>
                )}
                {optional && (
                  <Chip
                    label={optional}
                    sx={{ borderRadius: 1, fontWeight: 500 }}
                    size="small"
                  />
                )}
              </>
            );
          }}
        </MenuItemWrapper>
      </Stack>
    </Box>
  );
};

const ActionMenu = ({
  isClicked,
  setIsClicked,
}: {
  isClicked: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Box position="relative" width="100%">
      {isClicked && <MenuItems />}
      <Collapse in={!isClicked}>
        <Button
          onClick={() => setIsClicked(true)}
          sx={{
            display: !isClicked ? "flex" : "none",
            width: !isClicked ? "max-content" : 0,
            bgcolor: "black",
            color: "#fff",
            p: "8px 20px",
            textTransform: "none",
            transition: "width 0.5s ease-in-out",
            "&:hover": {
              bgcolor: "black",
              color: "#fff",
            },
          }}
          startIcon={<ShoppingBasketIcon />}
        >
          Buy
        </Button>
      </Collapse>

      <Collapse in={isClicked}>
        <Fab
          onClick={() => setIsClicked(false)}
          size="medium"
          aria-label="add"
          sx={{ color: "black", bgcolor: "white" }}
        >
          <CloseIcon />
        </Fab>
      </Collapse>
    </Box>
  );
};

export default ActionMenu;
