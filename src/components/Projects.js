import React, { useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import db from '../firebase'
import { useDispatch } from 'react-redux'
import { setProjects } from '../features/projectSlice'

function Projects() {
  const dispatch = useDispatch();

  useEffect(()=>{
    db.collection("Proyectos").onSnapshot((snapshot) =>
    {
      let tempProjects = snapshot.docs.map((doc) =>{
        return {id: doc.id, ...doc.data()}
      })
      dispatch(setProjects(tempProjects));     
    })
  },[])



  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{ opacity:0, transition: {duration: 0.1}}}>
      <Container>
        <TitleContainer>
          <p>Proyectos</p>
        </TitleContainer>
        <ProjectsContainer>
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
grid-template-columns: repeat(3, minmax(0, 1fr));
grid-gap: 25px;
grid-auto-flow: row;
width:80vw;
margin-bottom: 40px;
`
