import React from "react";
import {
  Box,
  Link,
  Center,
  Text,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import {
  RiTwitterLine,
  RiGithubLine,
  RiMailLine,
  RiLinkedinBoxLine,
} from "react-icons/ri";

const Social = () => {
  return (
    <Box mt={5}>
      <Center>
        <Text>
          I'm available for freelance work. Interested in working with me ?
          You can find me here
        </Text>
      </Center>
      <Flex justifyContent="center" mt={2}>
        <Link href="mailto:tjungyuni@gmail.com">
          <IconButton
            size="lg"
            colorScheme="yellow"
            arial-label="email"
            isRound="true"
            variant="ghost"
            icon={<RiMailLine />}
          />
        </Link>
        <Link href="https://twitter.com/tjungyuni">
          <IconButton
            size="lg"
            colorScheme="yellow"
            arial-label="twitter"
            isRound="true"
            variant="ghost"
            icon={<RiTwitterLine />}
          />
        </Link>
        <Link href="https://github.com/yunitjung">
          <IconButton
            size="lg"
            colorScheme="yellow"
            arial-label="github"
            isRound="true"
            variant="ghost"
            icon={<RiGithubLine />}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/yuni-tjung-142544156/">
          <IconButton
            size="lg"
            colorScheme="yellow"
            arial-label="linkedin"
            isRound="true"
            variant="ghost"
            icon={<RiLinkedinBoxLine />}
          />
        </Link>
      </Flex>
    </Box>
  );
};

export default Social;
