import React from 'react'
import styled from 'styled-components'

function About() {
  return (
    <Container>
      <Content>
        <Info>
          <Photo src='/images/logo.png'/>
          <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Description>
        </Info>
        <Skills>
          <SkillsTitle>HABILIDADES</SkillsTitle>
          <SkillsContainer>
            <Skill>HTML</Skill>
            <Skill>CSS</Skill>
            <Skill>JavaScript</Skill>
            <Skill>React</Skill>
            <Skill>AWS</Skill>
            <Skill>C++</Skill>
            <Skill>C#</Skill>
            <Skill>Java</Skill>
            <Skill>Python</Skill>
            <Skill>Unity</Skill>
            <Skill>Scrum</Skill>
            <Skill>SQL</Skill>
            <Skill>GIT</Skill>
            <Skill>.NET</Skill>
            <Skill>Xamarin</Skill>
          </SkillsContainer>
        </Skills>
      </Content>
    </Container>
  )
}

export default About

const Container = styled.main`
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position: relative;
overflow: hidden;
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
const Content = styled.div`
display: flex;
flex-direction: column;
position: relative;
top: 25vh;
align-items: center;
justify-content: center;
`

const Info = styled.div`
display: flex;
position: relative;
bottom: 100px;
align-items: center;
height: 50vh;
width: 60vw;
overflow: hidden;
background-color: transparent;
gap: 100px;
`
const Photo = styled.img`
width: 400px;
height: 400px;
border-radius: 10px;
`
const Description = styled.p`
display: flex;
flex-direction: column;
font-size: 1.5rem;
text-align: justify;
&::before{
  content:'¡Conóceme un poco!';
  font-size: 3rem;
  position: relative;
  bottom: 50px;
  text-align: center;
}
`
const Skills = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: relative;
bottom: 80px;
`
const SkillsTitle = styled.p`
font-size: 2rem;
font-weight: bold;
`
const SkillsContainer = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(3, minmax(auto, auto));
grid-gap: 1rem;
grid-auto-flow: row;
height: auto;
margin-bottom:300px;


`
const Skill = styled.div`
background: White;
width: auto;
height: auto;
padding: 10px;
border-radius: 50px;
box-shadow: 0px 20px 50px 0px rgba(0,0,0,0.3);
transition: 1s;
cursor: default;
user-select: none;


&:hover{
background-color: #e0242d;
}
`