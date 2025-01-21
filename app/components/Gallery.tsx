import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Text from "./Text";
import { useMediaPredicate } from "@/utils/hooks";
import Image from "next/image";

const images = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/8.jpg",
  "/images/9.jpg",
  "/images/10.jpg",
  "/images/11.jpg",
  "/images/12.jpg",
  "/images/13.jpg",
  "/images/14.jpg",
  "/images/15.jpg",
  "/images/16.jpg",
  "/images/17.jpg",
  "/images/18.jpg",
  "/images/19.jpg",
];

const loopImages = Array(4).fill(images).flat();

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
          {loopImages.map((photoSrc, i) => (
            <Card key={`left-${i}`}>
              <Image
                src={photoSrc}
                alt={`Tattoo left ${i}`}
                layout="fill"
                objectFit="cover"
              />
            </Card>
          ))}
        </MaruqeeContainer>
        <MaruqeeContainer
          variants={marqueeVariants}
          initial="offscreen"
          animate="onscreen"
          custom={isMobile ? "up" : "right"}
        >
          {images.map((photoSrc, i) => (
            <Card key={`right-${i}`}>
              {/* <img src={photoSrc} /> */}
              <Image
                src={photoSrc}
                alt={`Tattoo right ${i}`}
                layout="fill"
                objectFit="cover"
              />
            </Card>
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
  position: relative;
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
        ? ["0%", "-550%"]
        : direction === "right"
        ? ["-100%", "550%"]
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
