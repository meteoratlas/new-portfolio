import styled from "styled-components";
import { CardData } from "../../types/CardData";
import { motion } from "framer-motion";
import useReducedMotion from "../../hooks/useReducedMotion";
import { useContext } from "react";
import { AppStateContext } from "../../context/AppState";

const CardDiv = styled.div`
  min-height: 400px;
  width: 350px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  text-decoration: none;
  color: var(--color-black);

  img {
    max-width: 100%;
  }

  .title {
    height: 60px;
    display: flex;
    align-items: center;
  }

  h2 {
    font-family: "Source Serif 4", serif;
    font-size: 20px;
    font-style: italic;
    padding: 0 0.5em;
    margin-top: 0;
    margin-bottom: 10px;
  }
`;

export const Card = ({ entry }: CardData) => {
  const context = useContext(AppStateContext);
  const reducedMotion = useReducedMotion(context);

  return (
    <motion.div whileHover={{ scale: reducedMotion ? 1 : 1.05 }}>
      <CardDiv className="card">
        <img src={`/images/${entry.cardImage}`} alt={entry.cardAlt} />
        <div className="title">
          {" "}
          <h2>{entry.title}</h2>
        </div>
      </CardDiv>
    </motion.div>
  );
};
