import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <Container>
        <Information>
            <Image src='/images/logo.png'/>
            <Name>SEBASTIÁN GUEVARA</Name>
        </Information>
        <ButtonsContainer>
            <Link to={'/'}>
              <Home>INICIO</Home>
            </Link>
            <Link to={'/about'}>
              <About>SOBRE MÍ</About>
            </Link>
            <Link to={'/projects'}>
              <Projects>PROYECTOS</Projects>
            </Link>
            <Link to={'/contact'}>
              <Contact>CONTACTO</Contact>
            </Link>
        </ButtonsContainer>
      </Container>
    </div>
  )
}

export default Header

const Container = styled.div`
display: flex;
flex-direction: row;
position: fixed;
justify-content: space-around;
background:white;
height: 90px;
width: 100vw;
box-shadow: 0px -2px 108px -8px rgba(0,0,0,0.3);
z-index: 1;
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
color: #926454;
font-family: 'Reem Kufi', sans-serif;
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
color:#926454;
background: transparent;
border: transparent;
font-size:1.3rem;
font-family: 'Reem Kufi', sans-serif;
cursor: pointer;
transition: all 0.5s ease-out;

&:hover
{
    font-size:1.4rem;
    color:#E0242D;
}
`
const About = styled(Home)`
`
const Projects = styled(Home)`
`
const Contact = styled(Home)`
`
