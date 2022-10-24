import React from 'react'
import styled from 'styled-components'
import { Icon } from '@iconify/react'

function ProjectCard() {
  return (
    <div>
         <Project>
            <div id='hover'>
              <Button><Icon icon="akar-icons:github-fill" width="40" height="40" id='gh'/>Repositorio</Button>
              <Button><Icon icon="pepicons:internet" width="40" height="40" />Visítalo</Button>
            </div> 
            <img src='/images/project.png' alt=''/>
            <h1>Clon de Disney +</h1>
            <p>Este es un proyecto de React el cual tiene como objetivo parecerse a la famosa plataforma de streaming Disney +. </p>
            <h4>Tecnologías</h4>
            <Technologies>
              <Technology>
                <TechnologyImg>
                  <img src='/images/react.png' alt=''/>
                </TechnologyImg>
                <p>React</p>
              </Technology>
              <Technology>
                <TechnologyImg>
                  <img src='/images/redux.png' alt=''/>
                </TechnologyImg>
                <p>Redux</p>
              </Technology>
              <Technology>
                <TechnologyImg>
                  <img src='/images/firebase.png' alt=''/>
                </TechnologyImg>
                <p>Firebase</p>
              </Technology>
            </Technologies>     
          </Project>    
    </div>
  )
}

export default ProjectCard

const Project = styled.div`
background-color: white;
width: 25vw;
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
grid-template-columns: repeat(5, 1fr);
width:83%;
height: 11vh;
margin: auto;
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
const Button = styled.button`
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

&:hover
{
  width: 60%;
  box-shadow: 0px 12px 14px -1px rgba(0,0,0,0.7);
}

`