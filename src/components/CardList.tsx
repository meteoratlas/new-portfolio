import { Card } from "./Card/Card";
import { Link, useParams } from "react-router-dom";
import data from "../assets/data.json";
import styled from "styled-components";

const CardContainer = styled.section`
  display: flex;
  flex-direction: row;
  gap: 16px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin-top: 64px;
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
  // const { id } = useParams();

  return <List />;
};
