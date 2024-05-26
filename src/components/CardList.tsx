import { Card } from "./Card/Card";
import { Link, useParams } from "react-router-dom";
import data from "../assets/data.json";
import styled from "styled-components";
import { useEffect } from "react";
import { animate, stagger, useReducedMotion } from "framer-motion";

const CardContainer = styled.section`
  /* display: flex;
  flex-direction: row;
  gap: 16px;
  flex-wrap: wrap;
  /* align-items: center; 
  justify-content: space-around; */
  display: grid;
  grid-template-columns: repeat(auto-fill, 350px);
  /* grid-gap: 1rem; */
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
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!reducedMotion) {
      animate(
        ".card",
        { y: ["100%", 0], opacity: [0, 1] },
        { delay: stagger(0.1) }
      );
    }
  }, []);

  return <List />;
};
