import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { BasicLayout } from "./BasicLayout";
import { motion } from "framer-motion";

const CardTemp = styled.div`
  min-height: 200px;
  width: 200px;
  background-color: salmon;
`;

export const ProjectPage = () => {
  const { id } = useParams();

  return (
    <BasicLayout>
      <CardTemp>
        <motion.p whileHover={{ scale: 1.4 }}>ey oh it's a page - o</motion.p>
        <p>{id}</p>
        <Link to="/">Back</Link>
      </CardTemp>
    </BasicLayout>
  );
};
