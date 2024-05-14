import { AnimatePresence, motion } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import { Homepage } from "./Homepage";
import { ProjectPage } from "./ProjectPage";

export const AnimatedRoute = () => {
  const location = useLocation();

  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      onExitComplete={() => {
        window.scrollTo(0, 0);
        console.log("anim complete");
      }}
    >
      <Routes location={location} key={location.pathname}>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"pages/:id"} element={<ProjectPage />} />
      </Routes>
    </AnimatePresence>
  );
};