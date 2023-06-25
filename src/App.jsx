import Home from "./Pages/Home";
import Stacks from "./Pages/Stacks";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stacks" element={<Stacks />} />
    </Routes>
  );
}

export default App;
