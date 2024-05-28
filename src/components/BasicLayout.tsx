import { motion } from "framer-motion";
import { ReactNode, useContext } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { AppStateContext } from "../context/AppState";
import useReducedMotion from "../hooks/useReducedMotion";

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
  const context = useContext(AppStateContext);
  const reducedMotion = useReducedMotion(context);

  if (reducedMotion) {
    return (
      <div>
        <FullPage>{children}</FullPage>
      </div>
    );
  }

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
        duration: 0.5,
      }}
    >
      <FullPage>{children}</FullPage>
    </motion.div>
  );
};
