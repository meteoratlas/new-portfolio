import styled from "styled-components";
import { CardData } from "../../types/CardData";
import { motion, useReducedMotion } from "framer-motion";

const CardDiv = styled.div`
  min-height: 400px;
  width: 350px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  text-decoration: none;

  img {
    max-width: 100%;
  }

  .title {
    height: 60px;
    display: flex;
    align-items: center;
  }

  h3 {
    font-family: "Source Serif 4", serif;
    font-size: 20px;
    font-style: italic;
    padding: 0 0.5em;
    margin-top: 0;
    margin-bottom: 10px;
  }
`;

export const Card = ({ entry }: CardData) => {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div whileHover={{ scale: reducedMotion ? 1 : 1.05 }}>
      <CardDiv className="card">
        {/* <img src="https://placehold.co/400/orange/white" /> */}
        <img src={`/images/${entry.cardImage}`} />
        <div className="title">
          {" "}
          <h3>{entry.title}</h3>
        </div>
      </CardDiv>
    </motion.div>
  );
};
