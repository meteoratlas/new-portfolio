import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Sidebar } from "./Sidebar";
import { CardList } from "./CardList";
import { BasicLayout } from "./BasicLayout";
import { motion } from "framer-motion";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 64px;
  }
`;

export const Homepage = () => {
  const { id } = useParams();
  return (
    <BasicLayout>
      <FlexContainer>
        <Sidebar />
        <CardList />
      </FlexContainer>
    </BasicLayout>
  );
};
