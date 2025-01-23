import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

import Text from "./Text";

const FAQ_STORE = [
  {
    key: "faq_1",
    question: "How do I start with the idea for my tattoo",
    answer:
      "Conceptualize the idea or there you want for your tattoo. Create an album with reference pictures that align with your vision.",
  },
  {
    key: "faq_2",
    question: "How should I decide the placement?",
    answer: "Its' me - Lena Ink",
  },
  {
    key: "faq_3",
    question: "What about the size of the tattoo?",
    answer: "Its' me - Lena Ink",
  },
  {
    key: "faq_4",
    question: "How do I book an appointment?",
    answer: "Its' me - Lena Ink",
  },
  {
    key: "faq_5",
    question: "What should I prepare the day before the tattoo session?",
    answer: "Its' me - Lena Ink",
  },
  {
    key: "faq_6",
    question: "What happens during the tattoo session?",
    answer: "Its' me - Lena Ink",
  },
  {
    key: "faq_7",
    question: "How do I care for my tattoo afterward?",
    answer: "Its' me - Lena Ink",
  },
  {
    key: "faq_8",
    question: "What can I expect during healing?",
    answer: "Its' me - Lena Ink",
  },
  {
    key: "faq_9",
    question: "What should I avoid while the tattoo heals?",
    answer: "Its' me - Lena Ink",
  },
  {
    key: "faq_10",
    question: "What are signs my tattoo isn't healing properly?",
    answer: "Its' me - Lena Ink",
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
  answer: string;
}) => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  return (
    <Tile>
      <div
        style={{ display: "flex", alignItems: "center" }}
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <Plus size={16} />
        <Text size="md">{question}</Text>
      </div>
      <Answer
        initial={{ height: 0 }}
        animate={{ height: showAnswer ? "auto" : "0" }}
      >
        <Text size="sm">{answer}</Text>
      </Answer>
    </Tile>
  );
};

const Answer = styled(motion.div)`
  overflow: hidden;
`;

const Tile = styled.div`
  border: 1px solid black;
  padding: 0.5rem;
  margin: 0.5rem 0;

  svg {
    min-width: 16px;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 1rem;

  & > span {
    padding: 0rem 3rem;
  }
`;
