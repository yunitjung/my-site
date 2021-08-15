import React from "react";
import { Box, Button, Center } from "@chakra-ui/react";

const TechStack = () => {
  return (
    <Box>
      <Center mt={5}>
        <Button mr={5} colorScheme="yellow" size="sm" variant="outline">
          Laravel
        </Button>
        <Button mr={5} colorScheme="yellow" size="sm" variant="outline">
          Lumen
        </Button>
        <Button mr={5} colorScheme="yellow" size="sm" variant="outline">
          GraphQL
        </Button>
        <Button mr={5} colorScheme="yellow" size="sm" variant="outline">
          Typescript
        </Button>
      </Center>
      <Center mt={5}>
        <Button mr={5} colorScheme="yellow" size="sm" variant="outline">
          Vue.js
        </Button>
        <Button mr={5} colorScheme="yellow" size="sm" variant="outline">
          React
        </Button>
        <Button mr={5} colorScheme="yellow" size="sm" variant="outline">
          Python
        </Button>
      </Center>
    </Box>
  );
};

export default TechStack;
