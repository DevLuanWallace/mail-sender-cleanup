import { Route, Routes } from "react-router";
import "./App.css";
import { Home } from "../pages/Home";
import { Home2 } from "../pages/Home2";


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home2" element={<Home2 />} />
    </Routes>
  );
};
