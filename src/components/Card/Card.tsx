import styled from "styled-components";
import { CardData } from "../../types/CardData";
import { motion } from "framer-motion";

const CardDiv = styled.div`
  min-height: 450px;
  width: 350px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  img {
    max-width: 100%;
  }

  h3 {
    font-family: "Source Serif 4", serif;
  }
`;

export const Card = ({ entry }: CardData) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <CardDiv>
        <img src="https://placehold.co/400/orange/white" />
        <h3>{entry.title}</h3>
      </CardDiv>
    </motion.div>
  );
};
