import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{ opacity:0, transition: {duration: 0.1}}}>
      <Container>
        <TitleContainer>
          <p>Proyectos</p>
        </TitleContainer>
        <ProjectsContainer>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
        </ProjectsContainer>
      </Container>  
    </motion.div>
  )
}

export default Projects

const Container = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
height: auto;
width: 100vw;
bottom: 0;
align-items: center;
overflow-y: scroll;
overflow-x:hidden;
`

const TitleContainer = styled.div`
display: flex;
align-items: flex-start;
justify-content: start;
position: relative;
bottom: 0;
width: 80vw;
p 
{
  font-size:4rem;
  margin: 50px;
  border-bottom: 5px solid #e0242d;
  width: 200px;
}
margin-top:50px;
`

const ProjectsContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 1rem;
grid-auto-flow: row;
width:80vw;
margin-bottom: 40px;
`
