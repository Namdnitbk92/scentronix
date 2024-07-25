import React from "react";
import { CircularProgress, Box, Typography } from "@mui/material";

interface LoadingProps {
  message?: string;
}

/**
+ * Renders a loading component with a circular progress indicator and an optional message.
+ *
+ * @param {LoadingProps} props - The component props.
+ * @param {string} props.message - The optional message to display below the progress indicator.
+ * @return {ReactElement} The loading component.
+ */
const Loading: React.FC<LoadingProps> = ({ message }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <CircularProgress color="primary" />
      {message && (
        <Typography variant="h6" marginTop={2}>
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default Loading;
