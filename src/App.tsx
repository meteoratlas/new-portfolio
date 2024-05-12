import { useState } from "react";
import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { CardList } from "./components/CardList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProjectPage } from "./components/ProjectPage";
import { Homepage } from "./components/Homepage";

function App() {
  return (
    <BrowserRouter>
      <div className="container"></div>
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"pages/:id"} element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
