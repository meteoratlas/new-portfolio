import { useState } from "react";
import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { CardList } from "./components/CardList";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { ProjectPage } from "./components/ProjectPage";
import { Homepage } from "./components/Homepage";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      onExitComplete={() => {
        window.scrollTo(0, 0);
        console.log("anim complete");
      }}
    >
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
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Homepage />} />
            <Route path={"pages/:id"} element={<ProjectPage />} />
          </Routes>
        </BrowserRouter>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
