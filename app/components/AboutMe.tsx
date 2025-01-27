import React from "react";
import styled from "styled-components";
import Text from "./Text";
import Image from "next/image";

const placeholder =
  " My tattoo style reflects my love for nature and my background in oil painting. I specialize in creating vibrant and elegant designs, focusing on detailed botanical elements and flowing compositions that blend bold colors with artisitic realism";

const AboutMe = () => {
  return (
    <Container id="about-me">
      <ImageWrapper>
        <ImageContainer
          style={{
            background: "black",
          }}
        >
          <Image
            src="/images/portrait.jpg"
            alt={"Portrait Photo"}
            fill
            sizes="(max-width: 500px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
            priority
          />
        </ImageContainer>
        <ImageContainer
          className="lena-secondary"
          style={{ background: "grey" }}
        >
          <Image
            src="/images/1.jpg"
            alt={"Portrait Photo"}
            fill
            sizes="(max-width: 500px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
            priority
          />
        </ImageContainer>
      </ImageWrapper>

      <WebDetails>
        <Text
          className="about-me-title"
          as="h2"
          color="blue"
          size="lg"
          weight={900}
        >
          Passion
        </Text>
        <Text
          className="about-me-title"
          as="h2"
          color="blue"
          size="lg"
          weight={900}
        >
          and Precision
        </Text>

        <Text
          className="about-me-title-mobile"
          as="h2"
          color="blue"
          size="lg"
          weight={900}
        >
          Passion and Precicion
        </Text>
        <Text size="lg" as="div">
          {placeholder}
        </Text>
      </WebDetails>
    </Container>
  );
};

export default AboutMe;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  padding: 1rem;

  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;

  .about-me-title {
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;

  & > .lena-secondary {
    display: none;
  }

  @media screen and (max-width: 500px) {
    height: 50%;
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  width: 80%;
  height: 80%;
  aspect-ratio: 2 / 3;
  position: relative;

  @media screen and (max-width: 500px) {
    max-width: 200px;

    &:first-of-type {
      position: absolute;
      left: 0rem;
      z-index: 1;
      height: 65%;
    }

    &:last-of-type {
      display: block;
      position: absolute;
      right: 0rem;
      height: 100%;
    }
  }
`;

const WebDetails = styled.div`
  width: 50%;
  height: 50%;

  & > h2 {
    font-size: 5vw;
    &:first-of-type {
      width: fit-content;
      position: relative;
      left: 8rem;
    }
  }

  & > div {
    width: 60%;
    position: relative;
    left: 40%;
  }

  .about-me-title-mobile {
    display: none;
  }

  @media screen and (max-width: 1000px) {
    & > h2 {
      &:first-of-type {
        left: 0;
      }
    }

    & > div {
      width: 100%;
      left: 0;
    }
  }

  @media screen and (max-width: 500px) {
    width: 100%;

    .about-me-title {
      display: none;

      &-mobile {
        display: block;
      }
    }
  }
`;
