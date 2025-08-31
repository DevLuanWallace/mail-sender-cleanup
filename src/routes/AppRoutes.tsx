import { Route, Routes } from "react-router";
import "./App.css";
import { Home } from "../pages/Home";
import { Home2 } from "../pages/Home2";


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1> AQUI NAO TEM NADA </h1>} />
      <Route path="/home" element={<Home />} />
      <Route path="/home2" element={<Home2 />} />
    </Routes>
  );
};
