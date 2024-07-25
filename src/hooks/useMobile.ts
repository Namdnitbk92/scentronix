"use client";
import { useMediaQuery, useTheme } from "@mui/material";

/**
+ * Returns a boolean indicating whether the current device is a mobile device.
+ *
+ * @return {boolean} True if the current device is a mobile device, false otherwise.
+ */
const useMobile = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return isMobile;
};

export default useMobile;
