import "./App.css";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { AnimatedRoute } from "./components/AnimatedRoute";
import { useState } from "react";
import { AppStateContext } from "./context/AppState";
import data from "./assets/data.json";

function App() {
  const [noMotion, setNoMotion] = useState(false);

  return (
    <AppStateContext.Provider value={{ noMotion, setNoMotion, data }}>
      <BrowserRouter>
        <AnimatedRoute />
      </BrowserRouter>
    </AppStateContext.Provider>
  );
}

export default App;
