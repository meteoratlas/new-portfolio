import "./App.css";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { AnimatedRoute } from "./components/AnimatedRoute";

function App() {
  return (
    <HashRouter>
      <AnimatedRoute />
    </HashRouter>
  );
}

export default App;
