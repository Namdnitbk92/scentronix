"use client";
import { Collapse, Portal, Stack } from "@mui/material";
import { ActionMenu } from "../common";
import { useState } from "react";

const PortalMenu = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <Portal>
      {/* Portal Menu */}
      <Collapse in={isClicked}>
        <Stack
          bgcolor="rgb(33 30 30)"
          width="100vw"
          height="100vh"
          position="absolute"
          zIndex={100}
          top="0"
          left="0"
          sx={{ filter: "opacity(0.95)" }}
        />{" "}
      </Collapse>
      <Stack
        width="100%"
        alignItems="end"
        p={{
          md: 5,
          sm: 3,
          xs: 1,
        }}
        position="absolute"
        bottom="10px"
        right="0px"
        zIndex={101}
      >
        <ActionMenu setIsClicked={setIsClicked} isClicked={isClicked} />
      </Stack>
    </Portal>
  );
};

export default PortalMenu;
