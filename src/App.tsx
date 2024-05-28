import "./App.css";
import { HashRouter } from "react-router-dom";
import { AnimatedRoute } from "./components/AnimatedRoute";
import { useState } from "react";
import { AppStateContext } from "./context/AppState";

function App() {
  const [noMotion, setNoMotion] = useState(false);

  return (
    <AppStateContext.Provider value={{ noMotion, setNoMotion }}>
      <HashRouter>
        <AnimatedRoute />
      </HashRouter>
    </AppStateContext.Provider>
  );
}

export default App;
