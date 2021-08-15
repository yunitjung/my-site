import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import theme from "../@chakra-ui/gatsby-plugin/theme";

function Layout({ children }) {
  return (
    <ChakraProvider resetCSS="true" theme={theme}>
      <Box mb={8} mx="auto" maxW={["auto", "auto", "auto", "800px"]} p={8}>
        {children}
      </Box>
    </ChakraProvider>
  );
}

export default Layout;
