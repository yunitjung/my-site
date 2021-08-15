import React from "react";
import { Box, Flex, Text, Button, Link } from "@chakra-ui/react";

const ProjectCard = ({ title, projectContent, tag, link }) => {
  return (
    <Link
      href={link}
      style={{ color: "inherit", textDecoration: "inherit" }}
    >
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
        <Text fontWeight="bold">{title}</Text>
        <Text>{projectContent}</Text>
        <Flex mt={5} alignContent="end">
          {tag.map((element, i) => {
            return (
              <Button key={i} mr={2} colorScheme="yellow" size="xs">
                {element}
              </Button>
            );
          })}
        </Flex>
      </Box>
    </Link>
  );
};

export default ProjectCard;
