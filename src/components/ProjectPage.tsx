import { useParams } from "react-router-dom";
import styled from "styled-components";

const CardTemp = styled.div`
  min-height: 200px;
  width: 200px;
  background-color: salmon;
`;

export const ProjectPage = () => {
  const { id } = useParams();
  const p = useParams();
  console.log(p);
  return (
    <>
      <CardTemp>
        <p>ey oh it's a page - o</p>
        <p>{id}</p>
      </CardTemp>
    </>
  );
};
