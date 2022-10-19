import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <div>
      <Container>
        <Information>
            <Image src='/images/logo.png'/>
            <Name>Sebastián Guevara</Name>
        </Information>
        <ButtonsContainer>
            <Home>Inicio</Home>
            <About>Sobre mí</About>
            <Projects>Proyectos</Projects>
            <Contact>Contacto</Contact>
        </ButtonsContainer>
      </Container>
    </div>
  )
}

export default Header

const Container = styled.div`
display: flex;
flex-direction: row;
position: relative;
justify-content: space-around;
background: #EB1D36;
height: 90px;
`
const Information = styled.div`
display: flex;
position: absolute;
left: 10px;
`

const Image = styled.img`
display: flex;
width: 70px;
height: 70px;
border-radius:50px;
margin-top: 10px;
margin-left: 30px;
`
const Name = styled.h2`
display:flex;
color: #F5EDDC;
margin-top: 25px;
margin-left: 20px;
`
const ButtonsContainer = styled.div`
display: flex;
align-self: center;
position: absolute;
right: 40px;
gap: 50px;

`

const Home = styled.button`
color:#F5EDDC;
background: transparent;
border: transparent;
font-size:1.3rem;
font-weight: bold;
cursor: pointer;
`
const About = styled(Home)`
`
const Projects = styled(Home)`
`
const Contact = styled(Home)`
`
