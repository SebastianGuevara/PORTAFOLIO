import React from 'react'
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

function Sidebar() {
  return (
    <motion.div initial={{opacity:1}} animate={{opacity:1}} exit={{ opacity:0, transition: {duration: 0.1}}}>
        <Container>
            <Github>
                <Icon icon="akar-icons:github-fill" width="40" height="40" id='gh'/>
            </Github>
            <Linkedin>
                <Icon icon="akar-icons:linkedin-box-fill" width="40" height="40" />
            </Linkedin>
            <Discord>
                <Icon icon="akar-icons:discord-fill" width="40" height="40" />
            </Discord>
        </Container>
    </motion.div>
  )
}

export default Sidebar

const Container = styled.div`
display: flex;
flex-direction: column;
position: fixed;
background: white;
height: auto;
width: 60px;
left:0px;
top: 350px;
padding: 10px 0px 5px 5px;
gap: 30px;
box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
border-radius:0px 5px 5px 0px;
z-index:1;
`
const Github = styled.button`
display: flex;
align-items:center;
justify-content: center;
background: transparent;
border: transparent;
width: 50px;
height: 50px;
cursor: pointer;
transition: 1s;
border-radius: 10px;

&:hover{
    background: rgba(224, 36, 45, 0.4);
    border-radius: 20px;
}

`
const Linkedin = styled(Github) `
`
const Discord = styled(Github) `
`