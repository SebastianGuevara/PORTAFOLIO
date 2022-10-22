import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'


function Contact() {
  return (
    <motion.div  initial={{opacity:0}} animate={{opacity:1}} exit={{ opacity:0, transition: {duration: 0.1}}}>
      <Content>
        <Buttons>
          <ContactButton>GITHUB</ContactButton>
          <ContactButton>LINKEDIN</ContactButton>
          <ContactButton>DISCORD</ContactButton>
        </Buttons>
        <Inputs>
          <NameInput placeholder='Nombre'/>
          <NameInput placeholder='Email'/>
            <CommentInput placeholder='Escribe tu mensaje...'/>
          <Enter>ENVIAR</Enter>
        </Inputs>
      </Content>
    </motion.div>
  )
}

export default Contact

const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
top: 5vh;
height: 100vh;
`
const Buttons = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 50vw;
height: 10vh;
gap: 60px;
`
const ContactButton = styled.button`
background-color: white;
border-color: #e0242d;
border-style: solid;
border-width: 1px;
border-radius: 50px;
width: 30%;
height: 70%;
font-size: 1rem;
color: #e0242d;
cursor: pointer;
transition: 0.5s;

&:hover{
background-color: #e0242d;
color: white;
box-shadow: 0px 20px 50px -9px rgba(0,0,0,0.5);
}
`

const Inputs = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 30px;
margin-top: 100px;
width: 50vw;
height: 500px;
`
const NameInput = styled.input`
width: 60%;
height: 50px;
padding: 0px 28px;
border-radius: 20px;
border-style: solid;
border-width: 1px;
font-size:1.1rem;
vertical-align: top;
text-align: start;

&:focus{
  outline: none;
  border-color: #e0242d;
}

`
const CommentInput = styled.textarea`
width: 60%;
height: 50%;
padding: 20px 28px;
border-radius: 20px;
border-style: solid;
border-width: 1px;
font-size:1.1rem;
vertical-align: top;
text-align: start;
resize: none;
&:focus{
  outline: none;
  border-color: #e0242d;
}
`
const Enter = styled.button`
height: 10%;
width: 20%;
margin: 1px;
background: #e0242d;
border:transparent;
border-radius: 50px;
font-size: 1rem;
color: white;
cursor: pointer;
transition: 0.5s;


&:hover{
  width: 25%;
  box-shadow: 0px 20px 50px -9px rgba(0,0,0,0.5);
}
`
 