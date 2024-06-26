import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Sidebar } from "./Sidebar";
import { CardList } from "./CardList";
import { BasicLayout } from "./BasicLayout";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 32px;
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
