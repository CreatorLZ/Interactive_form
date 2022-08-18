import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
flex: 2;
width: 100%;
display: flex;
background-color: white;
flex-direction: column;
align-items: center;
justify-content: center;
color: gray;
position: relative;
z-index: 25;
`;

const Button = styled.button`
padding: 20px;
width: 38%;
border-radius: 10px;
border: 1px solid lightgray;
background-color: hsl(278, 68%, 11%);
color: white;

:hover{
  transform: scale(0.97);
  cursor: pointer;
 
}
@media (max-width: 1260px){ 
 width: 85%;
  }
`;


const Completestate = () => {
  const Handlerefresh = () => {
    window.location.reload();
  }
  return (
   <Container>
    <img src='./images/icon-complete.svg' alt='' style={{marginBottom:"30px"}} />
    <h1 style={{marginBottom:"30px"}}>Thank you!</h1>
    <p style={{marginBottom:"30px"}}>we've added your card details</p>
    <Button onClick={Handlerefresh} >Continue</Button>
   </Container>
  )
}

export default Completestate
