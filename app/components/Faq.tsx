import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

import Text from "./Text";

const FAQ_STORE = [
  {
    key: "faq_1",
    question: "How do I start with the idea for my tattoo",
    answer: [
      "Start by thinking about what’s meaningful to your story, symbols, or ideas you want to represent.",
      "Consider the style, placement, and overall vibe you want. Then, gather references or examples to help guide the design. If you’re unsure, a good artist can help you shape your idea into something unique. ",
    ],
  },
  {
    key: "faq_2",
    question: "How should I decide the placement?",
    answer: [
      "1. Decide how visible you want your new tattoo to be.",
      "2. Consider where on your body your design will look best.",
      "3. Balance your tattoo placement with your existing or planned art.",
    ],
  },
  {
    key: "faq_3",
    question: "What about the size of the tattoo?",
    answer: [
      "Measure the length and width of the area where you want to place your tattoo in inches.",
    ],
  },
  {
    key: "faq_4",
    question: "How do I book an appointment?",
    answer: [
      "Use the form below to describe you tattoo, the size, the placement, and any referecences you have.",
    ],
  },
  {
    key: "faq_5",
    question: "What should I prepare the day before the tattoo session?",
    answer: [
      "Three days before the session while showering, gently exfoliate the area that will be tattooed.",
      "Apply lotion to the area to hydrate and soften your skin.",
      "Drink a lot of water.",
      "Avoid alcohol for 24 hours before getting tattooed.",
      "Avoid sunburns and tanning.",
      "Protect your skin.",
      "Skip over-the-counter blood thinners.",
      "Avoid Excessive Caffeine. ",
    ],
  },
  {
    key: "faq_6",
    question: "What happens during the tattoo session?",
    answer: [
      "The artist will first clean and prepare the area where the tattoo will be, then apply a stencil of the deseign, and finally use a tattoo machine to puncture the skin with needles, depositing ink to create the tattoo.",
      "This process may include outlining the design, adding color, and shading, and will be followed by cleaning and applying a bandage to the area to protect it while it heals. ",
    ],
  },
  {
    key: "faq_7",
    question: "How do I care for my tattoo afterward?",
    answer: [
      "During the healing process, a new tattoo may be red, swollen, painful, itchy, and oozing. Scabs may form, and the skin may peel. It can take up to two months for the tattoo to fully heal. Pain and swelling usually improves within three days.",
    ],
  },
  {
    key: "faq_8",
    question: "What can I expect during healing?",
    answer: [
      "During the healing process, a new tattoo may be red, swollen, painful, itchy, and oozing. Scabs may form, and the skin may peel. It can take up to two months for the tattoo to fully heal. Pain and swelling usually improves within three days.",
    ],
  },
  {
    key: "faq_9",
    question: "What should I avoid while the tattoo heals?",
    answer: [
      "Avoid activities that cause excessive sweating. Do not wear clothes that will sitck to the tattoo. Do not consume alcohol or food that you are allergic to. Avoid sleeping in a way that puts direct pressure on the new tattoo. No gym, tanning, swimming, sauna, hot tub. Avoid direct sunlight on the tattoo.",
    ],
  },
  {
    key: "faq_10",
    question: "What are signs my tattoo isn't healing properly?",
    answer: [
      "Signs include: persistent redness that spreads or darkens, excessive swelling, pus or green/yellow fluid oozing from the tattoo site, red streaks extending from teh tattoo, severe pain that worsens, fever or chills, significant scarring, large raised bumps, hives or itchy welts and noticeable color loss within the tattoo design. If you notice any of these, consult your tattoo artist or a healthcare professional immediately.",
    ],
  },
];

const Faq = () => {
  return (
    <Container id="faq">
      <Text color="blue" size="xl" weight={900}>
        FAQ
      </Text>
      {FAQ_STORE.map((data) => (
        <QuestionTile
          key={data.key}
          question={data.question}
          answer={data.answer}
        />
      ))}
    </Container>
  );
};

export default Faq;

const QuestionTile = ({
  question,
  answer,
}: {
  question: string;
  answer: string[];
}) => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  return (
    <Tile>
      <div
        style={{ display: "flex", alignItems: "center" }}
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: showAnswer ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {showAnswer ? <Minus size={16} /> : <Plus size={16} />}
        </motion.div>
        <Text size="md">{question}</Text>
      </div>
      <Answer
        initial={{ height: 0 }}
        animate={{
          height: showAnswer ? "auto" : "0",
          padding: showAnswer ? "1rem 0rem" : "0",
        }}
      >
        <ul>
          {answer.map((s, i) => (
            <Text as="li" size="sm" key={`s-${i}`} color="black">
              {s}
            </Text>
          ))}
        </ul>
      </Answer>
    </Tile>
  );
};

const Answer = styled(motion.div)`
  overflow: hidden;
  & > ul > li {
    margin-bottom: 0.5rem;
  }
`;

const Tile = styled.div`
  border: 1px solid black;
  padding: 0.5rem;
  margin: 0.5rem 0;
  cursor: pointer;

  svg {
    width: 20px;
    margin-right: 0.5rem;
  }
`;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 1rem;

  & > span {
    padding: 0rem 3rem;
  }
`;
