"use client";
import { WithCenterLayout, WithResponsiveLayout } from "@/components/hoc";
import { useMobile } from "@/hooks";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { ReactNode } from "react";
import { IconButton } from "../common";
import { RecipeTimingProps, YieldProps } from "@/interfaces";

const TimingItem = ({ children }: { children: ReactNode }) => {
  return (
    <Stack flexDirection="column" gap="0">
      {children}
    </Stack>
  );
};

const TimingItemHead = ({ children }: { children: ReactNode }) => {
  return <Typography fontSize={12}>{children}</Typography>;
};

const TimingItemValue = ({ children }: { children: ReactNode }) => {
  return (
    <Typography
      fontSize={20}
      component="span"
      fontFamily={"Para Supreme"}
      lineHeight={1.2}
    >
      {children ?? "10 mins"}
    </Typography>
  );
};

const RecipeTiming: React.FC<RecipeTimingProps> = ({
  bakeTime,
  prepTime,
  totalTime,
}) => {
  const isMobile = useMobile();
  return (
    <Stack flexDirection="row" gap={isMobile ? "20px" : "55px"} flexWrap="wrap">
      <Stack
        flexDirection="row"
        gap="10px"
        sx={{
          "& > p": {
            fontWeight: "bold",
          },
          color: "rgb(0,0,0)",
        }}
      >
        <Image src="/svg/clock.svg" width={37} height={37} alt="clock" />
        <TimingItem>
          <TimingItemHead>PREP</TimingItemHead>
          <TimingItemValue>{prepTime ?? "10 mins"}</TimingItemValue>
        </TimingItem>
      </Stack>

      <Stack flexDirection="row" gap="20px">
        <TimingItem>
          <TimingItemHead>BAKE</TimingItemHead>
          <TimingItemValue>
            {bakeTime ?? "1 hr to 1 hr 15 mins"}
          </TimingItemValue>
        </TimingItem>
      </Stack>

      <Stack flexDirection="row" gap="20px">
        <TimingItem>
          <TimingItemHead>TOTAL</TimingItemHead>
          <TimingItemValue>{totalTime ?? "1 hr 25 mins"}</TimingItemValue>
        </TimingItem>
      </Stack>
    </Stack>
  );
};

const RecipeYieldActions: React.FC<YieldProps> = ({ yieldValue }) => {
  return (
    <WithResponsiveLayout gap="55px" flexWrap="nowrap">
      <Stack
        flexDirection="row"
        gap="10px"
        sx={{
          "& > p": {
            fontWeight: "bold",
          },
          color: "#000000",
        }}
      >
        <Image src="/svg/yield.svg" width={37} height={37} alt="clock" />
        <Stack flexDirection="column" gap="0">
          <Typography fontSize={12}>YIELD</Typography>
          <Typography fontSize={20} component="strong">
            {yieldValue ?? 'one 9" x 5" loaf'}
          </Typography>
        </Stack>
      </Stack>

      <WithCenterLayout flexDirection="row" gap="10px">
        <IconButton variant="customOutlined" icon={<></>}>
          <Box width="15px">
            <svg
              enable-background="new 0 0 15 15"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m8 7v-7h-1v7h-7v1h7v7h1v-7h7v-1z"></path>
            </svg>
          </Box>
          Save Recipe
        </IconButton>

        <IconButton variant="customOutlined" icon={<></>}>
          <Box width="15px">
            <svg
              enable-background="new 0 0 21.1 20.1"
              viewBox="0 0 21.1 20.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m20.6 3c-.3-.3-.7-.5-1.2-.5h-1.6v-2.5h-14.6v2.5h-1.5c-.5 0-.9.2-1.2.5s-.5.7-.5 1.2v8.3c0 .5.2.9.5 1.2s.7.5 1.2.5h2.3v5.9h13v-5.9h2.4c.5 0 .9-.2 1.2-.5s.5-.7.5-1.2v-8.3c0-.5-.2-.9-.5-1.2zm-3.6-2.1v1.6h-12.9v-1.6zm-13 7.4v4.9h-2.3c-.5 0-.8-.3-.8-.8v-8.2c0-.5.2-.7.8-.7h17.8c.5 0 .8.2.8.7v8.3c0 .5-.2.8-.8.8h-2.4v-5zm.9 10.9v-9.9h11.2v9.9z"></path>
            </svg>
          </Box>
          Print
        </IconButton>
      </WithCenterLayout>
    </WithResponsiveLayout>
  );
};

export { RecipeTiming, RecipeYieldActions };
