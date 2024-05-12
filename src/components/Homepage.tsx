import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Sidebar } from "./Sidebar";
import { CardList } from "./CardList";

const CardTemp = styled.div`
  min-height: 200px;
  width: 200px;
  background-color: salmon;
`;

export const Homepage = () => {
  const { id } = useParams();
  const p = useParams();
  console.log(p);
  return (
    <>
      <h1>Homepage</h1>
      <Sidebar />
      <CardList />
    </>
  );
};
