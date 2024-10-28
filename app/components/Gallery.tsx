import React from 'react'
import styled from 'styled-components';

const SEED = [1,2,3,4,5,6,7,8,9,10];

const Gallery = () => {
  return ( <Container>
    <LeftContainer>
      {SEED.map((num, i) => <div key={`left-${i}`}style={{width:'90%', minHeight: '200px', border:'1px solid red'}}/>)}
    </LeftContainer>

    <RightContainer>
      {SEED.map((num, i) => <div key={`right-${i}`} style={{width:'100%', minHeight: '200px', border:'1px solid red'}}/>)}
    </RightContainer>
  </Container> );
}
 
export default Gallery;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`

const LeftContainer = styled.div`
  background: black;
  width: 50%;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px; 
`
const RightContainer = styled.div`
  background: grey;
  width: 50%;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`