import { Routes, Route, Link } from "react-router-dom";
import Topik1 from "./pages/topik1/Topik1";
import Topik2 from "./pages/topik2/Topik2";
import Showcase from "./pages/showcase/Showcase";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Showcase />} />
      <Route path="/topik1/*" element={<Topik1 />} />
      <Route path="/topik2/*" element={<Topik2 />} />
    </Routes>
  );
}
