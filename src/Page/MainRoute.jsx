import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Playzone from "./Playzone";
import Dashboard from './Dashboard';
const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/playzone" element={<Playzone />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};
export default MainRoute;
