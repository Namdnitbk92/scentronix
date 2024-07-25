import type { Metadata } from "next";

import { Container } from "@mui/material";

export const metadata: Metadata = {
  title: "Type page",
  description: "Type page",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container component="main" maxWidth="lg" sx={{ my: 6 }}>
      {children}
    </Container>
  );
}
