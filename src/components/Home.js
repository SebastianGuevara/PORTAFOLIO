import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Home() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{ opacity:0, transition: {duration: 0.1}}}>
      <Introduction>
          <Description>Hola, soy Sebastián</Description>
          <Link to={'/projects'}>
            <Projects>PROYECTOS</Projects>
          </Link>
      </Introduction>  
    </motion.div>
  )
}

export default Home

const Introduction = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-height:calc(100vh - 90px);
width:100vw;
`
const Description = styled.p`
display: flex;
flex-direction: column;
font-size: 5rem;
font-weight: bold;
color: black;

&::after{
    content:'Lorem ipsum dolor sit amet consectetur adipiscing elit venenatis mattis dignissim felis nam, fusce porttitor nostra sociis sed taciti aliquam dapibus accumsan pulvinar.';
    font-size: 1.3rem;
    font-family: sans-serif;
    font-weight: normal;
    margin-top:30px;
    width: 50vw;
}
`
const Projects = styled.button`
width: 13vw;
height: 70px;
border-radius: 5px;
border: transparent;
background:#e0242d;
font-family:'Reem Kufi', sans-serif;
font-weight: bold;
font-size: 1.2rem;
cursor: pointer;
transition: 0.5s;
color: #f2f2f2;
box-shadow: 0px 20px 50px -9px rgba(0,0,0,0.6);

&:hover{
width: 17vw;
box-shadow: 0px 20px 50px -9px rgba(0,0,0,0.8);
}
`
