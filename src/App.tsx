import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AnimatedRoute } from "./components/AnimatedRoute";

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoute />
    </BrowserRouter>
  );
}

export default App;
