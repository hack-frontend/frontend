import { Box } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <Box bgColor="green.200" minHeight="100vh">
      {children}
    </Box>
  );
}
