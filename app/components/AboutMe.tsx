import React from 'react'
import styled from 'styled-components';
import Text from './Text';

const placeholder = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker";

const AboutMe = () => {
  return (
    <Container id='about-me'>
      <div style={{height: '50%', position: 'relative', display: 'flex', justifyContent:'center', alignItems:'center'}}>
        <div style={{background:'black', width: '40%', height: '50%', position: 'relative', left: '10px'}}></div>
        <div style={{background: 'grey', width: '40%', height: '60%'}}></div>
      </div>

      <div style={{height: '50%'}}>
        <Text className='about-me-title' as="h2" color='blue' size='lg' weight={900}>Passion and Precision</Text>
        <Text size='sm'>{placeholder}</Text>
      </div>
    </Container>
  );
}

export default AboutMe;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  padding: 1rem;

  .about-me-title {
    margin-bottom: 1rem;
  }
`