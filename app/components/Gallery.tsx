import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Text from "./Text";
import { useMediaPredicate } from "@/utils/hooks";

const SEED = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  ,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
];

const Gallery = () => {
  const isMobile = useMediaPredicate("(max-width: 600px)");

  return (
    <>
      <Text color="blue" weight={900} size="xl" id="portfolio">
        Gallery
      </Text>
      <Container>
        <MaruqeeContainer
          variants={marqueeVariants}
          initial="offscreen"
          animate="onscreen"
          custom={isMobile ? "down" : "left"}
        >
          {SEED.map((num, i) => (
            <Card key={`left-${i}`}>{num}</Card>
          ))}
        </MaruqeeContainer>

        <MaruqeeContainer
          variants={marqueeVariants}
          initial="offscreen"
          animate="onscreen"
          custom={isMobile ? "up" : "right"}
        >
          {SEED.map((num, i) => (
            <Card key={`right-${i}`}>{num}</Card>
          ))}
        </MaruqeeContainer>
      </Container>
    </>
  );
};

export default Gallery;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  gap: 20px;
  overflow: hidden;

  width: 100vw;
  height: 100vh;

  @media screen and (min-width: 600px) {
    flex-direction: column;
  }
`;

const MaruqeeContainer = styled(motion.div)`
  width: 50%;
  display: flex;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  width: 200px;
  height: 300px;
  aspect-ratio: 2 / 3;
  border: 1px solid black;
`;

const marqueeVariants = {
  onscreen: (direction: string) => ({
    y:
      direction === "down"
        ? ["-550%", "100%"]
        : direction === "up"
        ? ["0%", "-550%"]
        : [0, 0],
    x:
      direction === "left"
        ? ["-550%", "100%"]
        : direction === "right"
        ? ["0%", "-550%"]
        : [0, 0],
    transition: {
      y: {
        repeat: Infinity,
        duration: 300,
        ease: "linear",
      },
      x: {
        repeat: Infinity,
        duration: 300,
        ease: "linear",
      },
    },
  }),
  offscreen: { y: 0, x: 0 },
};
