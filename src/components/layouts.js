import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import theme from "../theme";

function Layout({ children, variant = "regular" }) {
  return (
    <ChakraProvider theme={theme}>
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
