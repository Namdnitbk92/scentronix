"use client";
import { Box, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";

/**
+ * Renders a 404 error page with a message and a button to go to the homepage.
+ *
+ * @return {JSX.Element} The 404 error page component.
+ */
const NotFound = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      padding={3}
      textAlign="center"
    >
      <Typography variant="h2" component="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" component="p" paragraph>
        Oops! The page you’re looking for doesn’t exist.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleGoHome}>
        Go to Homepage
      </Button>
    </Box>
  );
};

export default NotFound;
