import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Text from "./Text";
import { useMediaPredicate } from "@/utils/hooks";
import Image from "next/image";
import Modal from "./Modal";

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
  const [spotlight, setSpotlight] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (spotlight) setIsModalOpen(true);
    else setIsModalOpen(false);
  }, [spotlight]);

  const showPicture = (photoSrc: string) => {
    setSpotlight(photoSrc);
  };

  return (
    <>
      <Wrapper id="portfolio">
        <Text color="blue" weight={900} size="xl">
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
              <Card key={`left-${i}`} onClick={() => showPicture(photoSrc)}>
                <Image
                  src={photoSrc}
                  alt={`Tattoo left ${i}`}
                  fill
                  sizes="(max-width: 600px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
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
              <Card key={`right-${i}`} onClick={() => showPicture(photoSrc)}>
                <Image
                  src={photoSrc}
                  alt={`Tattoo right ${i}`}
                  fill
                  sizes="(max-width: 600px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </Card>
            ))}
          </MaruqeeContainer>
        </Container>
      </Wrapper>

      <Modal isOpen={isModalOpen} onClose={() => setSpotlight(null)}>
        {spotlight ? (
          <Image
            src={spotlight}
            alt={`Highlighted Photo`}
            fill
            sizes="(max-width: 600px) 100vw, 50vw"
            style={{ objectFit: "cover", height: "100%" }}
          />
        ) : null}
      </Modal>
    </>
  );
};

export default Gallery;

const Wrapper = styled.div`
  padding: 2rem 0;
  & > span {
    padding: 0rem 3rem;
  }
`;

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
  min-width: 200px;
  height: 300px;
  aspect-ratio: 2 / 3;
  position: relative;
  cursor: pointer;
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
        ? ["0%", "-500%"]
        : direction === "right"
        ? ["-370%", "0%"]
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
