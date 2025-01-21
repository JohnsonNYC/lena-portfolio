import React from "react";
import styled from "styled-components";
import Text from "./Text";

const HomeBanner = () => {
  return (
    <Container>
      <Video autoPlay muted loop>
        <source src="/videos/Intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
      <Text className="banner-title">New York City Based</Text>
    </Container>
  );
};

export default HomeBanner;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;

  .banner-title {
    position: absolute;
    bottom: 2rem;
    left: 2rem;
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
`;
