import styled from "styled-components";
import { CardData } from "../../types/CardData";

const CardDiv = styled.div`
  min-height: 450px;
  width: 350px;
  background-color: rosybrown;
`;

export const Card = ({ entry }: CardData) => {
  return (
    <>
      <CardDiv>
        <img />
        <h3>{entry.title}</h3>
      </CardDiv>
    </>
  );
};
