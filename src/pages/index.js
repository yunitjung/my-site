import React from "react";
import {
  Text,
  Center,
  Heading,
  VStack,
  Box,
  useColorMode,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import Layout from "../components/layouts";
import Project from "../components/project";
import TechStack from "../components/techStack";
import { Divider } from "@chakra-ui/react";
import Social from "../components/social";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

function IndexPage() {
  const { toggleColorMode } = useColorMode();
  const ToggleIcon = useColorModeValue(SunIcon, MoonIcon);
  return (
    <Layout>
      <IconButton
        aria-label="toggle dark mode"
        icon={<ToggleIcon />}
        onClick={toggleColorMode}
      />
      <Center mt={20}>
        <VStack>
          <Text fontSize="xl">Hi there 👩‍💻, I'm </Text>
          <Heading size="3xl">Yuni Tjung</Heading>
        </VStack>
      </Center>
      <Box mt={20} mb={5}>
        <Text mt={2}>
          I'm <b>full-stack developer</b> based in 📍
          <b>Batam, Riau Islands</b> (currently working remotely from
          Padang). Most of my time, I'm working as
          <b> Laravel Developer</b> at{" "}
          <b>
            <a href="https://quarkspark.co">Quark Spark Technologies</a>
          </b>{" "}
          - software company based in Singapore.
        </Text>
        <Text mt={5}>
          On my free time, I take care of my hydroponic plants and do
          freelance web development project.
        </Text>
      </Box>

      <Divider mt={10} mb={10} />
      <Heading mt={5}>Projects</Heading>
      <Project />

      <Divider mt={10} mb={10} />
      <Heading mt={5}>Tech Stack</Heading>
      <TechStack />

      <Divider mt={10} mb={10} />
      <Social />
    </Layout>
  );
}

export default IndexPage;
