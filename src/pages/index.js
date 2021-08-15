import React from "react";
import { Text, Center, Heading, VStack, Box } from "@chakra-ui/react";
import Layout from "../components/layouts";
import Project from "../components/project";
import TechStack from "../components/techStack";
import { Divider } from "@chakra-ui/react";
import Social from "../components/social";
import Seo from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <Seo
        title="yunitjung's portfolio 👋"
        description="Portfolio Yuni Tjung"
      />
      <Center mt={[5, 5, 10, 20]}>
        <VStack>
          <Text fontSize={{ base: "md", md: "md", lg: "xl" }}>
            Hi there 👩‍💻, I'm{" "}
          </Text>
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
