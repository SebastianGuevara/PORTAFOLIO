import React from 'react'
import styled from 'styled-components'

function Body() {
  return (
    <Container>
        <Introduction>
            <Description>Hola, soy Sebastián</Description>
            <Projects>PROYECTOS</Projects>
        </Introduction>
        
    </Container>
  )
}

export default Body

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position: relative;
overflow: hidden;

&::before {
        background: url("/images/background.png") center center / cover no-repeat fixed;
        content: ""; 
        position: absolute;
        opacity: 65%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`
const Introduction = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: absolute;
align-self: center;
justify-self: center;
width: auto;
height: auto;
max-width: 800px;
background: transparent;
top: 15vh;
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
width: 35%;
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
width: 40%;
box-shadow: 0px 20px 50px -9px rgba(0,0,0,0.8);
}
`
