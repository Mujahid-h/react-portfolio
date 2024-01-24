// Projects.js
import React from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          As a web app developer, my expertise spans a spectrum of projects,
          highlighting proficiency in React and Express development. I've
          seamlessly integrated Firebase and MongoDB, crafting dynamic and
          innovative solutions.
        </Desc>
        <CardContainer>
          {projects.map((project) => (
            <ProjectCard
              key={project.id} // Ensure each project has a unique key
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
