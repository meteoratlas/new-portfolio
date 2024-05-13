import { motion } from "framer-motion";
import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

const FullPage = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const BasicLayout = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
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
