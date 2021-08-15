import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";

function Layout({ children, variant = "regular" }) {
  return (
    <ChakraProvider resetCSS="true">
      <Box
        mt={8}
        mb={8}
        mx="auto"
        maxW={variant === "regular" ? "800px" : "400px"}
      >
        {children}
      </Box>
    </ChakraProvider>
  );
}

export default Layout;
