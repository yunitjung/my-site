import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "./projectCard";

const Project = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} spacing={5} mt={5}>
      <ProjectCard
        title="Clickargo"
        link="https://clickargo.com"
        projectContent=" B2B logistic system for exporting & importing cargos. I'm in
          charge of vessel module, public API, and supporting features of trucking module."
        tag={["Laravel", "Lumen", "Microservice", "API"]}
      />
      <ProjectCard
        title="MML"
        link="https://muliamakmurlestari.com"
        projectContent="B2B2C e-commerce to sell stationery and general supply for stationery retail company located in Batam. "
        tag={["Laravel", "API", "E-Commerce"]}
      />
      <ProjectCard
        title="Fajri Raya Accounting System"
        link="https://github.com/yunitjung/fajri_raya"
        projectContent=""
        tag={["CodeIgniter", "Accounting System"]}
      />
      <ProjectCard
        title="Twobe Store"
        link="https://github.com/yunitjung/twobestore"
        tag={["CodeIgniter", "E-Commerce", "K-Means Clustering"]}
      />
      <ProjectCard
        title="CRM RS Sansani"
        link="https://github.com/yunitjung/crm_rs"
        tag={["CodeIgniter", "K-Means Clustering"]}
      />
      <ProjectCard
        title="Meoowmy"
        link="https://github.com/yunitjung/crm_meoowmy"
        tag={["CodeIgniter", "E-Commerce", "Clustering"]}
      />
    </SimpleGrid>
  );
};

export default Project;
