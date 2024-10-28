import React from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import Text from './Text';

const SEED = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10];

const Gallery = () => {
  return (
    <>
    <Text color='blue' weight={900} size='xl'>Gallery</Text>
    <Container>
      <MaruqeeContainer 
        variants={marqueeVariants}
        initial="offscreen"
        animate="onscreen"
        custom="down">
        {SEED.map((num, i) => <div key={`left-${i}`}style={{minWidth:'150px', minHeight: '200px', border:'1px solid black'}}>{num}</div>)}
      </MaruqeeContainer>

      <MaruqeeContainer
        variants={marqueeVariants}
        initial="offscreen"
        animate="onscreen"
        custom="up"
      >
        {SEED.map((num, i) => <div key={`right-${i}`} style={{minWidth:'150px', minHeight: '200px', border:'1px solid red'}}>{num}</div>)}
      </MaruqeeContainer>
    </Container>
    </>
    );
}

export default Gallery;

const Container = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  padding: 1rem;
  gap: 20px;
  overflow: hidden; 

  width: 100vw;
  height: 100vh;
`
const MaruqeeContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

const marqueeVariants = {
  onscreen: (direction: string) => ({
    y: direction === "down" ? ["-550%", "100%"] : ["0%", "-550%"],
    transition: {
      y: {
        repeat: Infinity,
        duration: 180,
        ease: "linear",
      },
    },
  }),
  offscreen: { y: 0 },
};