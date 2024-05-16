import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

const FullPage = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  position: relative;
`;

export const BasicLayout = ({ children }: Props) => {
  const location = useLocation();
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      key={location.pathname}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <FullPage>{children}</FullPage>
    </motion.div>
  );
};
