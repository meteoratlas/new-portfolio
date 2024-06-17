import { Card } from "./Card/Card";
import { Link } from "react-router-dom";
import data from "../assets/data.json";
import styled from "styled-components";
import { useContext, useEffect } from "react";
import { animate, stagger } from "framer-motion";
import { AppStateContext } from "../context/AppState";
import useReducedMotion from "../hooks/useReducedMotion";

const CardContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, 350px);
  justify-content: space-around;
  margin-top: 2em;
  width: 100%;
  grid-gap: 16px;
  margin-top: 2em;

  a {
    text-decoration: none;
  }

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const List = () => (
  <CardContainer>
    {data.entries.map((card) => (
      <Link to={"/" + card.id} key={card.id} state={card}>
        <Card entry={card} />
      </Link>
    ))}
  </CardContainer>
);

export const CardList = () => {
  const context = useContext(AppStateContext);
  const reducedMotion = useReducedMotion(context);

  useEffect(() => {
    if (!reducedMotion) {
      animate(
        ".card",
        { y: ["100%", 0], opacity: [0, 1] },
        { delay: stagger(0.1, { startDelay: 0.5 }) }
      );
    }
  }, []);

  return <List />;
};
