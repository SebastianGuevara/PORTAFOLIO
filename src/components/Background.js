import React from 'react'
import styled from 'styled-components'

function Background() {
  return (
    <Container>

    </Container>
  )
}

export default Background

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
