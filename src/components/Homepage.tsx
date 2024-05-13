import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Sidebar } from "./Sidebar";
import { CardList } from "./CardList";
import { BasicLayout } from "./BasicLayout";
import { motion } from "framer-motion";

const CardTemp = styled.div`
  min-height: 200px;
  width: 200px;
  background-color: salmon;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
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
