import React, {useState} from 'react'
import styled from 'styled-components'
import Switch from 'react-switch'


function Language() {
    const [checked, setChecked] = useState(false);
    const [languageState, setLanguageState] = useState(false)
    const handleChange = nextChecked => {
      setChecked(nextChecked);
      setLanguageState(nextChecked);
    };
    


  return (
    <Container>
        <Text>{languageState?'CAMBIAR A ESPAÑOL':'CHANGE TO ENGLISH'}</Text>
        <SwitchContainer>
            <Switch onChange={handleChange} checked={checked}
                onColor='#e0242d' offColor='#e0242d'
                uncheckedIcon={
                    <Es>
                        ES
                    </Es>                   
                }
                checkedIcon={
                    <En>
                        EN
                    </En>
                }/>
        </SwitchContainer>     
    </Container>
  )
}

export default Language

const Container = styled.div`
position: fixed;
right: 20px;
bottom: 40px;
background-color:#e0242d;
width: 120px;
height: 100px;
border-radius: 5px;
z-index: 1;
`
const Text = styled.p`
color: white;
`
const SwitchContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
background: white;
border-radius:50px;
width: 120px;
height: 50px;
box-shadow: 0px 20px 50px 0px rgba(0,0,0,0.6);
`
const Es = styled.div`
position: relative;
display: flex;
justify-content: center;
color: white;
right: 2px;
top: 2px;
`
const En = styled.div`
position: relative;
display: flex;
justify-content: center;
color: white;
left: 2px;
top: 2px;;
`
