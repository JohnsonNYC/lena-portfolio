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
            src="/images/20.jpg"
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
          color="black"
          size="lg"
          weight={900}
          font="calligraphyOne"
        >
          Passion
        </Text>
        <Text
          className="about-me-title"
          as="h2"
          color="black"
          size="lg"
          weight={900}
          font="calligraphyOne"
        >
          and Precision
        </Text>

        <Text
          className="about-me-title-mobile"
          as="h2"
          color="black"
          size="lg"
          weight={900}
          font="calligraphyOne"
        >
          Passion & Precicion
        </Text>
        <Text size="lg" as="div" font="timesNewRoman">
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
  align-items: center;

  .about-me-title {
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 950px) {
    min-height: 100vh;
    height: auto;
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  & > .lena-secondary {
    display: none;
  }

  @media screen and (max-width: 650px) {
    height: 50%;
    width: 100%;
    display: flex;

    & > .lena-secondary {
      display: block;
    }
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  aspect-ratio: 2 / 3;
  position: relative;

  @media screen and (max-width: 500px) {
    max-width: 200px;

    &:first-of-type {
      left: 0rem;
      z-index: 1;
      height: 65%;
    }
  }
`;

const WebDetails = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/images/20.jpg");
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;

  & > h2 {
    font-size: 5vw;
    left: 2rem;
    position: relative;

    &:first-of-type {
      width: fit-content;
      left: 8rem;
    }
  }

  & > div {
    width: 60%;
    position: relative;
    left: 30%;
  }

  .about-me-title-mobile {
    display: none;
  }

  @media screen and (max-width: 950px) {
    background-image: none;

    & > div {
      width: 100%;
      left: auto;
    }
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 50%;
    background-image: none;

    .about-me-title {
      display: none;

      &-mobile {
        display: block;
      }
    }
  }
`;
