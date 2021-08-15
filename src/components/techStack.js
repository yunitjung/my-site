import React from "react";
import { Flex, Button, Center } from "@chakra-ui/react";

const TechStack = () => {
  return (
    <Flex flexWrap="wrap" justifyContent="center">
      <Button
        mr={5}
        mt={5}
        colorScheme="yellow"
        size="sm"
        variant="outline"
      >
        Laravel
      </Button>
      <Button
        mr={5}
        mt={5}
        colorScheme="yellow"
        size="sm"
        variant="outline"
      >
        Lumen
      </Button>
      <Button
        mr={5}
        mt={5}
        colorScheme="yellow"
        size="sm"
        variant="outline"
      >
        GraphQL
      </Button>
      <Button
        mr={5}
        mt={5}
        colorScheme="yellow"
        size="sm"
        variant="outline"
      >
        Typescript
      </Button>
      <Button
        mr={5}
        mt={5}
        colorScheme="yellow"
        size="sm"
        variant="outline"
      >
        Vue.js
      </Button>
      <Button
        mr={5}
        mt={5}
        colorScheme="yellow"
        size="sm"
        variant="outline"
      >
        React
      </Button>
      <Button
        mr={5}
        mt={5}
        colorScheme="yellow"
        size="sm"
        variant="outline"
      >
        Python
      </Button>
    </Flex>
  );
};

export default TechStack;
