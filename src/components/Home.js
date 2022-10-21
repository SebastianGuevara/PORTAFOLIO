import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <Container>
        <Introduction>
            <Description>Hola, soy Sebastián</Description>
            <Link to={'/projects'}>
              <Projects>PROYECTOS</Projects>
            </Link>
        </Introduction>     
    </Container>
  )
}

export default Home

const Container = styled.main`
min-height: calc(100vh - 90px);
padding: 0 calc(3.5vw + 5px);
position: relative;
overflow-x: hidden;
    &:before {
        background: url("/images/background.png") center center / cover no-repeat fixed;
        content: ""; 
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`
const Introduction = styled.div`
position: relative;
top: 20vh;
max-width:800px;
margin:0px auto;
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
