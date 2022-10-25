import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { Icon } from '@iconify/react'
import { selectProjects } from '../features/projectSlice'
import { useSelector } from 'react-redux'
import db from '../firebase'

function ProjectCard() {
  const projects = useSelector(selectProjects)

  return (
    <ProjectsContainer>
        {
            projects && projects.map((project) => (
            <Project key = {project.id}>
                <div id='hover'>
                    <Button href={project.repo} target='_blank'><Icon icon="akar-icons:github-fill" width="40" height="40" id='gh'/>Repositorio</Button>
                    <Button href={project.webpage} target='_blank'><Icon icon="pepicons:internet" width="40" height="40" />Visítalo</Button>
                </div> 
                <img src={project.cardImg} alt=''/>
                <h1>{project.title}</h1>
                <div id='description'>
                    <p>{project.description} </p>
                </div>
                <h4>Tecnologías</h4>

                <Technologies>
                  {
                    project.technology &&
                    Object.values(project.technology).map((tech)=>(
                      <Technology>
                      <TechnologyImg>
                        <img src={tech.img} alt=''/>
                      </TechnologyImg>
                      <p>{tech.title}</p>
                    </Technology>                    
                    ))
                    
                  }
                </Technologies>     
            </Project>  
            ))
        }
  
    </ProjectsContainer>
  )
}

export default ProjectCard

const ProjectsContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, minmax(0, 1fr));
grid-gap: 25px;
grid-auto-flow: row;
width:80vw;
margin-bottom: 40px;
`

const Project = styled.div`
background-color: white;
width: 25vw;
min-height: 609.05px;
height: 65vh;
margin: auto;
border-radius:10px;
box-shadow: 0px 12px 14px -1px rgba(0,0,0,0.4);
z-index:1;
transition: 1s;

img
{
  width:100%;
  border-radius:10px 10px 0px 0px;
}
p
{
  text-align: justify;
  margin: 0px 40px 0px 40px;
}
h4
{
  text-align: start;
  margin-left: 40px;
  margin-bottom: 8px;
}
div#hover
{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: #e0242d;
  width: 25vw;
  height: 65vh;
  overflow: hidden;
  opacity: 0;
  position: absolute;
  transition: 0.8s;
  border-radius:10px;
  box-shadow: inset 0px 0px 84px 0px rgba(0,0,0,0.4);

}
div#description
{
    height: 12%;
}

&:hover
{
  box-shadow: 0px 12px 14px -1px rgba(0,0,0,0.7);
  border: transparent;
  div#hover
  {
    opacity:1;
  }
}

`

const Technologies = styled.div`
display: grid;
grid-template-columns: repeat(6, 1fr);
width:100%;
height: 11vh;

overflow: hidden;
`
const TechnologyImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50px;
  overflow: hidden;
`
const Technology = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 3.5vw;
height: 11vh;
max-height:103.07px;
background-color: rgba(0,0,0,0.15);
margin: auto;
border-radius: 20px;
img
{
  width: 40px;
}
p
{
  margin-bottom:8px;
}
`
const Button = styled.a`
display:flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
width:50%;
height:10%;
background-color: white;
border: 1px solid white;
border-radius:20px;
color: black;
font-size:1.5rem;
box-shadow: 0px 12px 14px -1px rgba(0,0,0,0.4);
cursor: pointer;
transition: 0.5s;
gap: 15px;
text-decoration: none; 

&:hover
{
  width: 60%;
  box-shadow: 0px 12px 14px -1px rgba(0,0,0,0.7);
}

`